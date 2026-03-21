---
name: vercel
description: Deploy, configure, and manage Vercel projects. Use when the user asks about Vercel deployment, environment variables, domains, serverless functions, edge functions, or Vercel-specific configuration.
argument-hint: [action-or-question]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Vercel Deployment & Configuration Skill

Manage Vercel deployments and configuration.

**Request**: `$ARGUMENTS`

## Common Actions

### 1. Initial Setup
- Install Vercel CLI: `npm i -g vercel` or `bun add -g vercel`
- Login: `vercel login`
- Link project: `vercel link`
- Deploy preview: `vercel`
- Deploy production: `vercel --prod`

### 2. Configuration (`vercel.json`)

Create or update `vercel.json` for this project:

```json
{
  "framework": "vite",
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "installCommand": "bun install",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Key settings for this SPA:
- **Rewrites**: Required for client-side routing (TanStack Router)
- **Build command**: Must include TypeScript check (`tsc -b && vite build`)
- **Output**: Vite builds to `dist/`

### 3. Environment Variables
```bash
vercel env add VARIABLE_NAME        # Add env var
vercel env ls                       # List env vars
vercel env pull .env.local          # Pull to local file
```

### 4. Domains
```bash
vercel domains add example.com      # Add custom domain
vercel domains ls                   # List domains
vercel certs ls                     # Check SSL certificates
```

### 5. Serverless / Edge Functions
- Place API routes in `api/` directory at project root
- Each file exports a default handler function
- Edge functions: add `export const config = { runtime: 'edge' }`

### 6. Deployment Management
```bash
vercel ls                           # List deployments
vercel inspect <url>                # Inspect a deployment
vercel rollback                     # Rollback to previous
vercel logs <url>                   # View deployment logs
vercel promote <url>                # Promote preview to production
```

## Migration from GitHub Pages

If migrating this project from GitHub Pages to Vercel:

1. Create `vercel.json` with SPA rewrites (replaces `public/404.html` workaround)
2. Update `vite.config.ts`: change `base` from `/acument-portfolio/` to `/`
3. Remove or disable `.github/workflows/deploy.yml` for GitHub Pages
4. Set up Vercel GitHub integration for automatic deployments
5. Update any hardcoded base paths in the codebase

## Troubleshooting

- **404 on refresh**: Add SPA rewrite rule in `vercel.json`
- **Build fails**: Check `buildCommand` and `installCommand` in `vercel.json`
- **Env vars missing**: Ensure they're set for the correct environment (Production/Preview/Development)
- **Slow cold starts**: Consider edge functions for latency-sensitive routes

## Output

Report what was configured or deployed, including the deployment URL if applicable.
