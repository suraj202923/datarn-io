import fs from 'fs'
import path from 'path'

export interface BlogPost {
  title: string
  author: string
  date: string
  filename: string
  content?: string
}

export function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), 'content')
  
  console.log('getBlogPosts: Content dir:', contentDir)
  console.log('getBlogPosts: Dir exists?', fs.existsSync(contentDir))
  
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'))
  console.log('getBlogPosts: Found markdown files:', files)
  
  return files
    .map(filename => {
      try {
        const filepath = path.join(contentDir, filename)
        const content = fs.readFileSync(filepath, 'utf-8')
        
        // Parse frontmatter - handle both LF and CRLF line endings
        const frontmatterMatch = content.match(/^-{3}\r?\n([\s\S]*?)\r?\n-{3}/)
        if (!frontmatterMatch) {
          console.log(`getBlogPosts: No frontmatter found in ${filename}`)
          return null
        }

        const frontmatter = frontmatterMatch[1]
        const bodyContent = content.replace(/^-{3}\r?\n[\s\S]*?\r?\n-{3}\r?\n/, '')

        // Parse YAML frontmatter
        const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/)
        const authorMatch = frontmatter.match(/author:\s*"([^"]+)"/)
        const dateMatch = frontmatter.match(/date:\s*(.+)/)

        if (!titleMatch || !authorMatch || !dateMatch) {
          console.log(`getBlogPosts: Missing fields in ${filename}`, { titleMatch: !!titleMatch, authorMatch: !!authorMatch, dateMatch: !!dateMatch })
          return null
        }

        const post: BlogPost = {
          title: titleMatch[1],
          author: authorMatch[1],
          date: dateMatch[1].trim().split('.')[0], // Remove timezone info
          filename: filename.replace('.md', ''),
          content: bodyContent.trim(),
        }
        console.log(`getBlogPosts: Parsed ${filename}:`, post.title)
        return post
      } catch (error) {
        console.error(`getBlogPosts: Error parsing ${filename}:`, error)
        return null
      }
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(filename: string): BlogPost | null {
  const contentDir = path.join(process.cwd(), 'content')
  const filepath = path.join(contentDir, `${filename}.md`)
  
  if (!fs.existsSync(filepath)) {
    return null
  }

  try {
    const content = fs.readFileSync(filepath, 'utf-8')
    
    // Parse frontmatter - handle both LF and CRLF line endings
    const frontmatterMatch = content.match(/^-{3}\r?\n([\s\S]*?)\r?\n-{3}/)
    if (!frontmatterMatch) {
      return null
    }

    const frontmatter = frontmatterMatch[1]
    const bodyContent = content.replace(/^-{3}\r?\n[\s\S]*?\r?\n-{3}\r?\n/, '')

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
      date: dateMatch[1].trim().split('.')[0],
      filename,
      content: bodyContent.trim(),
    }
  } catch (error) {
    console.error(`getBlogPost: Error reading ${filename}:`, error)
    return null
  }
}
