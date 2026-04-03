# ⚡ QUICK START - Get Your Website Live in 5 Steps

## Step 1️⃣: Install & Run (2 minutes)

```bash
cd d:\datarn.dev\datarn-website
npm install
npm run dev
```

✅ **Open browser**: http://localhost:3000

## Step 2️⃣: Preview Your Site (1 minute)

Browse through all pages:
- Home (/)
- About (/about)
- Products (/products)
- Discussion (/discussion)
- Team (/team)

Verify your LinkedIn and GitHub links are visible on the Team page!

## Step 3️⃣: Build for Production (1 minute)

```bash
npm run export
```

This creates the `out/` folder with static HTML files ready for deployment.

## Step 4️⃣: Deploy (Choose One)

### 🌐 **Option A: GitHub Pages (Recommended - FREE)**
```bash
# 1. Create repo on GitHub: datarn-website
# 2. Push code to GitHub
# 3. Go to Settings → Pages → Deploy from branch
# 4. Select 'main' branch and '/out' folder
# Done! Your site is live at: https://yourusername.github.io/datarn-website/
```

### 🎯 **Option B: Netlify (Easiest - FREE)**
- Go to netlify.com
- Click "New site from Git"
- Select your GitHub repo
- Build command: `npm run export`
- Publish directory: `out`
- Deploy!
- Custom domain available

### ✨ **Option C: Vercel (Best for Next.js - FREE)**
- Go to vercel.com
- Import GitHub project
- Auto-detects Next.js
- One-click deploy!

### 📦 **Option D: Traditional Hosting**
- Upload contents of `out/` folder to your web host
- Point domain to hosting provider

## Step 5️⃣: Done! 🎉

Your website is now live!

---

## 📝 Customization Checklist

After deploying, customize these items:

- [ ] Replace logo in `public/images/`
- [ ] Update product links in `src/app/products/page.tsx`
- [ ] Add more products if needed
- [ ] Update discussion categories in `src/app/discussion/page.tsx`
- [ ] Configure custom domain
- [ ] Setup analytics (optional)
- [ ] Add favicon to `public/`

---

## 🔗 Your Links (Already Included!)

✅ GitHub: https://github.com/suraj202923
✅ LinkedIn: https://www.linkedin.com/in/suraj-kalbande-7a6613a9/
✅ GitHub Org: https://github.com/datarn-io
✅ Product Link: https://github.com/datarn-io/rst_queue

---

## 📱 Test Responsiveness

Test on different devices:
- Desktop browser (F12)
- Mobile (DevTools responsive mode)
- Tablet view

Everything should look great! ✨

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| `npm install` fails | Delete `node_modules`, reinstall |
| `npm run dev` won't start | Check port 3000 is free, or use `npm run dev -- -p 3001` |
| Images not showing | Ensure files are in `public/images/` |
| Styles look broken | Clear cache: `rm .next`, reinstall |

---

## 📚 Documentation

For more details, see:
- `README.md` - Full project documentation
- `SETUP_GUIDE.md` - Detailed deployment instructions
- `PROJECT_SUMMARY.md` - Complete project overview

---

## 🎯 What's Pre-Built For You

✅ Professional homepage with hero section
✅ About page with mission & values
✅ Products showcase with GitHub links
✅ Community & discussion page
✅ Developer profile page (your info!)
✅ Navigation with mobile menu
✅ Footer with social links
✅ Responsive design (mobile/tablet/desktop)
✅ SEO optimization
✅ Tailwind CSS styling
✅ TypeScript support

---

## 🚀 You're All Set!

Your Datarn website is **complete and ready to deploy**.

**Current Status**: ✅ READY TO LAUNCH

**Time to Deploy**: < 5 minutes

**Cost**: FREE (using GitHub Pages, Netlify, or Vercel)

---

Need help? Check the docs or contact:
- GitHub: https://github.com/suraj202923
- LinkedIn: https://www.linkedin.com/in/suraj-kalbande-7a6613a9/

**Let's build the future of Python! 🚀**
