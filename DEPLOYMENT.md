# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Add environment variables:
     - `EMAIL_USER`: your-email@gmail.com
     - `EMAIL_PASS`: your-app-password
   - Click "Deploy"

## Alternative Deployment Options

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard

### Railway
1. Push to GitHub
2. Go to [railway.app](https://railway.app)
3. Connect your repository
4. Add environment variables
5. Deploy automatically

### DigitalOcean App Platform
1. Push to GitHub
2. Create new app in DigitalOcean
3. Select Next.js as the source
4. Connect your repository
5. Add environment variables
6. Deploy

## Environment Variables Setup

### For Email Functionality
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Gmail App Password Setup
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account settings > Security
3. Generate an App Password
4. Use this password in your environment variables

## Custom Domain Setup

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Other Platforms
- Follow the platform-specific instructions for custom domains
- Usually involves updating DNS records to point to the platform's servers

## Performance Optimization

The portfolio is already optimized with:
- Next.js automatic optimization
- Tailwind CSS purging
- Image optimization
- Code splitting
- Static generation where possible

## Monitoring & Analytics

Consider adding:
- Google Analytics
- Vercel Analytics
- Error tracking (Sentry)
- Performance monitoring

## Backup & Maintenance

- Regular dependency updates
- Monitor for security vulnerabilities
- Backup your resume_data.json
- Keep your resume PDF updated
