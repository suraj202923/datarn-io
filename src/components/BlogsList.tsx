'use client'

import Link from 'next/link'

interface Blog {
  title: string
  author: string
  date: string
  filename: string
}

interface BlogListProps {
  blogs?: Blog[]
  loading?: boolean
}

export default function BlogsList({ blogs = [], loading = false }: BlogListProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse bg-slate-200 h-24 rounded-lg" />
        ))}
      </div>
    )
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-lg">
        <p className="text-slate-600 text-lg">No blog posts yet.</p>
        <p className="text-slate-500 mt-2">
          Click the "Create Blog" button above to share your first post!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Recent Blog Posts</h2>
      {blogs.map((blog) => (
        <Link key={blog.filename} href={`/blog/${blog.filename}`}>
          <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-teal-300 transition cursor-pointer">
            <h3 className="text-xl font-bold text-teal-600 hover:text-teal-700 mb-2">{blog.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>By <strong>{blog.author}</strong></span>
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
