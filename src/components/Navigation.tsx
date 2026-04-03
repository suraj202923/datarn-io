'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container-width flex justify-between items-center h-16">
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/images/datarnlogo.png"
            alt="Datarn Logo"
            width={40}
            height={40}
            priority
            className="h-10 w-auto transition-transform group-hover:scale-110 filter drop-shadow-sm"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <div className="flex items-baseline gap-1">
              <span className="font-black text-lg bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">datarn</span>
              <span className="font-black text-xs text-teal-600 tracking-wider">.dev</span>
            </div>
            <span className="text-xs font-bold text-slate-600 tracking-wide">Resource-Efficient Tools</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-slate-700 hover:text-teal-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-teal-600 transition">
            About
          </Link>
          <Link href="/products" className="text-slate-700 hover:text-teal-600 transition">
            Products
          </Link>
          <Link href="/discussion" className="text-slate-700 hover:text-teal-600 transition">
            Discussion
          </Link>
          <Link href="/team" className="text-slate-700 hover:text-teal-600 transition">
            Team
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="container-width py-4 space-y-4">
            <Link href="/" className="block text-slate-700 hover:text-teal-600 transition">
              Home
            </Link>
            <Link href="/about" className="block text-slate-700 hover:text-teal-600 transition">
              About
            </Link>
            <Link href="/products" className="block text-slate-700 hover:text-teal-600 transition">
              Products
            </Link>
            <Link href="/discussion" className="block text-slate-700 hover:text-teal-600 transition">
              Discussion
            </Link>
            <Link href="/team" className="block text-slate-700 hover:text-teal-600 transition">
              Team
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
