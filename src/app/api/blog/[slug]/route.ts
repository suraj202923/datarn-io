import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const contentDir = path.join(process.cwd(), 'content')
    const filepath = path.join(contentDir, `${slug}.md`)
    
    // Check if file exists
    if (!fs.existsSync(filepath)) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    const fileContent = fs.readFileSync(filepath, 'utf-8')
    
    // Parse frontmatter - handle both LF and CRLF line endings
    const frontmatterMatch = fileContent.match(/^-{3}\r?\n([\s\S]*?)\r?\n-{3}/)
    if (!frontmatterMatch) {
      return NextResponse.json({ error: 'Invalid blog format' }, { status: 400 })
    }

    const frontmatter = frontmatterMatch[1]
    const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/)
    const authorMatch = frontmatter.match(/author:\s*"([^"]+)"/)
    const dateMatch = frontmatter.match(/date:\s*(.+)/)
    
    if (!titleMatch || !authorMatch || !dateMatch) {
      return NextResponse.json({ error: 'Missing blog metadata' }, { status: 400 })
    }

    // Extract content (everything after frontmatter)
    const content = fileContent.replace(/^-{3}\r?\n[\s\S]*?\r?\n-{3}\r?\n/, '').trim()

    return NextResponse.json({
      title: titleMatch[1],
      author: authorMatch[1],
      date: dateMatch[1].trim().split('.')[0],
      filename: slug,
      content: content,
    })
  } catch (error) {
    console.error('Failed to fetch blog:', error)
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 })
  }
}
