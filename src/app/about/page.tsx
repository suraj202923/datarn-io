export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container-width">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Datarn</h1>
          <p className="text-xl text-slate-300">
            A developer-focused platform for open-source tools that handle heavy computational loads with minimal resources
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-4">
                Datarn exists to celebrate and amplify developers who build resource-efficient open-source tools. We believe:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">⚡</span>
                  <span><strong>Efficiency matters:</strong> Every CPU cycle saved enables impact at scale. Optimization is not optional.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">🔧</span>
                  <span><strong>Technology is neutral:</strong> Python, Java, C#, C++, C, Go, Rust, JavaScript—the language doesn't matter. Efficiency does.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">📊</span>
                  <span><strong>Benchmarks are proof:</strong> Real-world testing for real-world scenarios. Marketing claims get secondary priority.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 mt-1">🌐</span>
                  <span><strong>Open source builds communities:</strong> Transparent code. Community contributions. Shared knowledge. No gatekeeping.</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">⚡ Who We're For</h3>
              <p className="text-slate-600 mb-4">
                Developers who are passionate about building small tools that handle massive computational challenges. Developers who:
              </p>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li>• Love writing elegant, efficient code</li>
                <li>• Obsess over every CPU cycle and megabyte</li>
                <li>• Build open-source tools others depend on</li>
                <li>• Want measurable impact, not marketing buzz</li>
                <li>• Care about accessibility and resource constraints</li>
                <li>• Build for developers, not just enterprises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-slate-50">
        <div className="container-width">
          <h2 className="section-heading text-center mb-12">Our Core Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-teal-500 transition">
              <div className="w-16 h-16 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <circle cx="100" cy="100" r="95" fill="#14b8a6" opacity="0.1" stroke="#14b8a6" strokeWidth="2"/>
                  <path d="M 100 30 L 80 70 L 100 70 L 70 160 L 100 100 L 80 100 Z" fill="#14b8a6" stroke="#14b8a6" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Speed</h3>
              <p className="text-slate-600">
                Every microsecond counts. Tools must demonstrate measurable performance gains. Fast execution with minimal overhead. Speed is a feature.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-teal-500 transition">
              <div className="w-16 h-16 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <g stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="30" y="40" width="140" height="30" rx="4"/>
                    <line x1="30" y1="55" x2="170" y2="55"/>
                    <rect x="50" y="90" width="100" height="25" rx="3"/>
                    <line x1="50" y1="102" x2="150" y2="102"/>
                    <rect x="70" y="135" width="60" height="20" rx="2"/>
                    <line x1="70" y1="145" x2="130" y2="145"/>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resource Efficiency</h3>
              <p className="text-slate-600">
                Minimal CPU. Minimal memory. Minimal overhead. Handle heavy computational loads on limited resources. Prove it with benchmarks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-teal-500 transition">
              <div className="w-16 h-16 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <g stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 60 50 L 50 100 L 60 150"/>
                    <path d="M 140 50 L 150 100 L 140 150"/>
                    <line x1="70" y1="80" x2="130" y2="80"/>
                    <line x1="70" y1="100" x2="120" y2="100"/>
                    <line x1="70" y1="120" x2="130" y2="120"/>
                  </g>
                  <circle cx="100" cy="100" r="95" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.3"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Technology Agnostic</h3>
              <p className="text-slate-600">
                Python, Java, C#, C++, C, Go, Rust, JavaScript, or anything else. The language doesn't matter—efficiency and performance do.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-teal-500 transition">
              <div className="w-16 h-16 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <g stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="50" cy="70" r="15"/>
                    <path d="M 45 90 L 40 120 M 45 90 L 55 120 M 55 90 L 50 120"/>
                    <circle cx="100" cy="50" r="15"/>
                    <path d="M 95 70 L 90 100 M 95 70 L 105 100 M 105 70 L 100 100"/>
                    <circle cx="150" cy="70" r="15"/>
                    <path d="M 155 90 L 160 120 M 155 90 L 145 120 M 145 90 L 150 120"/>
                    <line x1="65" y1="75" x2="85" y2="60"/>
                    <line x1="115" y1="60" x2="135" y2="75"/>
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Open Source Community</h3>
              <p className="text-slate-600">
                MIT, Apache 2.0, GPL, or any open-source license. Public code. Community auditable. No secrets. Built together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes a Tool Datarn-Ready */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <h2 className="section-heading text-center mb-12">What Makes a Tool "Datarn-Ready"</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-teal-200 rounded-lg p-6 bg-gradient-to-br from-teal-50 to-white">
                <h3 className="text-lg font-bold text-slate-900 mb-4">✅ Proven Performance</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Real benchmarks for real scenarios. Measurable improvement over alternatives or unique advantages. Data over claims.
                </p>
                <div className="text-xs text-slate-500 space-y-2">
                  <div>• Throughput: ops/sec, MB/s, requests/sec</div>
                  <div>• Latency: p50, p95, p99 milliseconds</div>
                  <div>• Resource: CPU%, Memory usage, Code size</div>
                </div>
              </div>

              <div className="border-2 border-teal-200 rounded-lg p-6 bg-gradient-to-br from-teal-50 to-white">
                <h3 className="text-lg font-bold text-slate-900 mb-4">💾 Minimal Overhead</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Handles heavy loads with minimal CPU and memory. Efficient architecture. Every resource counts.
                </p>
                <div className="text-xs text-slate-500 space-y-2">
                  <div>• Low memory footprint</div>
                  <div>• Minimal CPU overhead</div>
                  <div>• Fast startup time</div>
                </div>
              </div>

              <div className="border-2 border-teal-200 rounded-lg p-6 bg-gradient-to-br from-teal-50 to-white">
                <h3 className="text-lg font-bold text-slate-900 mb-4">🔓 Open Source</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Any open-source license. MIT, Apache 2.0, GPL, or community-approved. Public and auditable.
                </p>
                <div className="text-xs text-slate-500 space-y-2">
                  <div>• Public repository</div>
                  <div>• Open license</div>
                  <div>• Community accessible</div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Real-World Use Cases</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">⚡ Data Processing</h4>
                  <p className="text-slate-600 text-sm">Process multi-gigabyte datasets fast. Parallel execution. 10-100x faster than standard alternatives on limited hardware.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">🌐 Web Services</h4>
                  <p className="text-slate-600 text-sm">Handle thousands of concurrent connections. Sub-100ms latency. Minimal memory per request. Scale horizontally.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">📡 Backend Services</h4>
                  <p className="text-slate-600 text-sm">Lightweight but powerful. Handle heavy workloads. Run on minimal infrastructure. Cost-efficient at scale.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">⚙️ Command-Line Tools</h4>
                  <p className="text-slate-600 text-sm">Fast startup. Minimal memory. Handle massive files/data streams. Ship in kilobytes, not megabytes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-slate-50">
        <div className="container-width">
          <h2 className="section-heading text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Foundation</h3>
                  <p className="text-slate-600 mt-1">
                    Started with a simple observation: Lightweight applications that handle heavy loads efficiently are possible in ANY language. Performance depends on design, not the language choice.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Benchmark Standards</h3>
                  <p className="text-slate-600 mt-1">
                    Established rigorous benchmarking methodology for real-world scenarios. Developed tooling to measure throughput, latency, and resource efficiency across different categories.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Open Source Platform Launch</h3>
                  <p className="text-slate-600 mt-1">
                    Released Datarn as an open-source platform to showcase high-performance applications. Created community showcase where developers can list apps that pass benchmarks and carry heavy loads.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Multi-Language Ecosystem</h3>
                  <p className="text-slate-600 mt-1">
                    Growing platform featuring optimized applications in Python, Java, C#, C++, C, Go, Rust, and beyond. Unified benchmark standards. Community-driven benchmarking and validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">⚡ Our Vision</h2>
            <p className="text-lg text-slate-700 mb-4">
              Datarn imagines a world where the best developers—those passionate about efficiency, optimization, and elegance—are celebrated for their work on small tools that have massive impact.
            </p>
            <p className="text-lg text-slate-700 mb-4">
              We envision a platform where:
            </p>
            <ul className="space-y-3 text-slate-700 mb-6">
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 text-2xl">⚡</span>
                <span><strong>Resource efficiency is rewarded:</strong> Developers obsessed with every CPU cycle and megabyte get recognition</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 text-2xl">🔧</span>
                <span><strong>Small tools are powerful:</strong> Tiny codebases handling massive computational challenges are celebrated</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 text-2xl">📊</span>
                <span><strong>Benchmarks matter:</strong> Real performance data, not marketing claims, drives adoption</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 text-2xl">🌐</span>
                <span><strong>Technology is neutral:</strong> The best tool wins, regardless of language or framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-3 text-2xl">🔓</span>
                <span><strong>Communities build better software:</strong> Open-source tools that benefit everyone, transparently</span>
              </li>
            </ul>
            <p className="text-center text-slate-600 text-lg font-semibold">
              <em>"Small tools. Great architecture. Extreme efficiency. Built open. Driven by developers who care."</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
