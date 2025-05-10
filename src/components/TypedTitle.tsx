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

  // Blinking cursor effect (always blinks, faster during typing)
  useEffect(() => {
    const blinkInterval = isTypingComplete ? 530 : 300;
    
    const blinkTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, blinkInterval);

    return () => clearInterval(blinkTimer);
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

  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-left whitespace-nowrap relative">
      {formatDisplayedText()}
      <span 
        className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1 inline-block transition-opacity duration-100 animate-pulse`}
        style={{ 
          marginLeft: displayedText.length === fullTitle.length ? '4px' : '1px',
          fontWeight: 'normal'
        }}
      >
        _
      </span>
    </h1>
  );
} 