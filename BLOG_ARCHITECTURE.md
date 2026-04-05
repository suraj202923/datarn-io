# Blog System Architecture & Flow

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Datarn Blog System                       │
└─────────────────────────────────────────────────────────────────┘

                    ┌──────────────────┐
                    │   User Browser   │
                    │   /blog page     │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │   Next.js App    │
                    │  (Frontend)      │
                    ├──────────────────┤
                    │ CreateBlogForm   │
                    │ BlogsList        │
                    │ AuthContext      │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────────────────┐
                    │    Next.js API Routes        │
                    ├──────────────────────────────┤
                    │ /api/auth/me                 │
                    │ /api/auth/logout             │
                    │ /api/auth/github/callback    │
                    │ /api/blog/submit             │
                    └────────┬──────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
    ┌───▼──────┐      ┌──────▼─────┐      ┌──────▼──────┐
    │  GitHub  │      │  GitHub    │      │  GitHub    │
    │  OAuth   │      │  API       │      │  Repo      │
    │  Service │      │  (Octokit) │      │  (content/)│
    └──────────┘      └────────────┘      └────────────┘
```

## 👤 User Authentication Flow

```
┌─────────┐
│  Start  │
└────┬────┘
     │
     ▼
┌──────────────────────────────┐
│ User visits /blog            │
└──────────────────────────────┘
     │
     ▼
┌──────────────────────────────┐
│ Not authenticated?           │
├──────────────────────────────┤
│ YES: Show login button       │
│ NO:  Show blog form          │
└──────────┬───────────────────┘
           │
           ▼
    ┌──────────────┐
    │ User clicks  │
    │ GitHub Login │
    └──────┬───────┘
           │
           ▼ (Redirect)
    ┌────────────────────────────────────┐
    │  GitHub Authorization              │
    │  - Request: client_id, scope       │
    │  - User grants permission          │
    │  - GitHub returns auth code        │
    └──────┬─────────────────────────────┘
           │
           ▼
    ┌────────────────────────────────────┐
    │  API: /api/auth/github/callback    │
    │  - Exchange code for token         │
    │  - Get user data                   │
    │  - Save token in HTTP-only cookie  │
    │  - Redirect to /blog               │
    └──────┬─────────────────────────────┘
           │
           ▼
    ┌───────────────────────────┐
    │ Back on /blog authenticated
    │ Show blog creation form    │
    └───────────────────────────┘
```

## 📝 Blog Post Creation Flow

```
┌──────────────────────────────┐
│ User fills blog form:        │
│ - Title: "My Blog Post"      │
│ - Content: "Markdown text"   │
└──────────┬───────────────────┘
           │
           ▼
    ┌──────────────────────────────────┐
    │ CreateBlogForm validates form    │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────────┐
    │ POST /api/blog/submit                │
    │ {                                    │
    │   title: "My Blog Post",             │
    │   content: "Markdown content",       │
    │   author: "github_username"          │
    │ }                                    │
    └──────────┬───────────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ API Route: blog/submit            │
    │ 1. Get access token from cookie   │
    │ 2. Validate input                 │
    │ 3. Generate filename:             │
    │    YYYY-MM-DD-slug.md             │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ Format Markdown with frontmatter: │
    │ ---                              │
    │ title: "My Blog Post"            │
    │ author: github_username          │
    │ date: 2024-01-15T...             │
    │ ---                              │
    │                                  │
    │ Markdown content here...         │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ GitHub API (Octokit)             │
    │ - Authenticate with token        │
    │ - Create file in content/         │
    │ - Commit to repository           │
    │ - Returns file URL               │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ Response to frontend:            │
    │ { success: true,                 │
    │   filename: "...",               │
    │   path: "content/..." }          │
    └──────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────────────────┐
    │ Frontend displays success message│
    │ - Form clears                    │
    │ - Show success notification      │
    │ - Reload blog list (optional)    │
    └──────────────────────────────────┘
```

## 🔐 Authentication System

```
┌────────────────────────────────────────────────┐
│         Authentication Context                 │
├────────────────────────────────────────────────┤
│   Global State:                                │
│   - user (current user object)                 │
│   - isAuthenticated (boolean)                  │
│   - loading (boolean)                          │
│                                                │
│   Methods:                                     │
│   - signInWithGithub()                         │
│   - signOut()                                  │
│   - checkAuthStatus()                          │
└────────────────────────────────────────────────┘
         ▲
         │ Provided via
         │
┌────────┴────────────────────────────────────────┐
│ AuthProvider (Root Layout)                     │
│ Wraps entire application for auth access      │
└──────────────────────────────────────────────────┘
         │
         │ useAuth() hook used by
         │
    ┌────┴────┬──────────────────┬──────────────┐
    │          │                  │              │
