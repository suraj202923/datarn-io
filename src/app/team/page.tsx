import Link from 'next/link'
import Image from 'next/image'

export default function Team() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container-width">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-xl text-slate-300">
            Meet the developer and organizer behind Datarn
          </p>
        </div>
      </section>

      {/* Developer Profile */}
      <section className="py-20 bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-slate-900 to-teal-500 h-32"></div>
              
              <div className="px-8 py-12 relative">
                {/* Avatar Placeholder */}
              <div className="flex justify-center -mt-24 mb-8">
                  <div className="w-40 h-40 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/suraj-k.jpg"
                      alt="Suraj Kalbande"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">Suraj Kalbande</h2>
                  <p className="text-xl text-teal-600 font-semibold mt-2">Associate Data Architect & Founder</p>
                  <p className="text-slate-600 mt-1 text-sm">10+ Years | Cloud Data Engineering | Database Optimization | AI Integration</p>
                  <p className="text-slate-500 mt-1 text-sm">Azure DP-203 Certified | Nagpur, Maharashtra, India</p>
                </div>

                <div className="prose prose-slate max-w-none mb-8">
                  <div className="text-slate-700 space-y-4">
                    <p className="font-semibold text-slate-800">
                      Seasoned Database Professional & Cloud Data Architect with 10+ years of expertise in designing and maintaining scalable data platforms at enterprise scale. Proficient Python developer with deep knowledge of e-commerce and B2B e-commerce ecosystems.
                    </p>
                    <p>
                      As Associate Data Architect at Amla Commerce (creators of Artifi and Znode), Suraj leads a team of data engineers and architects, driving critical infrastructure decisions for e-commerce solutions. He specializes in aligning technical data solutions with broad business requirements through cross-functional collaboration and strategic architecture design. His expertise directly impacts how millions of transactions flow through modern e-commerce platforms.
                    </p>
                    <p>
                      <strong>E-Commerce & B2B E-Commerce Mastery:</strong> Suraj possesses expert-level knowledge of e-commerce ecosystems, including how data flows through every layer—from customer interactions, inventory management, order processing, to payment gateways and logistics. He understands the complexity of B2B e-commerce platforms where data volumes are exponentially higher, multi-tenant architectures are critical, and real-time data synchronization is non-negotiable. His architecture decisions directly optimize customer experiences, reduce transaction latencies, and ensure data integrity at every touchpoint.
                    </p>
                    <p>
                      His core competency spans cloud data engineering, database optimization, and modern data stack technologies. With certified expertise in Azure Data Engineering (DP-203), Suraj has architected solutions using Azure Data Factory, Azure Databricks, Apache Spark, Azure Synapse Analytics, and Snowflake—handling massive-scale data pipelines that power mission-critical business operations.
                    </p>
                    <p>
                      Beyond enterprise architecture, Suraj is passionate about performance optimization and recognized the need for a platform combining Python's simplicity with the speed of Rust and Go. This vision led to founding Datarn—an open-source initiative empowering developers with high-performance custom libraries for real-world challenges, especially in data-intensive domains like e-commerce.
                    </p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-8 bg-white p-6 rounded-lg border border-teal-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Key Highlights</h3>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span><strong>Current Role:</strong> Associate Data Architect at Amla Commerce, leading data engineering teams</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span><strong>Certification:</strong> Azure DP-203 Certified Data Engineer</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span><strong>Experience:</strong> 10+ years in cloud data engineering, database design, and optimization</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span><strong>E-Commerce Expertise:</strong> Expert in e-commerce and B2B e-commerce data flows, architectures, and optimization</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span><strong>Database Expertise:</strong> Master of relational, NoSQL, and vector databases | MS SQL, MongoDB, Elasticsearch, Chroma (Vector DB), MySQL, PostgreSQL</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span><strong>Programming:</strong> Python Developer | Proficient in Rust & Go for performance-critical systems</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-teal-600 font-bold">•</span>
                      <span><strong>Focus Areas:</strong> E-commerce solutions, B2B platforms, database optimization, and GenAI LLM integration</span>
                    </div>
                  </div>
                </div>

                {/* E-Commerce Expertise Section */}
                <div className="mb-8 bg-gradient-to-br from-orange-50 to-teal-50 p-6 rounded-lg border-2 border-orange-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">🏪 E-Commerce & B2B Expertise</h3>
                  <div className="text-slate-700 space-y-3">
                    <p className="font-semibold">
                      Deep understanding of end-to-end e-commerce data ecosystems and B2B platforms:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm ml-2">
                      <li><strong>Data Flow Architecture:</strong> Customer journey tracking → Product catalog management → Order processing → Payment integration → Inventory synchronization → Fulfillment logistics</li>
                      <li><strong>B2B E-Commerce Complexity:</strong> Multi-tenant data isolation, vendor integration, procurement workflows, invoice management, supply chain visibility, and real-time reporting</li>
                      <li><strong>Scale Optimization:</strong> Handling millions of daily transactions, real-time inventory updates, high-throughput order pipelines, and complex data warehousing for business intelligence</li>
                      <li><strong>Data Quality & Integrity:</strong> Ensuring transactional consistency, fraud detection, payment reconciliation, and data accuracy across distributed systems</li>
                      <li><strong>Modern E-Commerce Tools:</strong> Built expertise with platforms like Artifi, Znode, and custom high-performance data solutions</li>
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Technical Expertise</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-2">Cloud & Data Platforms</p>
                      <div className="flex flex-wrap gap-2">
                        {['Azure Data Factory', 'Azure Databricks', 'Azure Synapse Analytics', 'Azure SQL'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-2">Modern Data Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {['Apache Spark', 'Snowflake', 'Redshift', 'BigQuery', 'Apache Airflow', 'AWS Glue', 'Talend'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-2">Database & Storage Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {['MS SQL Server', 'MongoDB', 'Elasticsearch', 'Chroma Vector DB', 'MySQL', 'PostgreSQL', 'Relational DB', 'NoSQL Systems'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-2">Big Data & Advanced Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {['Python Development', 'Apache Spark', 'Data Warehousing', 'Rust Development', 'Go Programming', 'GenAI LLM Integration', 'Performance Optimization', 'Systems Architecture'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect & Learn More */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Connect & Learn More</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.linkedin.com/in/suraj-kalbande-7a6613a9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.949v5.418h-3.554s.047-8.733 0-9.646h3.554v1.364c.429-.662 1.196-1.605 2.902-1.605 2.108 0 3.691 1.379 3.691 4.343v5.544zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.759 1.938 1.71 0 .949-.751 1.707-1.981 1.707zm1.946 11.019H3.391V9.787h3.892v10.665zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                      View Professional Profile
                    </a>
                    <a
                      href="https://github.com/suraj202923"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View GitHub
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 mt-4">
                    <strong>Location:</strong> Nagpur, Maharashtra, India | Open to opportunities in Bengaluru (On-site or Hybrid)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container-width max-w-3xl">
          <h2 className="section-heading text-center mb-8">Vision & Goals</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-slate-900 mb-2">🎯 Short-term</h3>
              <p className="text-slate-600">
                Establish Datarn as a go-to resource for performance-critical Python libraries. Build a growing collection of tested, production-ready Rust+Python and Go+Python bindings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-slate-900 mb-2">📈 Mid-term</h3>
              <p className="text-slate-600">
                Grow a vibrant community of contributors and users. Create comprehensive documentation and educational resources. Establish partnerships with major Python projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="font-bold text-slate-900 mb-2">🚀 Long-term</h3>
              <p className="text-slate-600">
                Make Datarn the standard solution for Python performance optimization. Create an ecosystem where developers can seamlessly combine languages to build faster, safer applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-teal-500 text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join the Datarn Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a developer, contributor, or just curious about high-performance Python—we'd love to have you on board!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn bg-white text-teal-500 hover:bg-slate-100">
              Explore Products
            </Link>
            <a
              href="https://github.com/suraj202923"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white hover:text-teal-500"
            >
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
