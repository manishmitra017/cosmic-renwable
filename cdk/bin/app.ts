#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CosmicWebStack } from '../lib/cosmicweb-stack';

const app = new cdk.App();

// AWS account from environment variable (set via GitHub secrets or local env)
const account = process.env.CDK_DEFAULT_ACCOUNT;
if (!account) {
  throw new Error('CDK_DEFAULT_ACCOUNT environment variable must be set');
}

// Certificate ARN from ACM (created in us-east-1 for CloudFront)
const certificateArn = process.env.CERTIFICATE_ARN;

// Create main stack in ap-southeast-2
new CosmicWebStack(app, 'CosmicRenewableEnergyStack', {
  env: {
    account: account,
    region: 'ap-southeast-2',
  },
  crossRegionReferences: true,
  certificateArn: certificateArn,
  description: 'Cosmic Renewable Energy - Route53 + S3 + CloudFront Static Website',
  tags: {
    Project: 'CosmicRenewableEnergy',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

app.synth();