┌───▼──┐  ┌───▼────┐  ┌──────────▼──┐  ┌──────▼──┐
│/blog │  │Create  │  │BlogsList    │  │other    │
│page  │  │Form    │  │             │  │pages    │
└──────┘  └────────┘  └─────────────┘  └─────────┘
```

## 📁 Data Flow: File Creation

```
Browser Storage
┌─────────────────────────┐
│ HTTP-Only Cookies:      │
│ - github_token (JWT)    │
│ - github_user (JSON)    │
└────────┬────────────────┘
         │
         ▼
    Server Storage
    ┌─────────────────────────────────────┐
    │ Environment Variables (.env.local):  │
    │ - GITHUB_CLIENT_ID                  │
    │ - GITHUB_CLIENT_SECRET              │
    │ - GITHUB_TOKEN (personal token)     │
    │ - GITHUB_REPO_OWNER                 │
    │ - GITHUB_REPO_NAME                  │
    └────────┬────────────────────────────┘
             │
             ▼
    GitHub Repository
    ┌─────────────────────────────────────┐
    │ datarn-io/                          │
    │ ├── content/                        │
    │ │   ├── README.md                   │
    │ │   ├── 2024-01-15-first-post.md   │
    │ │   └── 2024-01-16-second-post.md  │
    │ ├── src/                           │
    │ ├── package.json                   │
    │ └── other files...                 │
    └─────────────────────────────────────┘
```

## 🔄 Component Interaction

```
┌────────────────────────────────────────┐
│      AuthContext Provider              │
│  ┌──────────────────────────────────┐  │
│  │  Auth State:                     │  │
│  │  - user object                   │  │
│  │  - isAuthenticated               │  │
│  │  - signInWithGithub()            │  │
│  │  - signOut()                     │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
          │
    ┌─────▼──────────────────────────┐
    │    Navigation Component        │
    │ ┌───────────────────────────┐  │
    │ │ Links include:            │  │
    │ │ - Home, About, Products   │  │
    │ │ - Discussion, Team        │  │
    │ │ - Blog (NEW)              │  │
    │ └───────────────────────────┘  │
    └─────────────────────────────────┘
          │
    ┌─────▼──────────────────────────┐
    │    /blog Page                  │
    ├────────────────────────────────┤
    │                                │
    │ ┌──────────────────────────┐   │
    │ │ useAuth() hook gets      │   │
    │ │ - user                   │   │
    │ │ - isAuthenticated        │   │
    │ │ - signInWithGithub       │   │
    │ └──────┬───────────────────┘   │
    │        │                       │
    │ ┌──────▼──────────────────┐    │
    │ │ If not authenticated:   │    │
    │ │ Show login button       │    │
    │ └─────────────────────────┘    │
    │                                │
    │ ┌──────────────────────────┐   │
    │ │ If authenticated:        │   │
    │ │ ┌────────────────────┐   │   │
    │ │ │ CreateBlogForm:    │   │   │
    │ │ │ - Title input      │   │   │
    │ │ │ - Content input    │   │   │
    │ │ │ - Submit button    │   │   │
    │ │ │                    │   │   │
    │ │ │ POST /api/blog/    │   │   │
    │ │ │       submit       │   │   │
    │ │ └────────────────────┘   │   │
    │ │                          │   │
    │ │ ┌──────────────────────┐ │   │
    │ │ │ BlogsList Component: │ │   │
    │ │ │ - Display posts      │ │   │
    │ │ │ - Author & date      │ │   │
    │ │ └──────────────────────┘ │   │
    │ └──────────────────────────┘   │
    │                                │
    └────────────────────────────────┘
```

## 🔌 API Endpoints

```
GET /api/auth/me
├── Purpose: Get current user info
├── Request: None (uses cookie)
├── Response: { id, name, email, avatar, login }
└── Status: 401 if not authenticated

POST /api/auth/logout
├── Purpose: Logout user
├── Request: None
├── Response: { success: true }
└── Clears: Cookies

GET /api/auth/github/callback?code=XXX
├── Purpose: GitHub OAuth callback
├── Step 1: Exchange code for token
├── Step 2: Get user data from GitHub
├── Step 3: Save token in cookie
├── Step 4: Redirect to /blog
└── Response: Redirect

POST /api/blog/submit
├── Request Body:
│   {
│     title: string,
│     content: string,
│     author: string
│   }
├── Authentication: Required (checks cookie)
├── Steps:
│   1. Validate input
│   2. Generate filename: YYYY-MM-DD-slug.md
│   3. Call Octokit GitHub API
│   4. Create/update file in content/
│   5. Commit to repository
├── Response:
│   {
│     success: true,
│     filename: string,
│     path: string,
│     url: string
│   }
└── Status: 201 on success, 401 if not authenticated
```

## 🌐 Deployment Architecture

```
Local Development
├── .env.local (local credentials)
├── npm run dev
└── http://localhost:3000/blog

Production (Vercel, Netlify, etc.)
├── Environment Variables (platform secrets)
├── GitHub OAuth callback: https://yourdomain.com/api/auth/github/callback
├── npm run build && npm start
└── https://yourdomain.com/blog
```

---

This architecture ensures:
- ✅ Secure authentication via GitHub
- ✅ Safe token storage in HTTP-only cookies
- ✅ Direct integration with GitHub API
- ✅ Automatic file creation and commit
- ✅ Responsive, user-friendly interface
