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
    const blinkInterval = isTypingComplete ? 280 : 180; // Faster blinking for more flickering effect
    
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
    <>
      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 1; }
          49% { opacity: 1; }
          50% { opacity: 0; }
          52% { opacity: 1; }
          87% { opacity: 1; }
          88% { opacity: 0; }
          90% { opacity: 1; }
          100% { opacity: 1; }
        }
        .terminal-cursor {
          animation: flicker 0.6s infinite;
          animation-timing-function: steps(1);
        }
      `}</style>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-left whitespace-nowrap relative">
        {formatDisplayedText()}
        <span 
          className={`${showCursor ? 'terminal-cursor' : 'opacity-0'} ml-1 inline-block`}
          style={{ 
            marginLeft: displayedText.length === fullTitle.length ? '4px' : '1px',
            fontWeight: 'normal'
          }}
        >
          _
        </span>
      </h1>
    </>
  );
} 