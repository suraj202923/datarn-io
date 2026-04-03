export default function Discussion() {
  const categories = [
    {
      id: 1,
      name: 'General Discussion',
      description: 'General topics, questions, and conversation about Datarn and our libraries',
      icon: '💬',
      posts: 0,
    },
    {
      id: 2,
      name: 'Feature Requests',
      description: 'Suggest new features and enhancements for our libraries',
      icon: '💡',
      posts: 0,
    },
    {
      id: 3,
      name: 'Bug Reports',
      description: 'Report bugs and issues you encounter with our products',
      icon: '🐛',
      posts: 0,
    },
    {
      id: 4,
      name: 'Announcements',
      description: 'Important updates, releases, and news from the Datarn team',
      icon: '📢',
      posts: 0,
    },
    {
      id: 5,
      name: 'Show & Tell',
      description: 'Share your projects and creations built with Datarn libraries',
      icon: '🎨',
      posts: 0,
    },
    {
      id: 6,
      name: 'Help & Support',
      description: 'Get help, ask questions, and troubleshoot issues',
      icon: '🆘',
      posts: 0,
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container-width">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Community Discussion</h1>
          <p className="text-xl text-slate-300">
            Join our community to share ideas, ask questions, and collaborate
          </p>
        </div>
      </section>

      {/* Discussion Info */}
      <section className="py-16 bg-blue-50 border-b border-blue-200">
        <div className="container-width">
          <div className="bg-white rounded-lg border border-blue-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">📋 Discussion Platform Coming Soon</h2>
            <p className="text-slate-600 mb-6">
              We're building a dedicated discussion platform for our community. Currently, you can:
            </p>
            <ul className="space-y-3 text-slate-600 mb-8">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span><strong>Open Issues on GitHub:</strong> Report bugs and request features directly on our repository</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span><strong>GitHub Discussions:</strong> Engage with the community on library-specific topics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <span><strong>Pull Requests:</strong> Contribute code improvements and new features</span>
              </li>
            </ul>
            <a
              href="https://github.com/datarn-io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit GitHub Organization
            </a>
          </div>
        </div>
      </section>

      {/* Discussion Categories */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <h2 className="section-heading text-center mb-12">Discussion Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div key={category.id} className="border border-slate-200 rounded-lg p-6 hover:border-teal-500 hover:shadow-lg transition\">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-4xl mb-3 block">{category.icon}</span>
                    <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <span>{category.posts} posts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-slate-50">
        <div className="container-width max-w-3xl">
          <h2 className="section-heading mb-8">Community Guidelines</h2>
          <div className="bg-white border border-slate-200 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Be Respectful</h3>
              <p className="text-slate-600">
                Treat all community members with respect and kindness. We celebrate diversity and welcome people from all backgrounds.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Stay On Topic</h3>
              <p className="text-slate-600">
                Keep discussions relevant to Datarn, our libraries, and related technologies. Off-topic content should be minimal.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Be Constructive</h3>
              <p className="text-slate-600">
                Provide helpful feedback and suggestions. When reporting issues, include as much relevant information as possible.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">No Spam or Spam-Like Content</h3>
              <p className="text-slate-600">
                Avoid excessive self-promotion, off-topic links, or unwanted advertising. Genuine contributions are always welcome!
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Report Issues</h3>
              <p className="text-slate-600">
                If you see behavior that violates these guidelines, please report it to the moderation team rather than responding publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-width max-w-3xl text-center">
          <h2 className="section-heading mb-6">Have Questions?</h2>
          <p className="text-slate-600 mb-8">
            If you can't find what you're looking for in our community, feel free to reach out to the team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/datarn-io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-kalbande-7a6613a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
