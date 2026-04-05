export interface BlogPost {
  title: string
  author: string
  date: string
  filename: string
}

export const blogsData: BlogPost[] = [
  {
    title: "Welcome to Datarn Blog",
    author: "Datarn Team",
    date: "2024-01-15T10:00:00.000Z",
    filename: "2024-01-15-welcome-to-datarn-blog",
  },
  {
    title: "Optimizing Python with Rust: A Practical Guide",
    author: "Alex Chen",
    date: "2024-02-20T14:30:00.000Z",
    filename: "2024-02-20-optimizing-python-with-rust",
  },
  {
    title: "Building High-Performance Systems with Go and Python",
    author: "Sarah Williams",
    date: "2024-03-10T09:15:00.000Z",
    filename: "2024-03-10-go-python-integration",
  },
]
