import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const contentDir = path.join(process.cwd(), 'content')
    
    // Return empty array if content directory doesn't exist
    if (!fs.existsSync(contentDir)) {
      return NextResponse.json([])
    }

    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'))
    
    const blogs = files
      .map(filename => {
        try {
          const filepath = path.join(contentDir, filename)
          const content = fs.readFileSync(filepath, 'utf-8')
          
          // Parse frontmatter - handle both LF and CRLF line endings
          const frontmatterMatch = content.match(/^-{3}\r?\n([\s\S]*?)\r?\n-{3}/)
          if (!frontmatterMatch) {
            return null
          }

          const frontmatter = frontmatterMatch[1]
          
          // Parse YAML frontmatter
          const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/)
          const authorMatch = frontmatter.match(/author:\s*"([^"]+)"/)
          const dateMatch = frontmatter.match(/date:\s*(.+)/)

          if (!titleMatch || !authorMatch || !dateMatch) {
            return null
          }

          return {
            title: titleMatch[1],
            author: authorMatch[1],
            date: dateMatch[1].trim().split('.')[0], // Remove timezone info
            filename: filename.replace('.md', ''),
          }
        } catch (error) {
          console.error(`Error parsing blog file ${filename}:`, error)
          return null
        }
      })
      .filter(blog => blog !== null)
      .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime())

    return NextResponse.json(blogs)
  } catch (error) {
    console.error('Failed to fetch blogs:', error)
    return NextResponse.json([], { status: 500 })
  }
}
