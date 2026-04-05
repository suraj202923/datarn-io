'use client'

import { useState } from 'react'

interface BlogFormProps {
  onSuccess?: () => void
}

export default function CreateBlogForm({ onSuccess }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title.trim() || !formData.author.trim() || !formData.content.trim()) {
      setError('All fields are required')
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/blog/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create blog')
      }

      setSuccess(true)
      setFormData({ title: '', author: '', content: '' })

      // Call success callback
      if (onSuccess) {
        setTimeout(onSuccess, 1500)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Create New Blog Post</h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
          ✓ Blog post created successfully! Click refresh to see it in the list.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Blog Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Getting Started with Rust"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Author Name *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Blog Content (Markdown) *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog post here... You can use Markdown syntax.&#10;&#10;# Heading&#10;## Sub Heading&#10;**bold text**&#10;*italic text*&#10;- bullet point"
            required
            rows={10}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 font-mono text-sm"
          />
          <p className="text-sm text-slate-500 mt-2">
            Supports Markdown: **bold**, *italic*, # Heading, etc.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating...' : 'Create Blog Post'}
          </button>
          <button
            type="reset"
            className="px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}
