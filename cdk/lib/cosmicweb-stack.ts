import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as path from 'path';

export interface CosmicWebStackProps extends cdk.StackProps {
  certificateArn?: string;
}

export class CosmicWebStack extends cdk.Stack {
  public readonly hostedZone: route53.IHostedZone;

  constructor(scope: Construct, id: string, props?: CosmicWebStackProps) {
    super(scope, id, props);

    const domainName = 'cosmicrenewableenergy.com.au';
    const wwwDomainName = `www.${domainName}`;

    // Create Route53 Hosted Zone for the domain
    this.hostedZone = new route53.PublicHostedZone(this, 'CosmicWebHostedZone', {
      zoneName: domainName,
      comment: 'Hosted zone for Cosmic Renewable Energy website',
    });

    // Import ACM Certificate from us-east-1 (must be created separately first)
    const certificate = props?.certificateArn
      ? acm.Certificate.fromCertificateArn(this, 'ImportedCertificate', props.certificateArn)
      : undefined;

    // Create S3 bucket for static website hosting (private, accessed via CloudFront)
    const websiteBucket = new s3.Bucket(this, 'CosmicWebBucket', {
      bucketName: `cosmic-renewable-energy-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: false,
    });

    // ============================================
    // Lambda Functions for API
    // ============================================

    // IAM role for Lambda functions with SES permissions
    const lambdaRole = new iam.Role(this, 'LambdaExecutionRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
      ],
    });

    // Add SES send email permission
    lambdaRole.addToPolicy(new iam.PolicyStatement({
      actions: ['ses:SendEmail', 'ses:SendRawEmail'],
      resources: ['*'],
    }));

    // Contact Form Lambda
    const contactLambda = new lambda.Function(this, 'ContactLambda', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/contact')),
      role: lambdaRole,
      timeout: cdk.Duration.seconds(30),
      environment: {
        SENDER_EMAIL: `noreply@${domainName}`,
      },
    });

    // Quote Form Lambda
    const quoteLambda = new lambda.Function(this, 'QuoteLambda', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/quote')),
      role: lambdaRole,
      timeout: cdk.Duration.seconds(30),
      environment: {
        SENDER_EMAIL: `noreply@${domainName}`,
      },
    });

    // Google Reviews Lambda
    const reviewsLambda = new lambda.Function(this, 'ReviewsLambda', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/google-reviews')),
      timeout: cdk.Duration.seconds(30),
      environment: {
        // These will be set via AWS Console or secrets manager
        GOOGLE_MY_BUSINESS_ACCOUNT_ID: '',
        GOOGLE_MY_BUSINESS_LOCATION_ID: '',
        GOOGLE_MY_BUSINESS_API_KEY: '',
      },
    });

    // ============================================
    // API Gateway with Rate Limiting
    // ============================================

    const api = new apigateway.RestApi(this, 'CosmicWebApi', {
      restApiName: 'Cosmic Renewable Energy API',
      description: 'API for contact forms and reviews',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'Authorization'],
      },
      deployOptions: {
        // Rate limiting: 10 requests per second, burst of 20
        throttlingRateLimit: 10,
        throttlingBurstLimit: 20,
      },
    });

    // Usage plan with stricter limits for form submissions
    const usagePlan = api.addUsagePlan('FormSubmissionPlan', {
      name: 'FormSubmissionPlan',
      description: 'Rate limiting for contact and quote forms',
      throttle: {
        rateLimit: 5,    // 5 requests per second
        burstLimit: 10,  // Allow burst of 10
      },
      quota: {
        limit: 100,      // 100 requests per day
        period: apigateway.Period.DAY,
      },
    });

    usagePlan.addApiStage({
      stage: api.deploymentStage,
    });

    // API endpoints
    const contactResource = api.root.addResource('api').addResource('contact');
    contactResource.addMethod('POST', new apigateway.LambdaIntegration(contactLambda));

    const quoteResource = api.root.getResource('api')!.addResource('quote');
    quoteResource.addMethod('POST', new apigateway.LambdaIntegration(quoteLambda));

    const reviewsResource = api.root.getResource('api')!.addResource('google-reviews');
    reviewsResource.addMethod('GET', new apigateway.LambdaIntegration(reviewsLambda));

    // ============================================
    // CloudFront
    // ============================================

    // CloudFront Function to handle subdirectory index.html rewrites
    const urlRewriteFunction = new cloudfront.Function(this, 'UrlRewriteFunction', {
      code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Check if URI ends with '/' and add index.html
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  }
  // Check if URI doesn't have an extension (no dot in last segment)
  else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }

  return request;
}
      `),
      functionName: 'CosmicWebUrlRewrite',
      comment: 'Rewrites URLs to append index.html for subdirectories',
    });

    // Create CloudFront distribution with custom domain
    const distribution = new cloudfront.Distribution(this, 'CosmicWebDistribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
        functionAssociations: [{
          function: urlRewriteFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        }],
      },
      domainNames: certificate ? [domainName, wwwDomainName] : undefined,
      certificate: certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
        {
          httpStatus: 403,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    });

    // Create Route53 A records only if certificate is available
    if (certificate) {
      new route53.ARecord(this, 'CosmicWebAliasRecord', {
        zone: this.hostedZone,
        recordName: domainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });

      new route53.ARecord(this, 'CosmicWebWwwAliasRecord', {
        zone: this.hostedZone,
        recordName: wwwDomainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });
    }

    // ============================================
    // Outputs
    // ============================================

    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name for GitHub Actions',
      exportName: 'CosmicWebBucketName',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID for cache invalidation',
      exportName: 'CosmicWebDistributionId',
    });

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
      exportName: 'CosmicWebDistributionDomain',
    });

    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: certificate ? `https://${domainName}` : `https://${distribution.distributionDomainName}`,
      description: 'Website URL',
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: `https://${distribution.distributionDomainName}`,
      description: 'CloudFront Distribution URL',
    });

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url,
      description: 'API Gateway Endpoint URL',
      exportName: 'CosmicWebApiEndpoint',
    });

    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: this.hostedZone.hostedZoneId,
      description: 'Route53 Hosted Zone ID',
      exportName: 'CosmicWebHostedZoneId',
    });

    new cdk.CfnOutput(this, 'HostedZoneName', {
      value: this.hostedZone.zoneName,
      description: 'Route53 Hosted Zone Name',
      exportName: 'CosmicWebHostedZoneName',
    });

    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', this.hostedZone.hostedZoneNameServers || []),
      description: 'Route53 Name Servers - Update these at Hostinger',
    });

    new cdk.CfnOutput(this, 'DomainName', {
      value: domainName,
      description: 'Custom Domain Name',
    });

    new cdk.CfnOutput(this, 'Architecture', {
      value: 'Route53 + S3 + CloudFront + ACM + Lambda + API Gateway',
      description: 'Static site with serverless API',
    });

    new cdk.CfnOutput(this, 'CostOptimization', {
      value: 'Route53 ($0.50) + S3 + CloudFront + Lambda: ~$3-6/month',
      description: 'Expected monthly cost for low traffic',
    });

    new cdk.CfnOutput(this, 'SESNote', {
      value: 'Remember to verify email domain in SES and request production access',
      description: 'SES Setup Required',
    });
  }
}
