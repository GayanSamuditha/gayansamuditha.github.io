'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#technical-projects', text: 'Technical Projects' },
    { href: '#projects', text: 'Projects' },
    { href: '#research-projects', text: 'Research' },
    { href: '#publications', text: 'Publications' },
    { href: '#education', text: 'Education' },
    { href: '#teaching', text: 'Teaching' },
    { href: '#skills', text: 'Skills' },
    { href: '#articles', text: 'Articles' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsOpen(false)
      }
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b-2 border-blue-200 shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Gayan Samuditha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const hoverColors = [
                'hover:text-blue-600',
                'hover:text-purple-600',
                'hover:text-green-600',
                'hover:text-orange-600',
                'hover:text-pink-600',
                'hover:text-indigo-600',
                'hover:text-teal-600',
                'hover:text-cyan-600',
                'hover:text-violet-600',
                'hover:text-rose-600'
              ]
              const bgColors = [
                'bg-blue-600',
                'bg-purple-600',
                'bg-green-600',
                'bg-orange-600',
                'bg-pink-600',
                'bg-indigo-600',
                'bg-teal-600',
                'bg-cyan-600',
                'bg-violet-600',
                'bg-rose-600'
              ]
              return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-light text-gray-600 ${hoverColors[index % hoverColors.length]} transition-colors relative group`}
              >
                {link.text}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${bgColors[index % bgColors.length]} group-hover:w-full transition-all duration-300`}></span>
              </a>
            )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
