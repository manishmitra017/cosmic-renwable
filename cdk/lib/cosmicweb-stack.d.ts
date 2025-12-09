import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
export interface CosmicWebStackProps extends cdk.StackProps {
    certificateArn?: string;
}
export declare class CosmicWebStack extends cdk.Stack {
    readonly hostedZone: route53.IHostedZone;
    constructor(scope: Construct, id: string, props?: CosmicWebStackProps);
}
