import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 sm:py-32">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 flex flex-col gap-2">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-400">Developer Platform</h2>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">datarn</span><span className="text-white">.dev</span>
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-slate-100 mt-2">
                  <span className="text-teal-400">Heavy Loads</span> <span className="text-slate-400">•</span> <span className="text-cyan-400">Limited Resources</span> <span className="text-slate-400">•</span> <span className="text-teal-400">Lightning Speed</span>
                </p>
              </div>
              <div className="mt-8 mb-8">
                <p className="text-lg text-slate-300 font-semibold mb-3">
                  <strong>Small Tools. Great Architecture. Extreme Efficiency.</strong>
                </p>
                <p className="text-slate-400 mb-3">
                  Handle massive data loads and user traffic with minimal computational power. Any technology. One goal: resource-efficient excellence.
                </p>
                <p className="text-slate-400 mb-3">
                  For developers building open-source tools that work smarter, not harder. Optimize for every CPU cycle. Maximize every megabyte. Ship code that flies on minimal resources.
                </p>
              </div>
              <div className="space-y-3 text-slate-300 mb-8">
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">⚙️</span>
                  <span><strong>Parallel Execution:</strong> Process millions of operations simultaneously across multiple cores</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">🔀</span>
                  <span><strong>Load Balancing:</strong> Distribute computational weight evenly. No single core becomes a bottleneck</span>
                </div>
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 text-xl">📈</span>
                  <span><strong>Linear Scaling:</strong> Add more cores, get exponential performance. From 1 CPU to 1000 CPUs seamlessly</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn btn-primary">
                  Explore Solutions
                </Link>
                <Link href="#developer-showcase" className="btn btn-secondary">
                  Join Developers
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/datarnlogo.png"
                alt="Datarn Logo"
                width={400}
                height={400}
                priority
                className="w-full h-auto max-w-sm drop-shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Showcase Section */}
      <section className="py-20 bg-white" id="developer-showcase">
        <div className="container-width">
          <h2 className="section-heading text-center">⚡ Developer Showcase: Resource-Efficient Tools</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            datarn.dev is an <strong>open-source platform</strong> for developers to showcase tools and libraries that handle heavy loads on limited computational resources. 
            <br/>If your tool works <strong>lightning-fast with minimal CPU/memory</strong>, using <strong>any technology</strong>, it belongs here.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* App Card 1 */}
            <div className="border-2 border-teal-200 rounded-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 h-32 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">rst_queue</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Lightning-fast queue library. Handles 100,000+ ops/sec on minimal CPU. Built for maximum throughput with minimal resource overhead.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs font-medium">Rust+Python</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Distributed</span>
                </div>
                <a href="https://github.com/datarn-io/rst_queue" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* App Card 2 - Placeholder */}
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-teal-300 hover:bg-teal-50 transition">
              <span className="text-5xl mb-4">✨</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Your App Here</h3>
              <p className="text-slate-600 text-sm mb-4">
                Does your app handle heavy loads efficiently? Is it lightweight? Made with distributed teamwork in mind?
              </p>
              <a href="/discussion" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                Submit Your App →
              </a>
            </div>

            {/* App Card 3 - Placeholder */}
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-teal-300 hover:bg-teal-50 transition">
              <span className="text-5xl mb-4">🎯</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Community Built</h3>
              <p className="text-slate-600 text-sm mb-4">
                Datarn grows with developer contributions. Your leafcutter app could be featured here.
              </p>
              <a href="/discussion" className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>

          {/* Developer Guidelines */}
          <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Build Resource-Efficient Tools</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    <circle cx="100" cy="100" r="95" fill="#f97316" opacity="0.1" stroke="#f97316" strokeWidth="2"/>
                    <path d="M 100 30 L 80 70 L 100 70 L 70 160 L 100 100 L 80 100 Z" fill="#f97316" stroke="#f97316" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Lightning Speed</h4>
                <p className="text-slate-700 text-sm">
                  Minimal overhead. Fast execution. Measurable performance gains. Every CPU cycle counts.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    <g stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="30" y="40" width="140" height="30" rx="4"/>
                      <line x1="30" y1="55" x2="170" y2="55"/>
                      <rect x="50" y="90" width="100" height="25" rx="3"/>
                      <line x1="50" y1="102" x2="150" y2="102"/>
                      <rect x="70" y="135" width="60" height="20" rx="2"/>
                      <line x1="70" y1="145" x2="130" y2="145"/>
                    </g>
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Resource Efficient</h4>
                <p className="text-slate-700 text-sm">
                  Handle heavy loads with limited CPU/memory. Maximum work per computational unit.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    <g stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M 60 50 L 50 100 L 60 150"/>
                      <path d="M 140 50 L 150 100 L 140 150"/>
                      <line x1="70" y1="80" x2="130" y2="80"/>
                      <line x1="70" y1="100" x2="120" y2="100"/>
                      <line x1="70" y1="120" x2="130" y2="120"/>
                    </g>
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Open Source</h4>
                <p className="text-slate-700 text-sm">
                  Any license. Any technology. Community-built. Transparent and auditable.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-700 mb-4">
                <strong>Ready to list your app?</strong> Submit your project in our community and let developers discover your leafcutter solution.
              </p>
              <a href="/discussion" className="btn btn-primary inline-flex">
                Submit Your App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <h2 className="section-heading text-center">Technology Behind Teamwork</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            How distributed systems and parallel processing create lightweight applications that handle unlimited loads
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition">
              <div className="w-16 h-16 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <circle cx="100" cy="100" r="95" fill="#14b8a6" opacity="0.1" stroke="#14b8a6" strokeWidth="2"/>
                  <path d="M 100 30 L 80 70 L 100 70 L 70 160 L 100 100 L 80 100 Z" fill="#14b8a6" stroke="#14b8a6" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="130" cy="60" r="4" fill="#14b8a6"/>
                  <circle cx="140" cy="85" r="3" fill="#14b8a6" opacity="0.6"/>
                  <circle cx="135" cy="110" r="3.5" fill="#14b8a6" opacity="0.8"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Speed</h3>
              <p className="text-slate-600">
                Minimal latency. Fast execution. Optimized for every microsecond. Performance is a feature.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition">
              <div className="w-16 h-16 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <g stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="30" y="40" width="140" height="30" rx="4"/>
                    <line x1="30" y1="55" x2="170" y2="55"/>
                    <rect x="50" y="90" width="100" height="25" rx="3"/>
                    <line x1="50" y1="102" x2="150" y2="102"/>
                    <rect x="70" y="135" width="60" height="20" rx="2"/>
                    <line x1="70" y1="145" x2="130" y2="145"/>
                  </g>
                  <path d="M 100 160 L 100 175 M 95 170 L 100 175 L 105 170" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resource Efficient</h3>
              <p className="text-slate-600">
                Minimal CPU. Minimal memory. Heavy loads on limited resources. Maximum work per unit.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition">
              <div className="w-16 h-16 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="w-full h-full">
                  <circle cx="100" cy="100" r="95" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="2"/>
                  <line x1="40" y1="150" x2="160" y2="150" stroke="#10b981" strokeWidth="2.5"/>
                  <line x1="40" y1="30" x2="40" y2="150" stroke="#10b981" strokeWidth="2.5"/>
                  <rect x="55" y="100" width="20" height="50" fill="#10b981" opacity="0.3" stroke="#10b981"/>
                  <rect x="85" y="75" width="20" height="75" fill="#10b981" opacity="0.6" stroke="#10b981"/>
                  <rect x="115" y="50" width="20" height="100" fill="#10b981" opacity="1" stroke="#10b981"/>
                  <path d="M 150 40 L 140 55 L 148 55 L 130 75 L 148 65 L 140 65 Z" fill="#10b981"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Performance</h3>
              <p className="text-slate-600">
                Real benchmarks. Real scenarios. Real impact. Data proves everything. Marketing means nothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Leafcutter Principle - Physics of Lightweight Power */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <h2 className="section-heading text-center mb-4">🔬 The Leafcutter Principle: Why Small = Mighty</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto mb-12">
            The secret of the insect world—and the secret to building powerful applications
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">🐜 The Biology</h3>
                <p className="text-slate-700 mb-4">
                  <strong>As an animal gets smaller, its volume (weight) decreases much faster than the surface area of its muscles.</strong>
                </p>
                <div className="space-y-4 text-slate-700">
                  <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                    <p className="font-bold text-teal-600 mb-2">The Math:</p>
                    <p className="text-sm">Volume scales with size³ (shrinks rapidly)</p>
                    <p className="text-sm">Muscle surface area scales with size² (shrinks slower)</p>
                    <p className="text-sm font-bold mt-2">Result: Disproportionate muscle-to-weight ratio</p>
                  </div>
                  <p className="text-sm">
                    A leafcutter ant's tiny body weighs almost nothing, but its muscles are proportionally HUGE. This means almost no energy is wasted supporting its own weight—everything else is "spare power" for lifting external loads.
                  </p>
                  <p className="text-sm italic text-slate-600">
                    If an ant were human-sized, it couldn't even stand up under its own weight! But at ant-size, it's a superpower.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">💻 The Code Metaphor</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Build applications with minimal overhead. Use spare capacity for computational power.</strong>
                </p>
                <div className="space-y-4 text-slate-700">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <p className="font-bold text-blue-600 mb-2">Code Optimization Principle:</p>
                    <p className="text-sm">Excess overhead scales down = less waste</p>
                    <p className="text-sm">Efficient algorithms scale up = more power</p>
                    <p className="text-sm font-bold mt-2">Result: Disproportionate power-to-footprint ratio</p>
                  </div>
                  <p className="text-sm">
                    A lightweight application wastes almost nothing on framework overhead, garbage collection, unnecessary allocations, or bloat. This leaves massive "spare compute" for actual work.
                  </p>
                  <p className="text-sm italic text-slate-600">
                    10KB of optimized code can process terabytes of data. 100MB of framework overhead just to "get started" leaves nothing for real work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-100 to-blue-100 border-2 border-teal-300 rounded-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">The Parallel: Physics → Code</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-bold text-teal-600 mb-2">Ant's Tiny Body</p>
                  <p className="text-slate-700 text-sm">↓</p>
                  <p className="font-bold text-blue-600">Minimal Code Overhead</p>
                  <p className="text-slate-600 text-sm mt-1">Few dependencies, lean algorithms, no bloat</p>
                </div>
                <div>
                  <p className="font-bold text-teal-600 mb-2">Proportional Muscles</p>
                  <p className="text-slate-700 text-sm">↓</p>
                  <p className="font-bold text-blue-600">Optimized Compute</p>
                  <p className="text-slate-600 text-sm mt-1">Parallel execution, efficient operations, maximum power</p>
                </div>
                <div>
                  <p className="font-bold text-teal-600 mb-2">50x Carrying Capacity</p>
                  <p className="text-slate-700 text-sm">↓</p>
                  <p className="font-bold text-blue-600">Heavy Load Handling</p>
                  <p className="text-slate-600 text-sm mt-1">Process massive datasets, handle high concurrency, scale infinitely</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="py-20 bg-slate-50">
        <div className="container-width">
          <h2 className="section-heading text-center">🐜 The Leafcutter Ant: Distributed System Model</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            How the Leafcutter Principle applies to distributed computing architecture
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🐜 Minimal Overhead Architecture</h3>
              <p className="text-slate-600 text-sm mb-4 font-semibold">
                Apply the Leafcutter Principle: Minimal code overhead = Maximum spare compute capacity
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 text-xl">⚙️</span>
                  <span><strong>Lightweight Scheduler:</strong> Minimal overhead on task distribution. No heavy framework bloat consuming CPU/memory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 text-xl">🔄</span>
                  <span><strong>Efficient Load Distribution:</strong> Smart work queue that uses almost zero resources to route millions of tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 text-xl">📊</span>
                  <span><strong>Direct Execution:</strong> Each processor (ant) gets work quickly with minimal context switching. No bottlenecks stealing compute</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 text-xl">🚀</span>
                  <span><strong>Linear Scaling:</strong> Add more cores: get proportional performance. The overhead doesn't grow with scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-3 text-xl">🛡️</span>
                  <span><strong>Resilient Design:</strong> Failures isolated to single workers. System overhead remains constant even when individual components fail</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-teal-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">💡 The Math of Power</h3>
              <p className="text-slate-600 text-sm mb-4 font-semibold">
                Why lightweight = extreme capacity
              </p>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded border-l-4 border-teal-500">
                  <p className="text-sm font-bold text-slate-900 mb-2">Total System Power = 100%</p>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex justify-between">
                      <span><strong>Bloated App:</strong></span>
                      <span>75% overhead + 25% work</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Optimized App:</strong></span>
                      <span>5% overhead + 95% work</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-bold text-teal-600">
                      <span>Difference:</span>
                      <span>4x performance gain</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 italic">
                  Same hardware. Design matters. The Leafcutter Principle: minimize self-supporting overhead, maximize external work capacity.
                </p>
              </div>
            </div>
          </div>

          {/* Pilot Fish Symbiosis */}
          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">🐟 The Pilot Fish: Directing the Whale</h3>
            <p className="text-slate-600 text-sm mb-6 font-semibold">
              A small guidance layer orchestrating massive computational power—the ultimate Leafcutter Principle in action
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">🎯</span>
                  <span><strong>Lightweight Director:</strong> Minimal code (like the ant's tiny body) that orchestrates terabytes of processing power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">💾</span>
                  <span><strong>Proportional Control:</strong> Small instruction set scaled across massive systems. Control overhead irrelevant compared to computational output</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">🔗</span>
                  <span><strong>Seamless Integration:</strong> Guides existing systems without replacing them. Works alongside, not instead of, existing infrastructure</span>
                </li>
              </ul>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">🌊</span>
                  <span><strong>Efficiency Finder:</strong> Uses almost zero resources to find optimal execution paths for massive workloads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">📈</span>
                  <span><strong>Symbiotic Benefit:</strong> The "whale" (your system) gets faster. The "fish" (the coordinator) gets utilization. Both win</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-xl">⚡</span>
                  <span><strong>Perfect Ratio:</strong> Like the ant carrying 50x its weight, a small amount of code directs 50-1000x the raw computational power</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg border-2 border-teal-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Real-World Technology Stack</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-6">
              <div>
                <h4 className="font-bold text-teal-600 mb-3">🔧 Core Technologies</h4>
                <ul className="text-slate-700 space-y-2 text-sm">
                  <li>• Multi-CPU/Multi-Core Processing</li>
                  <li>• Distributed Computing Frameworks</li>
                  <li>• Load Balancing Algorithms</li>
                  <li>• Task Scheduling Systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-teal-600 mb-3">📡 Integration Points</h4>
                <ul className="text-slate-700 space-y-2 text-sm">
                  <li>• Message Queues</li>
                  <li>• Microservice Orchestration</li>
                  <li>• API Gateways</li>
                  <li>• Container Management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-teal-600 mb-3">📊 Performance Metrics</h4>
                <ul className="text-slate-700 space-y-2 text-sm">
                  <li>• Throughput Scaling</li>
                  <li>• Latency Optimization</li>
                  <li>• Resource Utilization</li>
                  <li>• Fault Recovery Time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
