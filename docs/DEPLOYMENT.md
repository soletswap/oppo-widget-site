# Deployment Guide

This document provides detailed instructions for deploying the Oppo Widget Site to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Platform Deployment](#platform-deployment)
  - [Vercel](#vercel)
  - [Render](#render)
  - [Fly.io](#flyio)
- [CI/CD Configuration](#cicd-configuration)
- [Monitoring and Troubleshooting](#monitoring-and-troubleshooting)

## Prerequisites

- Node.js 18.x or 20.x
- npm or pnpm package manager
- Git repository access
- Platform-specific accounts (Vercel, Render, or Fly.io)

## Environment Variables

Configure the following environment variables for your deployment:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_JUPITER_API_BASE` | Jupiter API endpoint | No | `https://quote-api.jup.ag/v6` |
| `NODE_ENV` | Environment mode | No | `production` |

## Platform Deployment

### Vercel

#### Automatic Deployment (Recommended)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your Git repository
   - Select the repository root as the project directory

2. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`

3. **Set Environment Variables**
   - In project settings, add environment variables
   - `VITE_JUPITER_API_BASE` (optional)

4. **Deploy**
   - Click "Deploy"
   - Automatic deployments will trigger on push to main branch

#### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Render

#### Automatic Deployment

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Static Site"
   - Connect your Git repository

2. **Configure Service**
   - The `render.yaml` file will automatically configure your service
   - Build Command: `npm ci && npm run build`
   - Publish Directory: `./dist`

3. **Set Environment Variables**
   - In service settings, add environment variables
   - `VITE_JUPITER_API_BASE` (optional)

4. **Deploy**
   - Click "Create Static Site"
   - Automatic deployments will trigger on push to main branch

#### Manual Configuration

If not using `render.yaml`:

1. Create a new Static Site
2. Set Build Command: `npm ci && npm run build`
3. Set Publish Directory: `./dist`
4. Configure environment variables

### Fly.io

#### Initial Setup

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login to Fly.io
flyctl auth login

# Launch application (from project root)
flyctl launch

# Follow the prompts:
# - Choose app name (or use default)
# - Select region
# - Don't add a PostgreSQL database
# - Don't add a Redis database
# - Deploy now: Yes
```

#### Manual Deployment

```bash
# Deploy updates
flyctl deploy

# Check deployment status
flyctl status

# View logs
flyctl logs

# Scale application
flyctl scale count 2
```

#### Environment Variables

```bash
# Set environment variables
flyctl secrets set VITE_JUPITER_API_BASE=https://quote-api.jup.ag/v6

# List secrets
flyctl secrets list
```

## CI/CD Configuration

### GitHub Actions

The repository includes two GitHub Actions workflows:

#### CI Workflow (`.github/workflows/ci.yml`)

- **Triggers**: Push to main/develop, Pull requests
- **Jobs**: 
  - Type checking with TypeScript
  - Build verification
  - Artifact uploading
- **Node.js versions**: 18.x, 20.x

#### Deployment Workflow (`.github/workflows/deploy.yml`)

- **Triggers**: Push to main branch, manual dispatch
- **Platforms**: Vercel, Render, Fly.io
- **Environment**: Production

#### Required Secrets

Configure these secrets in your GitHub repository settings:

**For Vercel:**
- `VERCEL_TOKEN`: Vercel authentication token
- `VERCEL_ORG_ID`: Organization ID
- `VERCEL_PROJECT_ID`: Project ID

**For Render:**
- `RENDER_DEPLOY_HOOK`: Deploy hook URL

**For Fly.io:**
- `FLY_API_TOKEN`: Fly.io authentication token

#### Environment Variables

Set these variables in repository settings:

- `DEPLOY_TARGET`: `vercel`, `render`, `fly`, or `all`

## Monitoring and Troubleshooting

### Build Issues

**Common build errors:**

1. **Dependencies not found**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript errors**
   ```bash
   # Run type check
   npx tsc --noEmit
   ```

3. **Build timeout**
   - Increase build timeout in platform settings
   - Optimize build process

### Runtime Issues

**Static site routing:**
- Ensure SPA routing is configured correctly
- Check platform-specific routing rules

**Environment variables:**
- Verify all required variables are set
- Check variable naming (VITE_ prefix required)

**Performance:**
- Enable gzip compression
- Configure caching headers
- Monitor bundle size

### Platform-Specific Troubleshooting

#### Vercel
- Check function logs in dashboard
- Verify domain configuration
- Review build logs

#### Render
- Check service logs
- Verify static site settings
- Review deploy logs

#### Fly.io
```bash
# Check application health
flyctl status

# View detailed logs
flyctl logs --follow

# SSH into running instance
flyctl ssh console
```

## Performance Optimization

### Build Optimization

1. **Bundle Analysis**
   ```bash
   npm run build -- --analyze
   ```

2. **Code Splitting**
   - Implement dynamic imports for large components
   - Use React.lazy for route-based splitting

3. **Asset Optimization**
   - Optimize images and fonts
   - Enable compression in build process

### Deployment Optimization

1. **Caching Strategy**
   - Configure long-term caching for static assets
   - Use appropriate cache headers

2. **CDN Configuration**
   - Enable platform CDN features
   - Configure geographic distribution

3. **Monitoring**
   - Set up performance monitoring
   - Configure error tracking
   - Monitor Core Web Vitals

## Security Considerations

1. **Content Security Policy**
   - Review and tighten CSP headers
   - Test with browser developer tools

2. **Environment Variables**
   - Keep sensitive data in platform secrets
   - Use VITE_ prefix for client-side variables only

3. **Dependencies**
   - Regularly update dependencies
   - Run security audits: `npm audit`

4. **HTTPS**
   - Ensure HTTPS is enforced
   - Configure proper SSL certificates

## Support

For deployment issues:

1. Check platform-specific documentation
2. Review GitHub Actions logs
3. Check platform status pages
4. Contact platform support if needed

Common resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Fly.io Documentation](https://fly.io/docs)