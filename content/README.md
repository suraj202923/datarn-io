# Blog Content Folder

This folder stores all blog posts created through the Datarn blog system.

## Structure

Each blog post is a Markdown file named with the format: `YYYY-MM-DD-slug.md`

Example: `2024-01-15-welcome-to-datarn-blog.md`

## Blog Post Format

Each blog post includes YAML frontmatter with metadata:

```markdown
---
title: "Your Blog Title"
author: "Your Name"
date: 2024-01-15T10:00:00.000Z
---

Your blog content here...
```

### Frontmatter Fields

| Field  | Description | Example |
|--------|-------------|---------|
| `title` | The blog post title | "How to Use Datarn" |
| `author` | Author's GitHub username or name | "john_doe" |
| `date` | ISO 8601 timestamp when post was published | 2024-01-15T10:00:00.000Z |

## Adding Blog Posts

### Method 1: Web Interface (Recommended)

1. Visit `https://yourdomain.com/blog`
2. Click "Sign in with GitHub"
3. Authorize the application
4. Fill in the blog form and click "Create Blog Post"
5. Your post will be automatically committed here!

### Method 2: Manual (For Admin/Contributors)

1. Create a new file: `YYYY-MM-DD-title-slug.md`
2. Add the YAML frontmatter and content
3. Commit and push to the repository

## Viewing Blog Posts

Blog posts are displayed on the `/blog` page in reverse chronological order (newest first).

## Supported Markdown Features

### Headers
```markdown
# H1 Header
## H2 Header
### H3 Header
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
***Bold italic***
~~Strikethrough~~
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2
  - Nested bullet
```

### Code
```markdown
Inline `code` here

\`\`\`python
# Code block
def hello():
    print("Hello, Datarn!")
\`\`\`
```

### Links & Images
```markdown
[Link text](https://example.com)
![Alt text](/path/to/image.png)
```

### Blockquotes
```markdown
> This is a blockquote
> It can span multiple lines
```

## File Size Limits

- Maximum file size: 100MB (GitHub limit)
- Recommended: Keep posts under 10MB
- Typical blog post: 10-500KB

## Naming Conventions

Keep filenames clear and concise:

✅ Good:
- `2024-01-15-getting-started-with-rust.md`
- `2024-02-20-performance-optimization-tips.md`
- `2024-03-10-py-rust-integration.md`

❌ Avoid:
- `my_blog_post.md` (no date)
- `2024-01-15-This-Is-A-Very-Long-Title-With-Lots-Of-Words.md` (too long)
- `blog.md` (not descriptive)

## Contributing to Datarn Blog

We welcome blog posts about:

- 📚 **Tutorials** - Using Datarn libraries
- 🚀 **Performance** - Optimization techniques
- 🐛 **Tips & Tricks** - Developer workflows
- 📖 **Case Studies** - Real-world usage
- 🎓 **Learning** - Educational content
- 🤝 **Community** - Member spotlight

### Submission Guidelines

1. **Quality** - Proofread and test code examples
2. **Length** - Aim for 500-2000 words
3. **Format** - Use clear headers and code blocks
4. **Originality** - Write unique content or link to sources
5. **Respectful** - Be professional and inclusive

## Questions or Issues?

- 📝 Check [BLOG_SETUP.md](../BLOG_SETUP.md) for setup instructions
- 💬 Open a discussion in GitHub Discussions
- 🐛 Report issues on GitHub Issues
- 📧 Contact the Datarn team

---

**Happy blogging! 🎉**
