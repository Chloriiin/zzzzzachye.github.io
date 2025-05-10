'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="w-full max-w-4xl mx-auto py-4">
      <div className="flex items-center justify-center bg-gray-100 rounded-full px-4 py-2">
        <button 
          className="flex items-center justify-center p-2 mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className={`px-4 py-2 font-medium rounded-full transition-colors ${isActive('/') ? 'bg-white' : 'hover:bg-white'}`}>
            Home
          </Link>
          <Link href="/blogs" className={`px-4 py-2 font-medium rounded-full transition-colors ${isActive('/blogs') ? 'bg-white' : 'hover:bg-white'}`}>
            Blogs/Notes
          </Link>
          <Link href="/publications" className={`px-4 py-2 font-medium rounded-full transition-colors ${isActive('/publications') ? 'bg-white' : 'hover:bg-white'}`}>
            Publications/Portfolio
          </Link>
          <Link href="/about" className={`px-4 py-2 font-medium rounded-full transition-colors ${isActive('/about') ? 'bg-white' : 'hover:bg-white'}`}>
            About
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-2 bg-gray-100 rounded-lg p-4 md:hidden">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/blogs" className="block py-2">Blogs/Notes</Link>
          <Link href="/publications" className="block py-2">Publications/Portfolio</Link>
          <Link href="/about" className="block py-2">About</Link>
        </div>
      )}
    </nav>
  );
} 