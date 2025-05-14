'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Helper function to check if current page contains a Notion embed
const isNotionEmbedPage = (pathname: string | null): boolean => {
  if (!pathname) return false;
  
  // Check if the path is one of the known Notion embed pages
  const notionPages = [
    '/blogs/japanese1',
    '/blogs/japanese2',
    '/blogs/japanese3',
    '/blogs/numerical',
    '/blogs/pde',
    '/blogs/ode',
    '/blogs/statistics',
    '/blogs/mathmodeling',
    '/blogs/biology',
    '/blogs/enzymes'
  ];
  
  return notionPages.some(page => pathname === page);
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBackButtonHovered, setIsBackButtonHovered] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    scale: 0.8
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

  // Find the active indicator position
  const updateIndicatorPosition = () => {
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
        // First hide the indicator
        setIndicatorStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
          opacity: 0,
          scale: 0.3
        });
        
        // Then show it with animation after a small delay
        setTimeout(() => {
          setIndicatorStyle({
            left: linkRect.left - navRect.left,
            width: linkRect.width,
            opacity: 1,
            scale: 1
          });
        }, 20);
      }
    }
  };

  // Initialize and update the indicator position
  useEffect(() => {
    // Wait for the component to be fully rendered
    const timer = setTimeout(() => {
      updateIndicatorPosition();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  // Reset links ref on component mount
  useEffect(() => {
    resetLinksRef();
  }, []);
  
  // Check if we're on a Notion embed page
  const isNotionPage = isNotionEmbedPage(pathname);

  return (
    <nav className="w-full flex justify-center fixed top-8 left-0 right-0 z-50">
      <div className="w-[670px] h-[52px] flex items-center justify-between bg-[#E4E4E4]/60 backdrop-blur-lg rounded-full px-3">
        {isNotionPage ? (
          // Back button for notion pages
          <Link 
            href="/blogs" 
            className="flex items-center justify-center p-2"
            onMouseEnter={() => setIsBackButtonHovered(true)}
            onMouseLeave={() => setIsBackButtonHovered(false)}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${isBackButtonHovered ? 'bg-black' : 'bg-transparent'}`}>
              <Image 
                src={isBackButtonHovered ? "/imgs/arrow_back.svg" : "/imgs/arrow_back_black.svg"} 
                width={24} 
                height={24} 
                alt="Back" 
                className="w-6 h-6" 
              />
            </div>
          </Link>
        ) : (
          // Hamburger menu for regular pages
          <button 
            className="flex items-center justify-center p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <div className="flex flex-1 justify-around relative" ref={navRef}>
          {/* Background indicator that expands like a balloon */}
          <div 
            className="absolute bg-white rounded-full"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              height: '40px',
              top: '50%',
              transform: `translateY(-50%) scale(${indicatorStyle.scale})`,
              opacity: indicatorStyle.opacity,
              transition: 'opacity 0.05s ease-out, transform 0.25s cubic-bezier(0.17, 0.67, 0.34, 1.55)'
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

      {isMobileMenuOpen && !isNotionPage && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#E4E4E4]/80 backdrop-blur-lg rounded-lg p-4 md:hidden w-[670px]">
          <Link href="/" className={`block py-2 font-sfpro ${isActive('/') ? 'font-bold' : 'font-normal'}`}>Home</Link>
          <Link href="/blogs" className={`block py-2 font-sfpro ${isActive('/blogs') ? 'font-bold' : 'font-normal'}`}>Blogs/Notes</Link>
          <Link href="/publications" className={`block py-2 font-sfpro ${isActive('/publications') ? 'font-bold' : 'font-normal'}`}>Publications/Portfolio</Link>
          <Link href="/about" className={`block py-2 font-sfpro ${isActive('/about') ? 'font-bold' : 'font-normal'}`}>About</Link>
        </div>
      )}
    </nav>
  );
} 