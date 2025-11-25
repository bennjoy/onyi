'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
    <div className="min-h-screen w-full">
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

      {/* Hero Section - Full Screen with bg.jpg */}
      <section className="relative w-full" style={{ height: '100vh', paddingTop: '60px' }}>
        <Image
          src="/bg.jpg"
          alt="Onyinye Otti Portfolio"
          fill
          priority
          className="object-cover"
        />

        {/* Title at bottom center - positioned absolutely */}
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center z-10">
          <h1 className="text-5xl font-light text-white text-center" style={{ fontFamily: "'The Seasons'" }}>
            ONYINYE OTTI
          </h1>
        </div>
      </section>

      {/* About/Services Section - Full Screen with bg2.jpg */}
      <section className="relative w-full flex flex-col justify-between" style={{ minHeight: '100vh', paddingTop: '60px' }}>
        <Image
          src="/bg2.jpg"
          alt="Fashion Beauty Lifestyle"
          fill
          className="object-cover"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Center text at top */}
        <div className="relative z-10 w-full text-center px-8 md:px-16 py-20">
          <h2 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'The Seasons'" }}>
            Fashion, Beauty & Lifestyle creator
          </h2>
        </div>

        {/* Bottom right text */}
        <div className="relative z-10 w-full flex justify-end px-8 md:px-16 py-20">
          <div className="text-center max-w-lg">
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed" style={{ fontFamily: "'The Seasons'" }}>
              UGC content,<br/>
              Brand Campaign &<br/>
              Modelling
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
