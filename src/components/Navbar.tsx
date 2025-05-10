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
    <nav className="w-full flex justify-center py-4">
      <div className="w-[670px] h-[56px] flex items-center justify-between bg-[#E4E4E4] rounded-full px-3">
        <button 
          className="flex items-center justify-center p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex flex-1 justify-around">
          <Link href="/" className={`px-3 py-2 rounded-full transition-colors font-sfpro ${isActive('/') ? 'bg-white font-bold' : 'hover:bg-white font-normal'}`}>
            Home
          </Link>
          <Link href="/blogs" className={`px-3 py-2 rounded-full transition-colors font-sfpro ${isActive('/blogs') ? 'bg-white font-bold' : 'hover:bg-white font-normal'}`}>
            Blogs/Notes
          </Link>
          <Link href="/publications" className={`px-3 py-2 rounded-full transition-colors font-sfpro ${isActive('/publications') ? 'bg-white font-bold' : 'hover:bg-white font-normal'}`}>
            Publications/Portfolio
          </Link>
          <Link href="/about" className={`px-3 py-2 rounded-full transition-colors font-sfpro ${isActive('/about') ? 'bg-white font-bold' : 'hover:bg-white font-normal'}`}>
            About
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-2 bg-[#E4E4E4] rounded-lg p-4 md:hidden">
          <Link href="/" className={`block py-2 font-sfpro ${isActive('/') ? 'font-bold' : 'font-normal'}`}>Home</Link>
          <Link href="/blogs" className={`block py-2 font-sfpro ${isActive('/blogs') ? 'font-bold' : 'font-normal'}`}>Blogs/Notes</Link>
          <Link href="/publications" className={`block py-2 font-sfpro ${isActive('/publications') ? 'font-bold' : 'font-normal'}`}>Publications/Portfolio</Link>
          <Link href="/about" className={`block py-2 font-sfpro ${isActive('/about') ? 'font-bold' : 'font-normal'}`}>About</Link>
        </div>
      )}
    </nav>
  );
} 