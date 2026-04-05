# Blog System Setup Checklist ✅

Complete these steps to get your blog system fully working:

## Phase 1: GitHub Setup (10 minutes)

- [ ] Create GitHub OAuth App
  - Visit: https://github.com/settings/developers
  - Click: "New OAuth App"
  - Fill in application details
  - **Note Client ID and Client Secret**

- [ ] Create Personal Access Token
  - Visit: https://github.com/settings/tokens
  - Click: "Generate new token"
  - Select: `repo` scope (full control of repositories)
  - **Note the token (you'll only see it once!)**

## Phase 2: Local Setup (5 minutes)

- [ ] Copy environment template
  ```bash
  cp .env.local.example .env.local
  ```

- [ ] Edit `.env.local` with your values
  ```
  NEXT_PUBLIC_GITHUB_CLIENT_ID=your_client_id
  GITHUB_CLIENT_SECRET=your_client_secret
  GITHUB_REPO_OWNER=your_github_username
  GITHUB_REPO_NAME=datarn-io
  GITHUB_TOKEN=your_personal_access_token
  NEXTAUTH_SECRET=generate_random_secret
  NEXTAUTH_URL=http://localhost:3000
  ```

- [ ] Generate NEXTAUTH_SECRET (if using Linux/Mac)
  ```bash
  openssl rand -base64 32
  ```

- [ ] Add `.env.local` to `.gitignore`
  ```bash
  echo ".env.local" >> .gitignore
  ```

## Phase 3: Installation (3 minutes)

- [ ] Install dependencies
  ```bash
  npm install
  ```

- [ ] Verify installations
  ```bash
  npm list next-auth octokit
  ```

## Phase 4: Testing (10 minutes)

- [ ] Start development server
  ```bash
  npm run dev
  ```

- [ ] Open browser
  ```
  http://localhost:3000/blog
  ```

- [ ] Test GitHub Login
  - Click "Sign in with GitHub"
  - Grant permissions
  - Should redirect to blog (authenticated)

- [ ] Test Create Blog Post
  - Fill in title: "Test Blog Post"
  - Fill in content: "This is a test"
  - Click "Create Blog Post"
  - Check if file appears in `content/` folder

- [ ] Verify in GitHub
  - Go to your repository
  - Check `content/` folder
  - Should see `YYYY-MM-DD-test-blog-post.md`

## Phase 5: Navigation (2 minutes)

- [ ] Check Navigation menu
  - Homepage should show "Blog" link
  - Mobile menu should include "Blog"
  - Click should go to `/blog`

- [ ] Test all pages still work
  - Home: `/`
  - About: `/about`
  - Products: `/products`
  - Discussion: `/discussion`
  - Team: `/team`
  - Blog: `/blog` ✨ (NEW)

## Phase 6: Documentation (Optional)

- [ ] Read [BLOG_SETUP.md](./BLOG_SETUP.md) - Detailed setup guide
- [ ] Read [BLOG_QUICK_REFERENCE.md](./BLOG_QUICK_REFERENCE.md) - Quick reference
- [ ] Check [content/README.md](./content/README.md) - Content guidelines

## Phase 7: Customization (Optional)

- [ ] Customize blog form styling (CreateBlogForm.tsx)
- [ ] Change blog filename format (api/blog/submit/route.ts)
- [ ] Update blog colors to match brand
- [ ] Add additional fields to blog posts

## Phase 8: Production Deployment

When ready to deploy:

- [ ] Update OAuth callback URL in GitHub Settings
  ```
  https://yourdomain.com/api/auth/github/callback
  ```

- [ ] Set environment variables in hosting platform
  - Vercel: Project Settings > Environment Variables
  - Netlify: Site Settings > Build & Deploy > Environment
  - Other: Platform-specific documentation

- [ ] Update `NEXTAUTH_URL` to production domain
  ```
  NEXTAUTH_URL=https://yourdomain.com
  ```

- [ ] Test OAuth flow on production
  - Visit `/blog` on production
  - Test GitHub login
  - Create test blog post

- [ ] Verify file appears in GitHub repository
  - The post should be committed to `content/` folder

## Troubleshooting

If something isn't working:

1. **Check Browser Console** (F12)
   - Look for error messages
   - Check for CORS issues

2. **Check Terminal Output**
   - Look for API errors
   - Check for missing dependencies

3. **Check GitHub Settings**
   - OAuth app callback URL correct?
   - Client ID and Secret valid?

4. **Check Environment Variables**
   - Is `.env.local` present?
   - Are all required variables set?
   - Did you restart dev server after changing .env.local?

5. **Check Repository Access**
   - Does personal token have `repo` scope?
   - Is the repository accessible to your GitHub account?
   - Is the token still valid?

## Support Resources

📚 **Documentation**:
- [BLOG_SETUP.md](./BLOG_SETUP.md) - Comprehensive setup guide
- [BLOG_QUICK_REFERENCE.md](./BLOG_QUICK_REFERENCE.md) - Quick reference guide
- [content/README.md](./content/README.md) - Content guidelines

💬 **Getting Help**:
- Check GitHub Discussions for Q&A
- Open GitHub Issues for bugs
- Contact Datarn team for support

## Next Steps After Setup

✨ **You're Ready!**

1. **Customize the blog** - Make it match your brand
2. **Write first post** - Share your knowledge
3. **Share with community** - Promote your blog
4. **Gather feedback** - Ask users what they want to read

---

**Estimated total time: 30-45 minutes**

Good luck! 🚀
