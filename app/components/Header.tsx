'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [dropdowns, setDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (name: string) => {
    setDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Source Serif 4' }}>
          BowTie360
        </Link>
        
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          
          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('product')}
              className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
            >
              Product
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/features" className="block px-4 py-2 hover:bg-gray-100">Features</Link>
              <Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Pricing</Link>
            </div>
          </div>

          <div className="relative group">
            <button 
              onClick={() => toggleDropdown('company')}
              className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
            >
              Company
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
            </div>
          </div>

          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Sign In
        </button>
      </nav>
    </header>
  );
}