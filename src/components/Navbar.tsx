'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0
  });
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const resetLinksRef = () => {
    linksRef.current = linksRef.current.slice(0, 4);
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  // Update the indicator position whenever the pathname changes
  useEffect(() => {
    // Wait for the component to be fully rendered
    const timer = setTimeout(() => {
      if (!navRef.current) return;
      
      const navRect = navRef.current.getBoundingClientRect();
      const activeIndex = [
        '/',
        '/blogs',
        '/publications',
        '/about'
      ].findIndex(path => isActive(path));
      
      if (activeIndex !== -1 && linksRef.current[activeIndex]) {
        const linkRect = linksRef.current[activeIndex]?.getBoundingClientRect();
        if (linkRect) {
          setIndicatorStyle({
            left: linkRect.left - navRect.left,
            width: linkRect.width,
            opacity: 1
          });
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Reset links ref on component mount
  useEffect(() => {
    resetLinksRef();
  }, []);

  return (
    <nav className="w-full flex justify-center fixed top-8 left-0 right-0 z-50">
      <div className="w-[670px] h-[52px] flex items-center justify-between bg-[#E4E4E4] rounded-full px-3">
        <button 
          className="flex items-center justify-center p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex flex-1 justify-around relative" ref={navRef}>
          {/* Background indicator that slides */}
          <div 
            className="absolute bg-white rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              height: '40px',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: indicatorStyle.opacity
            }}
          />
          
          {/* Navigation links */}
          <Link 
            href="/" 
            ref={el => {
              linksRef.current[0] = el;
            }}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 ${isActive('/') ? 'font-bold' : 'font-normal'}`}
          >
            Home
          </Link>
          <Link 
            href="/blogs" 
            ref={el => {
              linksRef.current[1] = el;
            }}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 ${isActive('/blogs') ? 'font-bold' : 'font-normal'}`}
          >
            Blogs/Notes
          </Link>
          <Link 
            href="/publications" 
            ref={el => {
              linksRef.current[2] = el;
            }}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 ${isActive('/publications') ? 'font-bold' : 'font-normal'}`}
          >
            Publications/Portfolio
          </Link>
          <Link 
            href="/about" 
            ref={el => {
              linksRef.current[3] = el;
            }}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 ${isActive('/about') ? 'font-bold' : 'font-normal'}`}
          >
            About
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#E4E4E4] rounded-lg p-4 md:hidden w-[670px]">
          <Link href="/" className={`block py-2 font-sfpro ${isActive('/') ? 'font-bold' : 'font-normal'}`}>Home</Link>
          <Link href="/blogs" className={`block py-2 font-sfpro ${isActive('/blogs') ? 'font-bold' : 'font-normal'}`}>Blogs/Notes</Link>
          <Link href="/publications" className={`block py-2 font-sfpro ${isActive('/publications') ? 'font-bold' : 'font-normal'}`}>Publications/Portfolio</Link>
          <Link href="/about" className={`block py-2 font-sfpro ${isActive('/about') ? 'font-bold' : 'font-normal'}`}>About</Link>
        </div>
      )}
    </nav>
  );
} 