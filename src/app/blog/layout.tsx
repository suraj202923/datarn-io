import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Datarn',
  description: 'Read and create blog posts about Rust, Python, and Go libraries',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
