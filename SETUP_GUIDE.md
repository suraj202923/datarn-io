# Datarn Website - Setup & Deployment Guide

## Quick Start

### 1. Install Dependencies

```bash
cd datarn-website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Building for Deployment

### Production Build

```bash
npm run build
```

This creates a `.next` directory with optimized production code.

### Static Export (Recommended)

For static hosting services (GitHub Pages, Netlify, Vercel, etc.):

```bash
npm run export
```

This generates static HTML files in the `out/` directory. No server needed!

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Clone or push the repository to GitHub
2. In GitHub Settings → Pages:
   - Set source to "Deploy from a branch"
   - Select the branch and `/out` folder
3. Push changes and GitHub will auto-deploy

### Option 2: Netlify (Free)

1. Connect your GitHub repository
2. Set build command: `npm run export`
3. Set publish directory: `out`
4. Deploy!

### Option 3: Vercel (Free)

1. Connect your GitHub repository to Vercel
2. Vercel auto-detects Next.js and deploys automatically
3. No configuration needed!

### Option 4: AWS S3 + CloudFront

1. Build: `npm run export`
2. Upload `out/` folder to S3
3. Configure CloudFront for CDN
4. Set custom domain in Route 53

### Option 5: Traditional Web Hosting

1. Build: `npm run export`
2. Upload `out/` folder contents to your web host
3. Point your domain to the hosting provider

## Customization

### Change Logo/Images

1. Replace logo files in `public/images/`
2. Update references in components if needed

### Update Developer Info

Edit `src/app/team/page.tsx`:
- Change name, bio, and links
- Update contact information

### Modify Products

Edit `src/app/products/page.tsx`:
- Add/remove product entries
- Update GitHub links
- Change feature descriptions

### Update About Content

Edit `src/app/about/page.tsx`:
- Modify mission statement
- Update company values
- Edit journey timeline

### Change Styling

Colors are defined in `tailwind.config.js`:
```js
colors: {
  primary: '#1e293b',    // Change primary color
  accent: '#f97316',     // Change accent color
  secondary: '#64748b',  // Change secondary color
}
```

## Project Statistics

- **Pages**: 5 (Home, About, Products, Discussion, Team)
- **Components**: 2 (Navigation, Footer)
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Size**: Optimized for fast loading (< 100KB initial load)

## Development Workflow

```bash
# Start development server
npm run dev

# Make your changes to files

# Test locally at http://localhost:3000

# When ready to deploy:
npm run export

# Commit and push to GitHub (if using GitHub-based deployment)
git add .
git commit -m "Update website content"
git push origin main
```

## Environment Variables

Edit `.env.local` to customize:

```env
NEXT_PUBLIC_SITE_NAME=Datarn
NEXT_PUBLIC_SITE_URL=https://datarn.dev
NEXT_PUBLIC_GITHUB_ORG=datarn-io
NEXT_PUBLIC_GITHUB_PROFILE=suraj202923
NEXT_PUBLIC_LINKEDIN_PROFILE=suraj-kalbande-7a6613a9
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001  # Use different port
```

### Images Not Showing
- Ensure images are in `public/images/`
- Update image paths in components
- For static export, use `unoptimized: true` in next.config.js (already set)

## Performance Tips

✨ The site is highly optimized:
- Static site generation (no server overhead)
- Minimal JavaScript (interactive elements only)
- Optimized CSS with Tailwind
- SEO-friendly structure

### Further Optimization

1. **Image Optimization**: Use WebP format for images
2. **Caching**: Configure cache headers on your hosting provider
3. **CDN**: Use CloudFlare or CloudFront for global distribution
4. **Monitoring**: Setup analytics (Google Analytics, Vercel Analytics)

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **GitHub**: https://github.com/datarn-io
- **Contact**: Suraj Kalbande (LinkedIn, GitHub)

## License

MIT and Apache 2.0 - See LICENSE files for details

---

Happy building! 🚀
