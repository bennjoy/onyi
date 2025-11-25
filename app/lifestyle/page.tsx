'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Lifestyle() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Fashion', href: '/fashion' },
    { label: 'Beauty', href: '/beauty' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'Work With Me', href: '/contact' },
  ];

  // Lifestyle brand logos
  const lifestyleBrands = [
    '/lifestyle-page_files/aniahaie.png',
    '/lifestyle-page_files/astridmiyu.png',
    '/lifestyle-page_files/millygrace.png',
    '/lifestyle-page_files/notbranded.png',
    '/lifestyle-page_files/oddbird.png',
    '/lifestyle-page_files/senreve.png',
    '/lifestyle-page_files/trip.png',
  ];

  // Lifestyle portfolio images
  const lifestyleImages = [
    '/lifestyle-page_files/29cb54d34982e911eee1d60af34eac6d.jpg',
    '/lifestyle-page_files/54fded258ac2b98913f3de75a4b66b22.jpg',
    '/lifestyle-page_files/5863f17a3ed61902ee3148dc6a04ad40.jpg',
    '/lifestyle-page_files/5c9a13f0eb047b2268f4911658c83cad.jpg',
    '/lifestyle-page_files/7283cc932304f986dd4382c0e05da41d.jpg',
    '/lifestyle-page_files/8f5df29b70f301981cfaa557f2952aa1.jpg',
    '/lifestyle-page_files/a823d7aab515f530bb208f831024a254.jpg',
    '/lifestyle-page_files/dfe98d5b250491a4995b1791b15c2d6e.jpg',
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
        {/* Portfolio Images Section */}
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Row 1: oddbird logo, 8f5df image, 5863f image, trip logo */}
            <div className="grid grid-cols-4 gap-0 mb-0">
              {/* oddbird logo */}
              <div className="aspect-[3/4] bg-white overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/oddbird.png"
                  alt="Oddbird"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              {/* 8f5df image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/8f5df29b70f301981cfaa557f2952aa1.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              {/* 5863f image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/5863f17a3ed61902ee3148dc6a04ad40.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              {/* trip logo */}
              <div className="aspect-[3/4] bg-white overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/trip.png"
                  alt="Trip"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>

            {/* Row 2: image a823, video 9bff, image dfe9, video a9d4, video d8ac */}
            <div className="grid grid-cols-5 gap-0 mb-0">
              {/* a823 image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/a823d7aab515f530bb208f831024a254.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* 9bff video */}
              <div className="aspect-[3/4] bg-black overflow-hidden relative">
                <video
                  controls
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                >
                  <source src="/lifestyle_videos/9bff99668d61ac18dda6ebe319243b39.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* dfe9 image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/dfe98d5b250491a4995b1791b15c2d6e.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* a9d4 video */}
              <div className="aspect-[3/4] bg-black overflow-hidden relative">
                <video
                  controls
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                >
                  <source src="/lifestyle_videos/a9d4299b9c2d15757d0fa2b936ff1e42.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* d8ac video */}
              <div className="aspect-[3/4] bg-black overflow-hidden relative">
                <video
                  controls
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                >
                  <source src="/lifestyle_videos/d8ac368341adf2bccec6d94d89c59b4d.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Row 3: astridmiyu, aniahaie, notbranded, millygrace, senreve logos */}
            <div className="grid grid-cols-5 gap-0 mb-0">
              {/* astridmiyu logo */}
              <div className="aspect-[3/4] bg-white overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/astridmiyu.png"
                  alt="Astrid Miyu"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* aniahaie logo */}
              <div className="aspect-[3/4] bg-white overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/aniahaie.png"
                  alt="Ania Haie"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* notbranded logo */}
              <div className="aspect-[3/4] bg-white overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/notbranded.png"
                  alt="Not Branded"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* millygrace logo */}
              <div className="aspect-[3/4] bg-white overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/millygrace.png"
                  alt="Milly Grace"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* senreve logo */}
              <div className="aspect-[3/4] bg-white overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/senreve.png"
                  alt="Senreve"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
            </div>

            {/* Row 4: image 29cb, image 7823, video ca997a1e, image 54fd, image 5c9a */}
            <div className="grid grid-cols-5 gap-0 mb-0">
              {/* 29cb image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/29cb54d34982e911eee1d60af34eac6d.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* 7283 image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/7283cc932304f986dd4382c0e05da41d.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* ca997a1e video */}
              <div className="aspect-[3/4] bg-black overflow-hidden relative">
                <video
                  controls
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                >
                  <source src="/lifestyle_videos/ca997a1e2540fdc745e8900e144ea706.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* 54fd image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/54fded258ac2b98913f3de75a4b66b22.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              {/* 5c9a image */}
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/lifestyle-page_files/5c9a13f0eb047b2268f4911658c83cad.jpg"
                  alt="Lifestyle"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
