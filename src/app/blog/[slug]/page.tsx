'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface BlogPost {
  title: string
  author: string
  date: string
  filename: string
  content: string
}

export default function BlogDetailPage() {
  const params = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadBlog()
  }, [params])

  const loadBlog = async () => {
    setLoading(true)
    setError(null)
    try {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
      const response = await fetch(`/api/blog/${slug}`)
      if (!response.ok) {
        setError('Blog post not found')
        return
      }
      const data = await response.json()
      setBlog(data)
    } catch (err) {
      console.error('Failed to load blog:', err)
      setError('Failed to load blog post')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto animate-pulse space-y-4">
          <div className="h-12 bg-slate-200 rounded-lg w-3/4" />
          <div className="h-6 bg-slate-200 rounded-lg w-1/2" />
          <div className="space-y-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-slate-200 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">{error || 'Blog post not found'}</h1>
          <Link href="/blog" className="text-teal-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="text-teal-600 hover:underline mb-8 inline-block">
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">By {blog.author}</span>
              </div>
              <div>
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
            <hr className="mt-6 border-slate-200" />
          </header>

          {/* Content */}
          <div className="prose prose-slate max-w-none">
            <div
              className="blog-content text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blog.content
                  .split('\n\n')
                  .map(paragraph => {
                    // Headers
                    if (paragraph.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold text-slate-800 mt-5 mb-2">${paragraph.substring(4)}</h3>`
                    }
                    if (paragraph.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold text-slate-900 mt-6 mb-3">${paragraph.substring(3)}</h2>`
                    }
                    if (paragraph.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold text-slate-900 mt-8 mb-4">${paragraph.substring(2)}</h1>`
                    }
                    // Code blocks
                    if (paragraph.startsWith('```')) {
                      const code = paragraph.replace(/```([^`]*?)```/s, '$1').trim()
                      return `<pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm"><code>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
                    }
                    // Lists
                    if (paragraph.startsWith('- ')) {
                      const items = paragraph.split('\n').filter(l => l.startsWith('- '))
                      return `<ul class="list-disc list-inside text-slate-700 mb-4 space-y-2">${items.map(item => `<li>${item.substring(2)}</li>`).join('')}</ul>`
                    }
                    // Regular paragraph
                    return `<p class="text-slate-700 mb-4">${paragraph
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/__(.*?)__/g, '<strong>$1</strong>')
                      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')}</p>`
                  })
                  .join(''),
              }}
            />
          </div>

          {/* Footer */}
          <hr className="mt-8 border-slate-200" />
          <footer className="mt-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-900 mb-2">About the Author</h3>
              <p className="text-slate-600">
                <strong>{blog.author}</strong> is a contributor to the Datarn community.
              </p>
            </div>
          </footer>
        </div>
      </article>
    </div>
  )
}
