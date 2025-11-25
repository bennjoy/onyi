'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Beauty() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Fashion', href: '/fashion' },
    { label: 'Beauty', href: '/beauty' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'Work With Me', href: '/contact' },
  ];

  // Beauty brand logos
  const beautyBrands = [
    '/beauty-page_files/1444f68c611f8a04bcf3c69c360fe98d.png',
    '/beauty-page_files/1dea64462e7927b93d4b0daa6f80c76b.png',
    '/beauty-page_files/261cc0ccc1586d02ad0835f7a707121f.png',
    '/beauty-page_files/43157032464cd317d5cb9adb5c83bb5e.png',
    '/beauty-page_files/b577cadd20ea7cc5ad511d4b30a71c9f.png',
    '/beauty-page_files/dbea2d914d4f4c59f62af11e099b2667.png',
    '/beauty-page_files/e3bd4c1512a920f04a317a5eb853774d.png',
    '/beauty-page_files/fc88000920062812a2f33bda3dc1dd86.png',
  ];

  // Beauty videos
  const beautyVideos = [
    '/beauty_videos/4a076b7ceca2e945339324474c50f3f5.mp4',
    '/beauty_videos/4caeb2ec4ca324e0545cbbc070f9032f.mp4',
    '/beauty_videos/7c14508e964e0c4408d6b65a97b57aae.mp4',
    '/beauty_videos/9f16f3b7475af70f1430a17cebde8681.mp4',
  ];

  // Beauty portfolio images
  const beautyImages = [
    '/beauty-page_files/3de45905d3c484d5b2e77523f0210a7f.jpg',
    '/beauty-page_files/56d787835cb5ad9d6aa8e6ce3ec510cb.jpg',
    '/beauty-page_files/7620183dd8d91e79de3e71a2e19f6ac2.jpg',
    '/beauty-page_files/acc8849f025e345d61d0010dca88782a.jpg',
    '/beauty-page_files/d9f9d5744bb69b45be347dcfb8602bcb.jpg',
    '/beauty-page_files/f25fd9c598081a66d5b73aed1c1f142c.jpg',
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
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/beauty-page_files/c76948334f9522b690beacfd9819650a.jpg"
              alt="Beauty Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content overlay */}
          <div className="relative z-10 max-w-full w-full flex items-center justify-start">
            {/* Left side - Brand logos grid 2x4 - ZOOMED IN */}
            <div className="hidden md:grid grid-cols-2 gap-8 flex-shrink-0">
              {beautyBrands.map((brand, index) => (
                <div key={index} className="w-32 h-32 bg-white rounded-full overflow-hidden flex items-center justify-center relative shadow-lg">
                  <Image
                    src={brand}
                    alt={`Beauty Brand ${index + 1}`}
                    fill
                    className="object-cover scale-160 translate-y-6"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-12 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Videos Grid - 4 videos in portrait layout */}
            <div className="grid grid-cols-4 gap-0">
              {beautyVideos.map((video, index) => (
                <div key={index} className="aspect-[9/16] bg-black overflow-hidden relative">
                  <video
                    controls
                    loop
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                    controlsList="nodownload"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Images Grid - portrait images packed tightly */}
            <div className="grid grid-cols-6 gap-0">
              {beautyImages.map((image, index) => (
                <div key={index} className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                  <Image
                    src={image}
                    alt={`Beauty Portfolio ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="16.67vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
