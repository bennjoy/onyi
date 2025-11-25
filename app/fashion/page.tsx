'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Fashion() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Fashion', href: '/fashion' },
    { label: 'Beauty', href: '/beauty' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'Work With Me', href: '/contact' },
  ];

  // Sample images for brand logos and portfolio
  const brandLogos = [
    '/brands-page_files/11d61ab5bb4d98a68fad43f2b7eabb5e.png',
    '/brands-page_files/8ad83e02ae6bd8586f32fc91288e0cd0.png',
    '/brands-page_files/3d76f1572b3ffdc55c14bac0c16996de.png',
    '/brands-page_files/22a7de788bbf10aca4a82cfa7fe74d41.png',
    '/brands-page_files/2e9d86c9726e4f2c74cf43ee4f9a7606.png',
    '/brands-page_files/f56135201749ff2218c9ce785dd52995.png',
    '/brands-page_files/7c628024a4c9ca43187dd28658d51d05.png',
    '/brands-page_files/e6baa5fb5f23049d299a1bb7a37a93ca.png',
    '/brands-page_files/0785fda6071638a01503dece4541bb70.png',
    '/brands-page_files/e2d739358c6d52828446602a835b1300.png',
    '/brands-page_files/871d449679209e05b8e371f641e475c5.png',
    '/brands-page_files/fe4fd079cf21fb0747233860b9ad57b6.png',
  ];

  const portfolioVideos = [
    '/videos/091c6ace803ef58471faab14640762c6.mp4',
    '/videos/29862e15b3ada22bc5153ae57a9ef594.mp4',
    '/videos/40b1cf26fe2da3415508be4640c7d8c3.mp4',
    '/videos/81b660a3b4bec45273dd54cd30013684.mp4',
    '/videos/f41531015882dfe1f09324d54d345c31.mp4',
    '/videos/f8aab37128d869a988ac82f3f4f7136a.mp4',
    '/videos/ffd6b3b9a6965ef96a51354059629c53.mp4',
  ];

  const portfolioImages = [
    '/brands-page_files/6ad06fb94ea3c2a68f4e9b43ea9cb3c3.jpg',
    '/brands-page_files/054eae5304256a5c491ae4a65c7310d8.jpg',
    '/brands-page_files/46178795ba1a1b815b8f02b8a86414f6.jpg',
    '/brands-page_files/4ad322a5d6ec0385eb26c2d45864b8e7.jpg',
    '/brands-page_files/b29694b1b511d823d8130ad59b3c1e37.jpg',
    '/brands-page_files/bbc3e15d2968b8ad4fc2c23f7542f5f9.jpg',
    '/brands-page_files/4dbcbf21e64675512909953ba72cd5e6.jpg',
    '/brands-page_files/286ce1b06df2d33e5a55defe1fe76bdd.jpg',
    '/brands-page_files/0f6ae65e5f22aca36292ba00c6b70ae9.jpg',
    '/brands-page_files/d7aec33b3a506a4ca6c58c1aead0c02f.jpg',
    '/brands-page_files/2981315a12096a4ccddb82b554ae5e63.jpg',
    '/brands-page_files/4e2bf2ad1f4971ffa3b4f18f6ef8d6b0.jpg',
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
        {/* Brand Logos Section */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center" style={{ fontFamily: "'The Seasons'" }}>
              FASHION
            </h1>

            {/* Brand Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {brandLogos.map((logo, index) => (
                <div key={index} className="aspect-square bg-white rounded-lg overflow-hidden flex items-center justify-center relative">
                  <Image
                    src={logo}
                    alt={`Brand ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-12 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Videos Grid - 7 videos in portrait layout */}
            <div className="grid grid-cols-7 gap-0">
              {portfolioVideos.map((video, index) => (
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

        {/* Portfolio Images Section */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Images Grid - 2 rows of 6 images in portrait */}
            <div className="grid grid-cols-6 gap-0">
              {portfolioImages.map((image, index) => (
                <div key={index} className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                  <Image
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 16.67vw"
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
