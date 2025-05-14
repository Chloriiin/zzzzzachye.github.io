'use client';

import { useState } from 'react';

interface NotionEmbedProps {
  pageUrl: string;
  title?: string;
}

export default function NotionEmbed({ pageUrl, title }: NotionEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed inset-0 z-0 notion-embed-wrapper">
      {/* Title section only renders when title is provided */}
      {title && (
        <div className="bg-white py-1 px-2">
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      )}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2">Loading Notion page...</p>
          </div>
        </div>
      )}
      
      <iframe 
        src={pageUrl}
        className="absolute inset-0 w-full h-full"
        style={{ 
          border: 'none',
          transform: 'translateZ(0)', // Hardware acceleration
          willChange: 'transform' // Hint for browser optimization
        }}
        frameBorder="0" 
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
} 