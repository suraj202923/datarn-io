import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Datarn - Rust+Python, Go+Python Custom Libraries',
  description: 'Open source platform for Rust+Python and Go+Python custom libraries to enhance Python development',
  keywords: 'rust, python, go, custom libraries, performance, open source',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
