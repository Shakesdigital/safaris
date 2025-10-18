# Deployment Guide - Shakes Travel Website

This guide explains how to deploy your Shakes Travel website to various hosting platforms.

## Quick Deployment Options

### 1. Netlify (Recommended)

Netlify offers free hosting with continuous deployment from Git.

**Steps:**
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Connect your repository
5. Netlify will auto-detect the build settings from `netlify.toml`
6. Click "Deploy site"

**Manual Deploy:**
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify's deploy interface
```

### 2. Vercel

Vercel provides excellent performance and easy deployment.

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site will be deployed!

**Or use the Vercel dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite and deploys

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

**Setup:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add to vite.config.js:
   ```js
   base: '/shakestravelapp/'
   ```
4. Run: `npm run deploy`

### 4. Traditional Web Hosting (cPanel, etc.)

**Steps:**
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your server to redirect all routes to `index.html`

## Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Environment Variables

If you need to add environment variables (API keys, etc.):

1. Create a `.env` file in the root directory
2. Add variables prefixed with `VITE_`:
   ```
   VITE_API_KEY=your_key_here
   VITE_CONTACT_EMAIL=info@shakestravel.com
   ```
3. Access in code: `import.meta.env.VITE_API_KEY`
4. Add `.env` to `.gitignore`
5. Set environment variables in your hosting platform's dashboard

## Custom Domain

**Netlify:**
1. Go to Domain settings in your Netlify dashboard
2. Add your custom domain
3. Update your domain's DNS settings as instructed

**Vercel:**
1. Go to Settings > Domains
2. Add your custom domain
3. Configure DNS as instructed

## Performance Optimization

The site is already optimized with:
- Vite's production build with code splitting
- Tailwind CSS purging unused styles
- Lazy loading for routes
- Optimized images from Unsplash CDN

## Troubleshooting

**Routes not working after deployment:**
- Ensure your hosting platform redirects all routes to `index.html`
- Check that `netlify.toml` is included in your repository

**Build fails:**
- Check Node version (should be 18 or higher)
- Run `npm install` to ensure all dependencies are installed
- Check for any console errors during build

## Continuous Deployment

With Netlify or Vercel, every push to your main branch automatically triggers a new deployment.

## Monitoring

After deployment, monitor:
- Page load times
- Mobile responsiveness
- Form submissions (booking modal)
- Browser console for any errors

## Next Steps

1. Connect a real booking system/backend
2. Add Google Analytics or similar
3. Set up a contact form backend
4. Optimize images further with WebP format
5. Add a blog section for SEO
6. Integrate with social media

## Support

For deployment issues:
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com)
