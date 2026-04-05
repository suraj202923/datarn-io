import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container-width py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-3 group">
              <div className="w-8 h-8 flex-shrink-0">
                <Image
                  src="/images/datarnlogo.png"
                  alt="Datarn Logo"
                  width={32}
                  height={32}
                  className="w-full h-full transition-transform group-hover:scale-125 filter drop-shadow-sm"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-baseline gap-1">
                  <h3 className="text-lg font-black bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">datarn</h3>
                  <span className="text-xs font-black text-teal-400 tracking-wider">.dev</span>
                </div>
                <span className="text-xs font-bold text-teal-400 tracking-wide">Resource-Efficient Tools</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Open-source platform for developers to showcase tools and libraries that handle heavy loads on minimal computational resources.
            </p>
            <p className="text-slate-400 text-sm">
              Enhancing Python with Rust and Go for superior performance and safety.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-teal-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/discussion" className="hover:text-teal-400 transition">
                  Discussion
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://github.com/datarn-io" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://github.com/datarn-io/docs" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                  MIT License
                </a>
              </li>
              <li>
                <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
                  Apache 2.0 License
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-400 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Datarn. All rights reserved. Open source platform with MIT & Apache licenses.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/suraj202923" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/suraj-kalbande-7a6613a9/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.949v5.418h-3.554s.047-8.733 0-9.646h3.554v1.364c.429-.662 1.196-1.605 2.902-1.605 2.108 0 3.691 1.379 3.691 4.343v5.544zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.759 1.938 1.71 0 .949-.751 1.707-1.981 1.707zm1.946 11.019H3.391V9.787h3.892v10.665zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
