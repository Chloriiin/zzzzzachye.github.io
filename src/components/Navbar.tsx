'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndicatorStyle, setActiveIndicatorStyle] = useState({
    left: 0,
    width: 0,
    display: 'none'
  });
  
  const navRefs = {
    '/': useRef<HTMLAnchorElement>(null),
    '/blogs': useRef<HTMLAnchorElement>(null),
    '/publications': useRef<HTMLAnchorElement>(null),
    '/about': useRef<HTMLAnchorElement>(null),
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  // Update indicator position when pathname changes
  useEffect(() => {
    const path = pathname === '/' ? '/' : 
                pathname?.startsWith('/blogs') ? '/blogs' : 
                pathname?.startsWith('/publications') ? '/publications' : 
                pathname?.startsWith('/about') ? '/about' : '/';
    
    const activeRef = navRefs[path];
    
    if (activeRef?.current) {
      const element = activeRef.current;
      const parent = element.parentElement;
      
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const rect = element.getBoundingClientRect();
        
        // Calculate position relative to parent
        setActiveIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
          display: 'block'
        });
      }
    }
  }, [pathname]);

  // Window resize handler to recalculate position
  useEffect(() => {
    const handleResize = () => {
      // Trigger the useEffect above by forcing a re-render
      setActiveIndicatorStyle(prev => ({...prev}));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        <div className="flex flex-1 justify-around relative">
          {/* Active indicator background */}
          <div 
            className="absolute bg-white rounded-full transition-all duration-300 ease-in-out" 
            style={{ 
              left: `${activeIndicatorStyle.left}px`, 
              width: `${activeIndicatorStyle.width}px`,
              height: '38px',
              top: '4px',
              display: activeIndicatorStyle.display,
            }}
          />
          
          <Link 
            href="/" 
            ref={navRefs['/']}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 relative ${isActive('/') ? 'font-bold' : 'font-normal hover:text-gray-800'}`}
          >
            Home
          </Link>
          <Link 
            href="/blogs" 
            ref={navRefs['/blogs']}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 relative ${isActive('/blogs') ? 'font-bold' : 'font-normal hover:text-gray-800'}`}
          >
            Blogs/Notes
          </Link>
          <Link 
            href="/publications" 
            ref={navRefs['/publications']}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 relative ${isActive('/publications') ? 'font-bold' : 'font-normal hover:text-gray-800'}`}
          >
            Publications/Portfolio
          </Link>
          <Link 
            href="/about" 
            ref={navRefs['/about']}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 relative ${isActive('/about') ? 'font-bold' : 'font-normal hover:text-gray-800'}`}
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