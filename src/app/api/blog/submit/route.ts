import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { title, content, author } = await request.json()

    // Validate input
    if (!title || !content || !author) {
      return NextResponse.json(
        { error: 'Title, author, and content are required' },
        { status: 400 }
      )
    }

    // Create filename from title and date
    const today = new Date()
    const dateStr = today.toISOString().split('T')[0]
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    const filename = `${dateStr}-${slug}.md`

    // Format the blog post as Markdown with frontmatter
    const blogContent = `---
title: "${title.replace(/"/g, '\\"')}"
author: "${author.replace(/"/g, '\\"')}"
date: ${today.toISOString()}
---

${content}
`

    // Ensure content directory exists
    const contentDir = path.join(process.cwd(), 'content')
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true })
    }

    // Write file
    const filepath = path.join(contentDir, filename)
    
    // Check if file already exists
    if (fs.existsSync(filepath)) {
      return NextResponse.json(
        { error: 'A blog with this title already exists today' },
        { status: 409 }
      )
    }

    fs.writeFileSync(filepath, blogContent, 'utf-8')

    return NextResponse.json({
      success: true,
      filename,
      message: 'Blog post created successfully',
    })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create blog post' },
      { status: 500 }
    )
  }
}
