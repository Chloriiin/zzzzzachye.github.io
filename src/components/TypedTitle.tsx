'use client';

import { useState, useEffect } from 'react';

export default function TypedTitle() {
  const fullTitle = "Chloriiin です。";
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing animation effect
  useEffect(() => {
    if (displayedText === fullTitle) {
      setIsTypingComplete(true);
      return;
    }

    const typingSpeed = 500 / fullTitle.length; // Make entire animation last 0.5s
    const timer = setTimeout(() => {
      setDisplayedText(fullTitle.substring(0, displayedText.length + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, fullTitle]);

  // Flickering cursor effect (more erratic for old terminal look)
  useEffect(() => {
    // Faster, more unpredictable flicker intervals for old terminal feel
    const getRandomInterval = () => {
      // More erratic during typing, slightly more stable after
      const base = isTypingComplete ? 100 : 70;
      return base + Math.floor(Math.random() * 150);
    };
    
    const flickerCursor = () => {
      setShowCursor(prev => !prev);
      setTimeout(flickerCursor, getRandomInterval());
    };
    
    const initialTimeout = setTimeout(flickerCursor, getRandomInterval());
    
    return () => clearTimeout(initialTimeout);
  }, [isTypingComplete]);

  // Format the displayed text to add spacing between Chloriiin and です
  const formatDisplayedText = () => {
    if (displayedText.includes('です')) {
      const parts = displayedText.split('で');
      return (
        <>
          {parts[0]}<span className="ml-2 md:ml-4">で{parts[1] || ''}</span>
        </>
      );
    }
    return displayedText;
  };

  // Add custom flickering style with CSS
  const flickerStyle = `
    @keyframes textFlicker {
      0% { opacity: 1.0; }
      10% { opacity: 0.2; }
      20% { opacity: 0.9; }
      30% { opacity: 1.0; }
      40% { opacity: 0.0; }
      50% { opacity: 0.9; }
      60% { opacity: 0.2; }
      70% { opacity: 1.0; }
      80% { opacity: 0.5; }
      90% { opacity: 0.8; }
      100% { opacity: 1.0; }
    }
  `;

  return (
    <>
      <style jsx>{flickerStyle}</style>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-left whitespace-nowrap relative">
        {formatDisplayedText()}
        <span 
          className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1 inline-block transition-none`}
          style={{ 
            marginLeft: displayedText.length === fullTitle.length ? '4px' : '1px',
            fontWeight: 'normal',
            animation: showCursor ? 'textFlicker 0.2s linear infinite alternate' : 'none'
          }}
        >
          _
        </span>
      </h1>
    </>
  );
} 