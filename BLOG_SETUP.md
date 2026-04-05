# Blog System Setup Guide

## Overview
This blog system allows users to authenticate with GitHub and create blog posts that are automatically committed to your GitHub repository in the `content/` folder.

## Features
- 🔐 GitHub OAuth Authentication
- 📝 Create and publish blog posts directly from the web interface
- 📁 Blog posts stored as Markdown files in the `content/` folder
- 🚀 Automatic commit to GitHub repository
- 💅 Beautiful, responsive UI with Tailwind CSS

## Setup Instructions

### 1. Create GitHub OAuth Application

1. Go to [GitHub Settings > Developer Settings > OAuth Apps](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Datarn Blog
   - **Homepage URL**: `http://localhost:3000` (for development) or your actual domain
   - **Authorization callback URL**: `http://localhost:3000/api/auth/github/callback`

4. Copy the **Client ID** and **Client Secret**

### 2. Create Personal Access Token

1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Click "Generate new token"
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token (you'll only see it once!)

### 3. Configure Environment Variables

Create a `.env.local` file in your project root (base template provided in `.env.local.example`):

```bash
# GitHub OAuth Configuration
NEXT_PUBLIC_GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here

# GitHub Repository Configuration
GITHUB_REPO_OWNER=your_github_username
GITHUB_REPO_NAME=datarn-io
GITHUB_TOKEN=your_github_personal_access_token

# NextAuth Configuration (generate a random secret)
NEXTAUTH_SECRET=your_random_secret_string_here
NEXTAUTH_URL=http://localhost:3000
```

### 4. Install Dependencies

```bash
npm install next-auth @octokit/rest octokit
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/blog` to see your blog page!

## How It Works

### User Flow

1. **User visits blog** → `/blog` page
2. **Click GitHub Login** → Redirected to GitHub OAuth
3. **Grant Permission** → User approves access to repository
4. **Redirected Back** → User authenticated and can create posts
5. **Write Blog Post** → Fill in title and markdown content
6. **Submit** → Post is committed to `content/` folder with filename: `YYYY-MM-DD-slug.md`

### File Structure
- Blog posts are stored as Markdown files: `content/YYYY-MM-DD-blog-title.md`
- Each post includes YAML frontmatter with metadata:
  ```markdown
  ---
  title: "Blog Title"
  author: author_name
  date: 2024-01-15T10:30:00.000Z
  ---
  
  Your blog content here...
  ```

### API Endpoints

- `POST /api/blog/submit` - Submit a new blog post
- `GET /api/auth/me` - Get current user info
- `GET /api/auth/github/callback` - GitHub OAuth callback
- `POST /api/auth/logout` - Logout user

## Components

### `CreateBlogForm`
- Users can write and submit blog posts
- Supports Markdown formatting
- Shows success/error messages
- Only visible when authenticated

### `BlogsList`
- Displays all blog posts from the content folder
- Shows title, author, and date
- Responsive design

### `AuthContext`
- Manages user authentication state
- Provides `useAuth()` hook for components
- Handles GitHub login flow

## Troubleshooting

### Issue: GitHub OAuth not working
- ✓ Check that callback URL in GitHub matches: `http://localhost:3000/api/auth/github/callback`
- ✓ Verify Client ID and Secret are correct in `.env.local`
- ✓ Ensure NEXTAUTH_SECRET is set

### Issue: Blog post not saving to GitHub
- ✓ Check that GITHUB_TOKEN has `repo` scope
- ✓ Verify GITHUB_REPO_OWNER and GITHUB_REPO_NAME are correct
- ✓ Check that the GitHub token hasn't expired

### Issue: Content folder not showing up
- ✓ The folder must be created: `content/` at project root
- ✓ It will auto-populate once users submit blog posts

## Customization

### Change Blog Post Filename Format
Edit `src/app/api/blog/submit/route.ts`:
```typescript
const filename = `${timestamp}-${slug}.md` // Change this line
```

### Customize Blog Post Template
Edit `src/app/api/blog/submit/route.ts`:
```typescript
const blogContent = `---
title: "${title}"
author: ${author || username}
date: ${new Date().toISOString()}
---

${content}
` // Modify this template
```

### Change Authentication Provider
Currently using basic GitHub OAuth. You can integrate NextAuth.js for multi-provider support.

## Production Deployment

### Environment Variables in Production
Set these in your hosting platform (Vercel, Netlify, etc.):
- `NEXT_PUBLIC_GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GITHUB_REPO_OWNER`
- `GITHUB_REPO_NAME`
- `GITHUB_TOKEN`
- `NEXTAUTH_SECRET` (generate with `openssl rand -base64 32`)
- `NEXTAUTH_URL` (your production URL)

### OAuth Callback URL
Update in GitHub Settings to your production URL:
`https://yourdomain.com/api/auth/github/callback`

## Security Considerations

⚠️ **Important Security Notes:**

1. **Never commit `.env.local`** to Git - add to `.gitignore`
2. **GITHUB_TOKEN in production** - Use repository secrets/environment variables
3. **Rate limits** - GitHub API has rate limits (60 req/hour unauthenticated, 5000 authenticated)
4. **Access control** - Consider implementing permission checks to prevent spam
5. **Content validation** - Add server-side validation for blog post content

## Future Enhancements

- [ ] Blog post editing and deletion
- [ ] Comments using GitHub Discussions
- [ ] Blog post categories and tags
- [ ] Search functionality
- [ ] Blog post preview before publishing
- [ ] Draft saving
- [ ] Multiple author support
- [ ] Social sharing buttons
- [ ] RSS feed generation
