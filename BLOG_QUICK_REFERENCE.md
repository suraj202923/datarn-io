# Blog System - Quick Reference

## 🚀 Quick Start

### For Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your GitHub OAuth credentials

# 3. Start dev server
npm run dev

# 4. Visit blog page
# Open http://localhost:3000/blog
```

### GitHub OAuth Setup (5 minutes)

1. **Create OAuth App**: https://github.com/settings/developers
2. **Copy credentials** to `.env.local`
3. **Set callback URL**: `http://localhost:3000/api/auth/github/callback`
4. **Create Personal Token**: https://github.com/settings/tokens (scope: `repo`)

## 📁 File Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx          # Main blog page
│   │   └── layout.tsx        # Blog layout
│   └── api/
│       ├── auth/
│       │   ├── me/           # Get current user
│       │   ├── logout/       # Logout user
│       │   └── github/
│       │       └── callback/ # OAuth callback
│       └── blog/
│           └── submit/       # Submit blog post
├── components/
│   ├── CreateBlogForm.tsx    # Form to create blogs
│   ├── BlogsList.tsx         # Display blogs
│   └── Navigation.tsx        # Added Blog link
└── context/
    └── AuthContext.tsx       # Auth state management

content/                       # Blog posts stored here
└── YYYY-MM-DD-slug.md        # Blog post format
```

## 🔑 Key Components

### `CreateBlogForm`
- Handles blog post creation
- Only shows when authenticated
- Auto-commits to GitHub via API

### `BlogsList`
- Displays all blog posts
- Shows meta information (author, date)
- Responsive design

### `AuthContext`
- Manages GitHub authentication
- Provides `useAuth()` hook
- Handles OAuth flow

### Blog API Routes
- `POST /api/blog/submit` - Create blog post
- `GET /api/auth/me` - Current user info
- `POST /api/auth/logout` - Logout

## 🔐 Authentication Flow

```
User visits /blog
    ↓
Clicks "Sign in with GitHub"
    ↓
Redirected to GitHub OAuth
    ↓
User grants permissions
    ↓
GitHub redirects to /api/auth/github/callback
    ↓
Access token saved in cookie
    ↓
Redirected to /blog (now authenticated)
    ↓
User can create blog posts
```

## 📝 Creating Blog Posts

### Via Web Interface

1. Go to `/blog`
2. Click "Sign in with GitHub"
3. Fill form with title and content
4. Click "Create Blog Post"
5. Post commits to `content/` folder as MD file

### Blog Post Auto-Naming

Posts are automatically named: `YYYY-MM-DD-{slug-from-title}.md`

Example:
- Title: "Getting Started with Rust"
- File: `2024-01-15-getting-started-with-rust.md`

### Front Matter Format

```markdown
---
title: "Your Title"
author: github_username
date: 2024-01-15T10:00:00.000Z
---

Your content here...
```

## 🛠️ Environment Variables

Required in `.env.local`:

```bash
NEXT_PUBLIC_GITHUB_CLIENT_ID=xxxxx
GITHUB_CLIENT_SECRET=xxxxx
GITHUB_REPO_OWNER=your_username
GITHUB_REPO_NAME=datarn-io
GITHUB_TOKEN=xxxxx
NEXTAUTH_SECRET=xxxxx
NEXTAUTH_URL=http://localhost:3000
```

## 🧪 Testing

```bash
# Development server
npm run dev

# Visit blog page
http://localhost:3000/blog

# Test OAuth flow
1. Click "Sign in with GitHub"
2. Grant permissions
3. Should redirect back to /blog authenticated
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| OAuth not working | Check callback URL matches GitHub settings |
| Blog post not saving | Check GITHUB_TOKEN has `repo` scope |
| Auth not persisting | Check cookies enabled in browser |
| Wrong repo saving | Verify GITHUB_REPO_OWNER and GITHUB_REPO_NAME |

## 📚 Documentation

- Full Setup: [BLOG_SETUP.md](./BLOG_SETUP.md)
- Content Guide: [content/README.md](./content/README.md)

## 🎨 Customization

### Change Blog Filename Format
Edit: `src/app/api/blog/submit/route.ts`
```typescript
const filename = `new-format-${slug}.md`
```

### Customize Blog Post Template
Edit: `src/app/api/blog/submit/route.ts`
```typescript
const blogContent = `your custom template here`
```

### Change UI/Colors
- Edit: `src/components/CreateBlogForm.tsx`
- Edit: `src/components/BlogsList.tsx`
- Uses Tailwind CSS classes

## 🚀 Deployment

### Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Update OAuth callback URL to production domain
5. Deploy!

### Other Platforms (Netlify, etc.)

Same process but set environment variables in their dashboard.

## 📊 API Examples

### Create Blog Post

```bash
curl -X POST http://localhost:3000/api/blog/submit \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Post",
    "content": "This is my blog content",
    "author": "johndoe"
  }'
```

### Get Current User

```bash
curl http://localhost:3000/api/auth/me
```

## 💾 Database & Storage

- **Posts**: Stored as `.md` files in GitHub `content/` folder
- **Auth**: Uses GitHub OAuth (no database needed)
- **User Sessions**: Stored in HTTP-only cookies

## 🔒 Security

- OAuth via GitHub (industry standard)
- HTTP-only cookies for tokens
- CSRF protection via Next.js
- Input validation on server side
- No sensitive data in client

## 📞 Support

- Issues: GitHub Issues
- Questions: GitHub Discussions
- Team: Contact Datarn team

---

**For detailed setup instructions, see [BLOG_SETUP.md](./BLOG_SETUP.md)**
