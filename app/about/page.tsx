'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Fashion', href: '/fashion' },
    { label: 'Beauty', href: '/beauty' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'Work With Me', href: '/contact' },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-xl font-light" style={{ fontFamily: 'var(--font-bodoni)' }}>
            &nbsp;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-m text-gray-700 hover:text-gray-900 transition-colors"
                style={{ fontFamily: "'The Seasons'" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-gray-700 hover:text-gray-900 transition-colors py-2"
                  style={{ fontFamily: "'The Seasons'" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-12 md:px-24">
          {/* Page Title */}
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-20" style={{ fontFamily: "'The Seasons'" }}>
            About Me
          </h1>

          {/* About paragraphs */}
          <div className="space-y-12">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800" style={{ fontFamily: "'The Seasons'" }}>
              I am Onyinye, a London-based creator who makes breathable and relaxed content that feels natural yet quietly captivating.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-800" style={{ fontFamily: "'The Seasons'" }}>
              I believe that people spend a lot of their time online and it is important to create content that feels calming and visually grounding, something that allows them to slow down, even for a moment. I've also found that people are more likely to buy what they save and save what they truly like and that's exactly how I approach my work.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-800" style={{ fontFamily: "'The Seasons'" }}>
              At my core, I am an observer. I find beauty and creativity in subtle everyday moments and I love capturing them through videos, photos, vlogs, and words, not just to sell, but to tell a story that feels genuine and alive
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex gap-6 mt-20 justify-start">
            <a
              href="https://instagram.com/onyinyeotti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              title="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>

            <a
              href="https://tiktok.com/@onyinyeotti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              title="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.08 1.61 2.88 2.88 0 0 1 4.07-4.77v-3.4a6.47 6.47 0 0 0-6.64 6.61 6.47 6.47 0 0 0 6.64 6.61 6.47 6.47 0 0 0 6.61-6.61V9.75a8.42 8.42 0 0 0 3.54 2.34v-3.4a4.83 4.83 0 0 1-3.77-2z"/>
              </svg>
            </a>

            <a
              href="https://youtube.com/@onyinyeotti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              title="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
