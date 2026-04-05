'use client'

import { useEffect, useState } from 'react'
import CreateBlogForm from '@/components/CreateBlogForm'
import BlogsList from '@/components/BlogsList'

interface Blog {
  title: string
  author: string
  date: string
  filename: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [blogsLoading, setBlogsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    setBlogsLoading(true)
    try {
      const response = await fetch('/api/blog')
      if (response.ok) {
        const data = await response.json()
        setBlogs(data)
      }
    } catch (error) {
      console.error('Failed to load blogs:', error)
    } finally {
      setBlogsLoading(false)
    }
  }

  const handleBlogCreated = () => {
    setShowForm(false)
    loadBlogs() // Reload blogs to show the new one
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-slate-600">
              Share your thoughts and ideas with the Datarn community
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg transition whitespace-nowrap"
          >
            {showForm ? '✕ Close' : '+ Create Blog'}
          </button>
        </div>

        {/* Create Blog Form */}
        {showForm && (
          <div className="mb-12">
            <CreateBlogForm onSuccess={handleBlogCreated} />
          </div>
        )}

        {/* Blog List */}
        <div>
          <BlogsList blogs={blogs} loading={blogsLoading} />
        </div>
      </div>
    </div>
  )
}
