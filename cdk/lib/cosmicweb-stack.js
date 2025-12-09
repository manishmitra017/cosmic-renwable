"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosmicWebStack = void 0;
const cdk = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const origins = require("aws-cdk-lib/aws-cloudfront-origins");
const route53 = require("aws-cdk-lib/aws-route53");
const targets = require("aws-cdk-lib/aws-route53-targets");
const acm = require("aws-cdk-lib/aws-certificatemanager");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
const iam = require("aws-cdk-lib/aws-iam");
const path = require("path");
class CosmicWebStack extends cdk.Stack {
    constructor(scope, id, props) {
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
            runtime: lambda.Runtime.NODEJS_20_X,
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
            runtime: lambda.Runtime.NODEJS_20_X,
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
            runtime: lambda.Runtime.NODEJS_20_X,
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
        // API Gateway
        // ============================================
        const api = new apigateway.RestApi(this, 'CosmicWebApi', {
            restApiName: 'Cosmic Renewable Energy API',
            description: 'API for contact forms and reviews',
            defaultCorsPreflightOptions: {
                allowOrigins: apigateway.Cors.ALL_ORIGINS,
                allowMethods: apigateway.Cors.ALL_METHODS,
                allowHeaders: ['Content-Type', 'Authorization'],
            },
        });
        // API endpoints
        const contactResource = api.root.addResource('api').addResource('contact');
        contactResource.addMethod('POST', new apigateway.LambdaIntegration(contactLambda));
        const quoteResource = api.root.getResource('api').addResource('quote');
        quoteResource.addMethod('POST', new apigateway.LambdaIntegration(quoteLambda));
        const reviewsResource = api.root.getResource('api').addResource('google-reviews');
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
exports.CosmicWebStack = CosmicWebStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zbWljd2ViLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29zbWljd2ViLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCxtREFBbUQ7QUFDbkQsMkRBQTJEO0FBQzNELDBEQUEwRDtBQUMxRCxpREFBaUQ7QUFDakQseURBQXlEO0FBQ3pELDJDQUEyQztBQUUzQyw2QkFBNkI7QUFNN0IsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFHM0MsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUEyQjtRQUNuRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFVBQVUsR0FBRyw4QkFBOEIsQ0FBQztRQUNsRCxNQUFNLGFBQWEsR0FBRyxPQUFPLFVBQVUsRUFBRSxDQUFDO1FBRTFDLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUMxRSxRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUUsaURBQWlEO1NBQzNELENBQUMsQ0FBQztRQUVILDJFQUEyRTtRQUMzRSxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsY0FBYztZQUN2QyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQztZQUN2RixDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWQsaUZBQWlGO1FBQ2pGLE1BQU0sYUFBYSxHQUFHLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDM0QsVUFBVSxFQUFFLGtDQUFrQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVELGdC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QUMsU0FBUyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQy9CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsVUFBVSxFQUFFLHlCQUF5QjtTQUN0QyxDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUNyQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDO1lBQ3JFLFdBQVcsRUFBRSxrREFBa0Q7U0FDaEUsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDcEMsS0FBSyxFQUFFLFVBQVU7WUFDakIsV0FBVyxFQUFFLG9CQUFvQjtTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN0QyxLQUFLLEVBQUUsd0RBQXdEO1lBQy9ELFdBQVcsRUFBRSxpQ0FBaUM7U0FDL0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRTtZQUMxQyxLQUFLLEVBQUUseURBQXlEO1lBQ2hFLFdBQVcsRUFBRSx1Q0FBdUM7U0FDckQsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDakMsS0FBSyxFQUFFLHNFQUFzRTtZQUM3RSxXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXRRRCx3Q0FzUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgczMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXMzJztcbmltcG9ydCAqIGFzIGNsb3VkZnJvbnQgZnJvbSAnYXdzLWNkay1saWIvYXdzLWNsb3VkZnJvbnQnO1xuaW1wb3J0ICogYXMgb3JpZ2lucyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWRmcm9udC1vcmlnaW5zJztcbmltcG9ydCAqIGFzIHJvdXRlNTMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXJvdXRlNTMnO1xuaW1wb3J0ICogYXMgdGFyZ2V0cyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtcm91dGU1My10YXJnZXRzJztcbmltcG9ydCAqIGFzIGFjbSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2VydGlmaWNhdGVtYW5hZ2VyJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuaW1wb3J0ICogYXMgaWFtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvc21pY1dlYlN0YWNrUHJvcHMgZXh0ZW5kcyBjZGsuU3RhY2tQcm9wcyB7XG4gIGNlcnRpZmljYXRlQXJuPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29zbWljV2ViU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICBwdWJsaWMgcmVhZG9ubHkgaG9zdGVkWm9uZTogcm91dGU1My5JSG9zdGVkWm9uZTtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IENvc21pY1dlYlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGRvbWFpbk5hbWUgPSAnY29zbWljcmVuZXdhYmxlZW5lcmd5LmNvbS5hdSc7XG4gICAgY29uc3Qgd3d3RG9tYWluTmFtZSA9IGB3d3cuJHtkb21haW5OYW1lfWA7XG5cbiAgICAvLyBDcmVhdGUgUm91dGU1MyBIb3N0ZWQgWm9uZSBmb3IgdGhlIGRvbWFpblxuICAgIHRoaXMuaG9zdGVkWm9uZSA9IG5ldyByb3V0ZTUzLlB1YmxpY0hvc3RlZFpvbmUodGhpcywgJ0Nvc21pY1dlYkhvc3RlZFpvbmUnLCB7XG4gICAgICB6b25lTmFtZTogZG9tYWluTmFtZSxcbiAgICAgIGNvbW1lbnQ6ICdIb3N0ZWQgem9uZSBmb3IgQ29zbWljIFJlbmV3YWJsZSBFbmVyZ3kgd2Vic2l0ZScsXG4gICAgfSk7XG5cbiAgICAvLyBJbXBvcnQgQUNNIENlcnRpZmljYXRlIGZyb20gdXMtZWFzdC0xIChtdXN0IGJlIGNyZWF0ZWQgc2VwYXJhdGVseSBmaXJzdClcbiAgICBjb25zdCBjZXJ0aWZpY2F0ZSA9IHByb3BzPy5jZXJ0aWZpY2F0ZUFyblxuICAgICAgPyBhY20uQ2VydGlmaWNhdGUuZnJvbUNlcnRpZmljYXRlQXJuKHRoaXMsICdJbXBvcnRlZENlcnRpZmljYXRlJywgcHJvcHMuY2VydGlmaWNhdGVBcm4pXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIC8vIENyZWF0ZSBTMyBidWNrZXQgZm9yIHN0YXRpYyB3ZWJzaXRlIGhvc3RpbmcgKHByaXZhdGUsIGFjY2Vzc2VkIHZpYSBDbG91ZEZyb250KVxuICAgIGNvbnN0IHdlYnNpdGVCdWNrZXQgPSBuZXcgczMuQnVja2V0KHRoaXMsICdDb3NtaWNXZWJCdWNrZXQnLCB7XG4gICAgICBidWNrZXROYW1lOiBgY29zbWljLXJlbmV3YWJsZS1lbmVyZ3ktc3RhdGljLSR7dGhpcy5hY2NvdW50fWAsXG4gICAgICBwdWJsaWNSZWFkQWNjZXNzOiBmYWxzZSxcbiAgICAgIGJsb2NrUHVibGljQWNjZXNzOiBzMy5CbG9ja1B1YmxpY0FjY2Vzcy5CTE9DS19BTEwsXG4gICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZLFxuICAgICAgYXV0b0RlbGV0ZU9iamVjdHM6IHRydWUsXG4gICAgICB2ZXJzaW9uZWQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBMYW1iZGEgRnVuY3Rpb25zIGZvciBBUElcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLy8gSUFNIHJvbGUgZm9yIExhbWJkYSBmdW5jdGlvbnMgd2l0aCBTRVMgcGVybWlzc2lvbnNcbiAgICBjb25zdCBsYW1iZGFSb2xlID0gbmV3IGlhbS5Sb2xlKHRoaXMsICdMYW1iZGFFeGVjdXRpb25Sb2xlJywge1xuICAgICAgYXNzdW1lZEJ5OiBuZXcgaWFtLlNlcnZpY2VQcmluY2lwYWwoJ2xhbWJkYS5hbWF6b25hd3MuY29tJyksXG4gICAgICBtYW5hZ2VkUG9saWNpZXM6IFtcbiAgICAgICAgaWFtLk1hbmFnZWRQb2xpY3kuZnJvbUF3c01hbmFnZWRQb2xpY3lOYW1lKCdzZXJ2aWNlLXJvbGUvQVdTTGFtYmRhQmFzaWNFeGVjdXRpb25Sb2xlJyksXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIFNFUyBzZW5kIGVtYWlsIHBlcm1pc3Npb25cbiAgICBsYW1iZGFSb2xlLmFkZFRvUG9saWN5KG5ldyBpYW0uUG9saWN5U3RhdGVtZW50KHtcbiAgICAgIGFjdGlvbnM6IFsnc2VzOlNlbmRFbWFpbCcsICdzZXM6U2VuZFJhd0VtYWlsJ10sXG4gICAgICByZXNvdXJjZXM6IFsnKiddLFxuICAgIH0pKTtcblxuICAgIC8vIENvbnRhY3QgRm9ybSBMYW1iZGFcbiAgICBjb25zdCBjb250YWN0TGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnQ29udGFjdExhbWJkYScsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9sYW1iZGEvY29udGFjdCcpKSxcbiAgICAgIHJvbGU6IGxhbWJkYVJvbGUsXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMCksXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBTRU5ERVJfRU1BSUw6IGBub3JlcGx5QCR7ZG9tYWluTmFtZX1gLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIFF1b3RlIEZvcm0gTGFtYmRhXG4gICAgY29uc3QgcXVvdGVMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdRdW90ZUxhbWJkYScsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9sYW1iZGEvcXVvdGUnKSksXG4gICAgICByb2xlOiBsYW1iZGFSb2xlLFxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzApLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgU0VOREVSX0VNQUlMOiBgbm9yZXBseUAke2RvbWFpbk5hbWV9YCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBHb29nbGUgUmV2aWV3cyBMYW1iZGFcbiAgICBjb25zdCByZXZpZXdzTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnUmV2aWV3c0xhbWJkYScsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxuICAgICAgaGFuZGxlcjogJ2luZGV4LmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8uLi9sYW1iZGEvZ29vZ2xlLXJldmlld3MnKSksXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMCksXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAvLyBUaGVzZSB3aWxsIGJlIHNldCB2aWEgQVdTIENvbnNvbGUgb3Igc2VjcmV0cyBtYW5hZ2VyXG4gICAgICAgIEdPT0dMRV9NWV9CVVNJTkVTU19BQ0NPVU5UX0lEOiAnJyxcbiAgICAgICAgR09PR0xFX01ZX0JVU0lORVNTX0xPQ0FUSU9OX0lEOiAnJyxcbiAgICAgICAgR09PR0xFX01ZX0JVU0lORVNTX0FQSV9LRVk6ICcnLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQVBJIEdhdGV3YXlcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCAnQ29zbWljV2ViQXBpJywge1xuICAgICAgcmVzdEFwaU5hbWU6ICdDb3NtaWMgUmVuZXdhYmxlIEVuZXJneSBBUEknLFxuICAgICAgZGVzY3JpcHRpb246ICdBUEkgZm9yIGNvbnRhY3QgZm9ybXMgYW5kIHJldmlld3MnLFxuICAgICAgZGVmYXVsdENvcnNQcmVmbGlnaHRPcHRpb25zOiB7XG4gICAgICAgIGFsbG93T3JpZ2luczogYXBpZ2F0ZXdheS5Db3JzLkFMTF9PUklHSU5TLFxuICAgICAgICBhbGxvd01ldGhvZHM6IGFwaWdhdGV3YXkuQ29ycy5BTExfTUVUSE9EUyxcbiAgICAgICAgYWxsb3dIZWFkZXJzOiBbJ0NvbnRlbnQtVHlwZScsICdBdXRob3JpemF0aW9uJ10sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gQVBJIGVuZHBvaW50c1xuICAgIGNvbnN0IGNvbnRhY3RSZXNvdXJjZSA9IGFwaS5yb290LmFkZFJlc291cmNlKCdhcGknKS5hZGRSZXNvdXJjZSgnY29udGFjdCcpO1xuICAgIGNvbnRhY3RSZXNvdXJjZS5hZGRNZXRob2QoJ1BPU1QnLCBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihjb250YWN0TGFtYmRhKSk7XG5cbiAgICBjb25zdCBxdW90ZVJlc291cmNlID0gYXBpLnJvb3QuZ2V0UmVzb3VyY2UoJ2FwaScpIS5hZGRSZXNvdXJjZSgncXVvdGUnKTtcbiAgICBxdW90ZVJlc291cmNlLmFkZE1ldGhvZCgnUE9TVCcsIG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKHF1b3RlTGFtYmRhKSk7XG5cbiAgICBjb25zdCByZXZpZXdzUmVzb3VyY2UgPSBhcGkucm9vdC5nZXRSZXNvdXJjZSgnYXBpJykhLmFkZFJlc291cmNlKCdnb29nbGUtcmV2aWV3cycpO1xuICAgIHJldmlld3NSZXNvdXJjZS5hZGRNZXRob2QoJ0dFVCcsIG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKHJldmlld3NMYW1iZGEpKTtcblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQ2xvdWRGcm9udFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvLyBDbG91ZEZyb250IEZ1bmN0aW9uIHRvIGhhbmRsZSBzdWJkaXJlY3RvcnkgaW5kZXguaHRtbCByZXdyaXRlc1xuICAgIGNvbnN0IHVybFJld3JpdGVGdW5jdGlvbiA9IG5ldyBjbG91ZGZyb250LkZ1bmN0aW9uKHRoaXMsICdVcmxSZXdyaXRlRnVuY3Rpb24nLCB7XG4gICAgICBjb2RlOiBjbG91ZGZyb250LkZ1bmN0aW9uQ29kZS5mcm9tSW5saW5lKGBcbmZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgdmFyIHJlcXVlc3QgPSBldmVudC5yZXF1ZXN0O1xuICB2YXIgdXJpID0gcmVxdWVzdC51cmk7XG5cbiAgLy8gQ2hlY2sgaWYgVVJJIGVuZHMgd2l0aCAnLycgYW5kIGFkZCBpbmRleC5odG1sXG4gIGlmICh1cmkuZW5kc1dpdGgoJy8nKSkge1xuICAgIHJlcXVlc3QudXJpICs9ICdpbmRleC5odG1sJztcbiAgfVxuICAvLyBDaGVjayBpZiBVUkkgZG9lc24ndCBoYXZlIGFuIGV4dGVuc2lvbiAobm8gZG90IGluIGxhc3Qgc2VnbWVudClcbiAgZWxzZSBpZiAoIXVyaS5pbmNsdWRlcygnLicpKSB7XG4gICAgcmVxdWVzdC51cmkgKz0gJy9pbmRleC5odG1sJztcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0O1xufVxuICAgICAgYCksXG4gICAgICBmdW5jdGlvbk5hbWU6ICdDb3NtaWNXZWJVcmxSZXdyaXRlJyxcbiAgICAgIGNvbW1lbnQ6ICdSZXdyaXRlcyBVUkxzIHRvIGFwcGVuZCBpbmRleC5odG1sIGZvciBzdWJkaXJlY3RvcmllcycsXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgQ2xvdWRGcm9udCBkaXN0cmlidXRpb24gd2l0aCBjdXN0b20gZG9tYWluXG4gICAgY29uc3QgZGlzdHJpYnV0aW9uID0gbmV3IGNsb3VkZnJvbnQuRGlzdHJpYnV0aW9uKHRoaXMsICdDb3NtaWNXZWJEaXN0cmlidXRpb24nLCB7XG4gICAgICBkZWZhdWx0QmVoYXZpb3I6IHtcbiAgICAgICAgb3JpZ2luOiBvcmlnaW5zLlMzQnVja2V0T3JpZ2luLndpdGhPcmlnaW5BY2Nlc3NDb250cm9sKHdlYnNpdGVCdWNrZXQpLFxuICAgICAgICB2aWV3ZXJQcm90b2NvbFBvbGljeTogY2xvdWRmcm9udC5WaWV3ZXJQcm90b2NvbFBvbGljeS5SRURJUkVDVF9UT19IVFRQUyxcbiAgICAgICAgYWxsb3dlZE1ldGhvZHM6IGNsb3VkZnJvbnQuQWxsb3dlZE1ldGhvZHMuQUxMT1dfR0VUX0hFQURfT1BUSU9OUyxcbiAgICAgICAgY2FjaGVkTWV0aG9kczogY2xvdWRmcm9udC5DYWNoZWRNZXRob2RzLkNBQ0hFX0dFVF9IRUFEX09QVElPTlMsXG4gICAgICAgIGNhY2hlUG9saWN5OiBjbG91ZGZyb250LkNhY2hlUG9saWN5LkNBQ0hJTkdfT1BUSU1JWkVELFxuICAgICAgICBjb21wcmVzczogdHJ1ZSxcbiAgICAgICAgZnVuY3Rpb25Bc3NvY2lhdGlvbnM6IFt7XG4gICAgICAgICAgZnVuY3Rpb246IHVybFJld3JpdGVGdW5jdGlvbixcbiAgICAgICAgICBldmVudFR5cGU6IGNsb3VkZnJvbnQuRnVuY3Rpb25FdmVudFR5cGUuVklFV0VSX1JFUVVFU1QsXG4gICAgICAgIH1dLFxuICAgICAgfSxcbiAgICAgIGRvbWFpbk5hbWVzOiBjZXJ0aWZpY2F0ZSA/IFtkb21haW5OYW1lLCB3d3dEb21haW5OYW1lXSA6IHVuZGVmaW5lZCxcbiAgICAgIGNlcnRpZmljYXRlOiBjZXJ0aWZpY2F0ZSxcbiAgICAgIGRlZmF1bHRSb290T2JqZWN0OiAnaW5kZXguaHRtbCcsXG4gICAgICBlcnJvclJlc3BvbnNlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaHR0cFN0YXR1czogNDA0LFxuICAgICAgICAgIHJlc3BvbnNlSHR0cFN0YXR1czogNDA0LFxuICAgICAgICAgIHJlc3BvbnNlUGFnZVBhdGg6ICcvNDA0Lmh0bWwnLFxuICAgICAgICAgIHR0bDogY2RrLkR1cmF0aW9uLm1pbnV0ZXMoNSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBodHRwU3RhdHVzOiA0MDMsXG4gICAgICAgICAgcmVzcG9uc2VIdHRwU3RhdHVzOiA0MDQsXG4gICAgICAgICAgcmVzcG9uc2VQYWdlUGF0aDogJy80MDQuaHRtbCcsXG4gICAgICAgICAgdHRsOiBjZGsuRHVyYXRpb24ubWludXRlcyg1KSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBwcmljZUNsYXNzOiBjbG91ZGZyb250LlByaWNlQ2xhc3MuUFJJQ0VfQ0xBU1NfMTAwLFxuICAgICAgbWluaW11bVByb3RvY29sVmVyc2lvbjogY2xvdWRmcm9udC5TZWN1cml0eVBvbGljeVByb3RvY29sLlRMU19WMV8yXzIwMjEsXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgUm91dGU1MyBBIHJlY29yZHMgb25seSBpZiBjZXJ0aWZpY2F0ZSBpcyBhdmFpbGFibGVcbiAgICBpZiAoY2VydGlmaWNhdGUpIHtcbiAgICAgIG5ldyByb3V0ZTUzLkFSZWNvcmQodGhpcywgJ0Nvc21pY1dlYkFsaWFzUmVjb3JkJywge1xuICAgICAgICB6b25lOiB0aGlzLmhvc3RlZFpvbmUsXG4gICAgICAgIHJlY29yZE5hbWU6IGRvbWFpbk5hbWUsXG4gICAgICAgIHRhcmdldDogcm91dGU1My5SZWNvcmRUYXJnZXQuZnJvbUFsaWFzKG5ldyB0YXJnZXRzLkNsb3VkRnJvbnRUYXJnZXQoZGlzdHJpYnV0aW9uKSksXG4gICAgICB9KTtcblxuICAgICAgbmV3IHJvdXRlNTMuQVJlY29yZCh0aGlzLCAnQ29zbWljV2ViV3d3QWxpYXNSZWNvcmQnLCB7XG4gICAgICAgIHpvbmU6IHRoaXMuaG9zdGVkWm9uZSxcbiAgICAgICAgcmVjb3JkTmFtZTogd3d3RG9tYWluTmFtZSxcbiAgICAgICAgdGFyZ2V0OiByb3V0ZTUzLlJlY29yZFRhcmdldC5mcm9tQWxpYXMobmV3IHRhcmdldHMuQ2xvdWRGcm9udFRhcmdldChkaXN0cmlidXRpb24pKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gT3V0cHV0c1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnQnVja2V0TmFtZScsIHtcbiAgICAgIHZhbHVlOiB3ZWJzaXRlQnVja2V0LmJ1Y2tldE5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogJ1MzIEJ1Y2tldCBOYW1lIGZvciBHaXRIdWIgQWN0aW9ucycsXG4gICAgICBleHBvcnROYW1lOiAnQ29zbWljV2ViQnVja2V0TmFtZScsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnRGlzdHJpYnV0aW9uSWQnLCB7XG4gICAgICB2YWx1ZTogZGlzdHJpYnV0aW9uLmRpc3RyaWJ1dGlvbklkLFxuICAgICAgZGVzY3JpcHRpb246ICdDbG91ZEZyb250IERpc3RyaWJ1dGlvbiBJRCBmb3IgY2FjaGUgaW52YWxpZGF0aW9uJyxcbiAgICAgIGV4cG9ydE5hbWU6ICdDb3NtaWNXZWJEaXN0cmlidXRpb25JZCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnRGlzdHJpYnV0aW9uRG9tYWluTmFtZScsIHtcbiAgICAgIHZhbHVlOiBkaXN0cmlidXRpb24uZGlzdHJpYnV0aW9uRG9tYWluTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xvdWRGcm9udCBEaXN0cmlidXRpb24gRG9tYWluIE5hbWUnLFxuICAgICAgZXhwb3J0TmFtZTogJ0Nvc21pY1dlYkRpc3RyaWJ1dGlvbkRvbWFpbicsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnV2Vic2l0ZVVSTCcsIHtcbiAgICAgIHZhbHVlOiBjZXJ0aWZpY2F0ZSA/IGBodHRwczovLyR7ZG9tYWluTmFtZX1gIDogYGh0dHBzOi8vJHtkaXN0cmlidXRpb24uZGlzdHJpYnV0aW9uRG9tYWluTmFtZX1gLFxuICAgICAgZGVzY3JpcHRpb246ICdXZWJzaXRlIFVSTCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnQ2xvdWRGcm9udFVSTCcsIHtcbiAgICAgIHZhbHVlOiBgaHR0cHM6Ly8ke2Rpc3RyaWJ1dGlvbi5kaXN0cmlidXRpb25Eb21haW5OYW1lfWAsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Nsb3VkRnJvbnQgRGlzdHJpYnV0aW9uIFVSTCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnQXBpRW5kcG9pbnQnLCB7XG4gICAgICB2YWx1ZTogYXBpLnVybCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQVBJIEdhdGV3YXkgRW5kcG9pbnQgVVJMJyxcbiAgICAgIGV4cG9ydE5hbWU6ICdDb3NtaWNXZWJBcGlFbmRwb2ludCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnSG9zdGVkWm9uZUlkJywge1xuICAgICAgdmFsdWU6IHRoaXMuaG9zdGVkWm9uZS5ob3N0ZWRab25lSWQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JvdXRlNTMgSG9zdGVkIFpvbmUgSUQnLFxuICAgICAgZXhwb3J0TmFtZTogJ0Nvc21pY1dlYkhvc3RlZFpvbmVJZCcsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnSG9zdGVkWm9uZU5hbWUnLCB7XG4gICAgICB2YWx1ZTogdGhpcy5ob3N0ZWRab25lLnpvbmVOYW1lLFxuICAgICAgZGVzY3JpcHRpb246ICdSb3V0ZTUzIEhvc3RlZCBab25lIE5hbWUnLFxuICAgICAgZXhwb3J0TmFtZTogJ0Nvc21pY1dlYkhvc3RlZFpvbmVOYW1lJyxcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdOYW1lU2VydmVycycsIHtcbiAgICAgIHZhbHVlOiBjZGsuRm4uam9pbignLCAnLCB0aGlzLmhvc3RlZFpvbmUuaG9zdGVkWm9uZU5hbWVTZXJ2ZXJzIHx8IFtdKSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUm91dGU1MyBOYW1lIFNlcnZlcnMgLSBVcGRhdGUgdGhlc2UgYXQgSG9zdGluZ2VyJyxcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdEb21haW5OYW1lJywge1xuICAgICAgdmFsdWU6IGRvbWFpbk5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogJ0N1c3RvbSBEb21haW4gTmFtZScsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnQXJjaGl0ZWN0dXJlJywge1xuICAgICAgdmFsdWU6ICdSb3V0ZTUzICsgUzMgKyBDbG91ZEZyb250ICsgQUNNICsgTGFtYmRhICsgQVBJIEdhdGV3YXknLFxuICAgICAgZGVzY3JpcHRpb246ICdTdGF0aWMgc2l0ZSB3aXRoIHNlcnZlcmxlc3MgQVBJJyxcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdDb3N0T3B0aW1pemF0aW9uJywge1xuICAgICAgdmFsdWU6ICdSb3V0ZTUzICgkMC41MCkgKyBTMyArIENsb3VkRnJvbnQgKyBMYW1iZGE6IH4kMy02L21vbnRoJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRXhwZWN0ZWQgbW9udGhseSBjb3N0IGZvciBsb3cgdHJhZmZpYycsXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnU0VTTm90ZScsIHtcbiAgICAgIHZhbHVlOiAnUmVtZW1iZXIgdG8gdmVyaWZ5IGVtYWlsIGRvbWFpbiBpbiBTRVMgYW5kIHJlcXVlc3QgcHJvZHVjdGlvbiBhY2Nlc3MnLFxuICAgICAgZGVzY3JpcHRpb246ICdTRVMgU2V0dXAgUmVxdWlyZWQnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=