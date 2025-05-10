'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blogs', label: 'Blogs/Notes' },
  { href: '/portfolio', label: 'Publications/Portfolio' },
  { href: '/about', label: 'About' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center mt-12">
      <div 
        className="flex items-center px-4 py-2 rounded-full bg-[#E4E4E4] gap-3 relative" 
        style={{ 
          width: '670px', 
          height: '56px',
          filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.04))'
        }}
      >
        {/* Hamburger in white circle */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <button
            className="flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7H19M1 1H19M1 13H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-white'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 