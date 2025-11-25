'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
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
          <div className="text-xl font-light" style={{ fontFamily: "'The Seasons'" }}>
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
      <main className="pt-24 min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-2xl text-center space-y-8">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-light text-black" style={{ fontFamily: "'The Seasons'" }}>
            WORK WITH ME
          </h1>

          {/* Description */}
          <div className="space-y-6 text-base md:text-lg" style={{ fontFamily: "'The Seasons'" }}>
            <p className="text-gray-700">
              I truly appreciate you taking the time to explore my portfolio. I'd love to share the services I currently offer and welcome
            </p>

            <p className="text-gray-700">
              UGC content creation, modelling, brand campaigns, events participation (PR event) & more
            </p>

            <p className="text-gray-700">
              Please find my contact information below
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 pt-6 text-xl" style={{ fontFamily: "'The Seasons'" }}>
            <p>
              <span className="underline">
                <a href="mailto:OnyinyeOtti1@gmail.com" className="text-gray-900 hover:text-gray-700">
                  Email: OnyinyeOtti1@gmail.com
                </a>
              </span>
            </p>

            <p>
              <span className="underline">
                <a href="https://instagram.com/OnyinyeOtti" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                  IG: OnyinyeOtti
                </a>
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
