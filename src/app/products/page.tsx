export default function Products() {
  const products = [
    {
      id: 1,
      name: 'rst_queue',
      description: 'High-performance queue library combining Rust and Python. Optimized for concurrent operations and large-scale data processing.',
      languages: ['Rust', 'Python'],
      performance: '100x faster than pure Python',
      features: ['Thread-safe', 'Lock-free operations', 'Optional persistence'],
      github: 'https://github.com/datarn-io/rst_queue',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Coming Soon',
      description: 'More exciting Rust+Python and Go+Python libraries are in development. Stay tuned for announcements!',
      languages: ['Rust', 'Go', 'Python'],
      performance: 'TBD',
      features: ['In development', 'Community feedback welcome'],
      github: '#',
      status: 'In Development',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container-width">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">⚡ Our Tools</h1>
          <p className="text-xl text-slate-300">
            Open-source tools that handle heavy computational loads with minimal resources. Lightning-fast. Resource-efficient. Technology-agnostic.
          </p>
        </div>
      </section>

      {/* Resource Efficiency in Action */}
      <section className="py-20 bg-slate-50">
        <div className="container-width">
          <h2 className="section-heading text-center mb-4">⚡ Resource Efficiency in Action</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
            Our tools are built on one principle: handle massive computational loads while minimizing CPU, memory, and resource overhead.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:border-teal-500 transition">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">Lightning Speed</h3>
              <p className="text-slate-600 text-sm">Fast execution. Minimal latency. Every microsecond optimized.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:border-teal-500 transition">
              <div className="text-5xl mb-3">💾</div>
              <h3 className="font-bold text-slate-900 mb-2">Low Overhead</h3>
              <p className="text-slate-600 text-sm">Minimal CPU usage. Minimal memory footprint. Maximum efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:border-teal-500 transition">
              <div className="text-5xl mb-3">💪</div>
              <h3 className="font-bold text-slate-900 mb-2">Heavy Load Capable</h3>
              <p className="text-slate-600 text-sm">Handle massive throughput. Designed for scale. Limited resources.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center hover:border-teal-500 transition">
              <div className="text-5xl mb-3">🔓</div>
              <h3 className="font-bold text-slate-900 mb-2">Open Source</h3>
              <p className="text-slate-600 text-sm">MIT/Apache licensed. Community-built. Fully auditable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Built from the ground up with the Leafcutter Principle: Each product minimizes overhead while maximizing computational capacity. Small code. Exponential impact. Real benchmarks. Open source.
          </p>

          <div className="grid gap-8">
            {products.map((product) => (
              <div key={product.id} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      {product.languages.map((lang) => (
                        <span key={lang} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-700">{product.description}</p>
                </div>

                <div className="px-8 py-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-slate-900 mb-3">Performance</h3>
                      <p className="text-slate-600 bg-slate-50 p-3 rounded">
                        {product.performance}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-3">Status</h3>
                      <p className="text-slate-600">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {product.status}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-bold text-slate-900 mb-3">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-600">
                          <span className="text-teal-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <a
                      href={product.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary inline-flex"
                    >
                      View on GitHub
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l8-8m0 0H8m8 0v8" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Deep Dive: rst_queue and Efficiency */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">⚡ rst_queue: Efficient Queue Library</h3>
            <p className="text-slate-700 mb-6">
              rst_queue is built on our core principle: handle massive computational loads with minimal resources. Here's why it works:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-lg">💾 Minimal Resource Overhead</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>Lock-free design:</strong> No heavy synchronization wasting CPU cycles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>Compiled core:</strong> No VM overhead, no garbage collection pauses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>Thin wrapper:</strong> Minimal Python overhead for maximum efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>Small memory footprint:</strong> Queue metadata barely uses any RAM</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-4 text-lg\">⚡ Maximum Heavy-Load Capability</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>100x faster than pure Python:</strong> Minimal overhead, massive performance gain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>100,000+ ops/second:</strong> Handles extreme throughput without resource explosion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>Thread-safe parallel execution:</strong> Works efficiently across all available CPU cores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span><strong>Linear scaling:</strong> More cores = proportional performance increase</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white p-4 rounded border-l-4 border-teal-500">
              <p className="text-slate-700">
                <strong>The Result:</strong> A queue library that weighs almost nothing (minimal code, low memory), but handles 100x the computational load of naive Python implementations. That's resource efficiency.
              </p>
            </div>
          </div>

          {/* Contribute Section */}
          <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Want to Contribute?</h3>
            <p className="text-slate-600 mb-6">
              Datarn is an open-source project and we welcome contributions from the community. Whether it's code, documentation, benchmarks, or ideas—we'd love your help building more Leafcutter Ant applications!
            </p>
            <a
              href="https://github.com/datarn-io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on GitHub Organization
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
