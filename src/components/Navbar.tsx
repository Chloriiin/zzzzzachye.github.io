'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeRect, setActiveRect] = useState({ left: 0, width: 0 });
  const [prevPathname, setPrevPathname] = useState('');
  const [isInitialRender, setIsInitialRender] = useState(true);
  const navRef = useRef<HTMLDivElement>(null);
  
  // Refs for each link element
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({
    '/': null,
    '/blogs': null,
    '/publications': null,
    '/about': null,
  });

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  const getCurrentPathKey = () => {
    if (pathname === '/') return '/';
    if (pathname?.startsWith('/blogs')) return '/blogs';
    if (pathname?.startsWith('/publications')) return '/publications';
    if (pathname?.startsWith('/about')) return '/about';
    return '/';
  };

  // Update the position of the indicator
  const updateIndicatorPosition = (pathKey: string) => {
    const activeLink = linkRefs.current[pathKey];
    
    if (activeLink && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      setActiveRect({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  };

  // On first render, set initial position without animation
  useEffect(() => {
    const currentPath = getCurrentPathKey();
    updateIndicatorPosition(currentPath);
    setPrevPathname(currentPath);
    
    // Set initial render to false after a small delay
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Update indicator position when pathname changes, with animation
  useEffect(() => {
    // Skip on initial render
    if (isInitialRender) return;
    
    const currentPath = getCurrentPathKey();
    
    // Only update if the path actually changed
    if (currentPath !== prevPathname) {
      updateIndicatorPosition(currentPath);
      setPrevPathname(currentPath);
    }
  }, [pathname, isInitialRender, prevPathname]);

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
            className={`absolute bg-white rounded-full ${!isInitialRender ? 'transition-all duration-300 ease-in-out' : ''}`}
            style={{
              left: `${activeRect.left}px`,
              width: `${activeRect.width}px`,
              height: '40px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          
          {/* Navigation links */}
          <Link 
            href="/" 
            ref={(el) => { linkRefs.current['/'] = el; }}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 ${isActive('/') ? 'font-bold' : 'font-normal'}`}
          >
            Home
          </Link>
          <Link 
            href="/blogs" 
            ref={(el) => { linkRefs.current['/blogs'] = el; }}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 ${isActive('/blogs') ? 'font-bold' : 'font-normal'}`}
          >
            Blogs/Notes
          </Link>
          <Link 
            href="/publications" 
            ref={(el) => { linkRefs.current['/publications'] = el; }}
            className={`px-3 py-2 rounded-full transition-colors font-sfpro z-10 ${isActive('/publications') ? 'font-bold' : 'font-normal'}`}
          >
            Publications/Portfolio
          </Link>
          <Link 
            href="/about" 
            ref={(el) => { linkRefs.current['/about'] = el; }}
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