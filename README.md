# Cosmic Renewable Energy Website

A modern, responsive website for Cosmic Renewable Energy built with Next.js and hosted on AWS.

**Live Site:** https://cosmicrenewableenergy.com.au

## Architecture

```
                    ┌─────────────────┐
                    │   Route 53      │
                    │  (DNS + SSL)    │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │   CloudFront    │
                    │     (CDN)       │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────▼────────┐     │     ┌────────▼────────┐
     │   S3 Bucket     │     │     │  API Gateway    │
     │ (Static Files)  │     │     │                 │
     └─────────────────┘     │     └────────┬────────┘
                             │              │
                             │     ┌────────▼────────┐
                             │     │    Lambda       │
                             │     │  (Contact/Quote)│
                             │     └─────────────────┘
                             │
                    ┌────────▼────────┐
                    │     AWS SES     │
                    │    (Email)      │
                    └─────────────────┘
```

## Project Structure

```
cosmicweb/
├── frontend/              # Next.js frontend (static export)
│   ├── src/
│   │   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   └── lib/           # Utilities
│   └── out/               # Built static files
├── cdk/                   # AWS CDK infrastructure
│   ├── bin/               # CDK app entry point
│   └── lib/               # Stack definitions
├── lambda/                # Lambda functions
│   ├── contact/           # Contact form handler
│   ├── quote/             # Quote form handler
│   └── google-reviews/    # Reviews API
├── .github/workflows/     # GitHub Actions CI/CD
└── DNS_MIGRATION_GUIDE.md # DNS setup documentation
```

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS
- **Hosting:** AWS S3 + CloudFront
- **DNS/SSL:** AWS Route 53 + ACM
- **API:** AWS Lambda + API Gateway
- **Email:** AWS SES
- **Infrastructure:** AWS CDK (TypeScript)
- **CI/CD:** GitHub Actions

## Features

- Static site generation for optimal performance
- Global CDN distribution via CloudFront
- HTTPS with auto-renewed SSL certificate
- Serverless contact and quote forms
- Automatic deployment on push to main

## Quick Start

### Prerequisites

- Node.js 22+
- AWS CLI configured
- AWS CDK CLI (`npm install -g aws-cdk`)

### Local Development

```bash
# Install dependencies
cd frontend && npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

### Build for Production

```bash
# Build static site
cd frontend && npm run build

# Output in frontend/out/
```

## Deployment

### Automatic (GitHub Actions)

Push to `main` branch triggers automatic deployment:
1. Builds Next.js static site
2. Deploys CDK infrastructure
3. Syncs files to S3
4. Invalidates CloudFront cache

### Manual Deployment

```bash
# Set environment variables (get values from AWS Console or team)
export AWS_PROFILE=your-profile
export CDK_DEFAULT_ACCOUNT=your-account-id
export CERTIFICATE_ARN=your-certificate-arn

# Deploy infrastructure
cd cdk && npm run build && npx cdk deploy

# Sync static files (bucket name from CDK outputs)
aws s3 sync frontend/out s3://your-bucket-name --delete

# Invalidate cache (distribution ID from CDK outputs)
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## GitHub Secrets Required

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_ACCOUNT_ID` | AWS account ID |
| `CERTIFICATE_ARN` | ACM certificate ARN (us-east-1) |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/quote` | POST | Submit quote request |
| `/api/google-reviews` | GET | Get Google reviews |

## Pages

- `/` - Homepage with hero and services
- `/services` - Service offerings
- `/about` - Company information
- `/why-solar` - Benefits of solar
- `/contact` - Contact form
- `/quote` - Quote request form
- `/faq` - Frequently asked questions

## Cost Estimate

~$3-6/month for low traffic:
- Route 53: $0.50/month (hosted zone)
- S3: ~$0.50/month (storage + requests)
- CloudFront: ~$1-3/month (data transfer)
- Lambda: Free tier (1M requests/month)
- API Gateway: Free tier (1M requests/month)

## License

Proprietary software for Cosmic Renewable Energy.
