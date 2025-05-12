'use client';

import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

interface SubItem {
  title: string;
  // link?: string; // Future: for linking to subpages
}

interface Category {
  id: string;
  title: string;
  subItems: SubItem[];
}

const categoriesData: Category[] = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    subItems: [
      { title: 'Numerical methods to differential equation' },
      { title: 'Analytical methods to partial differential equation (PDE)' },
      { title: 'Analytical methods to ordinary differential equation (ODE)' },
      { title: 'Mathematical statistics' },
    ],
  },
  {
    id: 'biology',
    title: 'Biology/ Life science',
    subItems: [
      // { title: 'Sub-item Bio 1' }, // Example for future
    ],
  },
  {
    id: 'arts',
    title: 'Arts and language',
    subItems: [
      // { title: 'Sub-item Arts 1' }, // Example for future
    ],
  },
];

const disclaimerText1 = "This page contains notes that I have meticulously organized for my own learning purposes. Since high school, I have consistently used Markdown or Notion for note-taking. The primary purpose in keeping these notes is to deepen my own understanding of the material and to have them available as references when needed. I would be very glad and honored if you find my notes helpful.";
const disclaimerText2 = "Moreover, given the nature of my note-taking approach, I cannot guarantee content accuracy equivalent to professional educators, even though I strive for it. Therefore, please carefully examine the content when using these notes. Additionally, I warmly welcome any suggestions and feedback from readers.";

export default function BlogsNotesPage() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({}); // Default to all closed

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-8 pt-16 pb-24">
      <div className="w-full max-w-6xl xl:max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-10 md:mb-16">
          Blogs & Notes
        </h1>
        {/* Background Board */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Left Column - Toggle List */}
            <div className="w-full md:w-2/3 flex flex-col gap-y-3">
              {categoriesData.map(category => (
                <div key={category.id}>
                  <div 
                    className="flex items-center cursor-pointer group"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="w-6 h-6 mr-3 flex items-center justify-center">
                      <Image
                        src="/imgs/arrow_right.svg"
                        alt="Toggle icon"
                        width={18} // Adjust size as needed
                        height={18} // Adjust size as needed
                        className={`transition-transform duration-200 ease-in-out group-hover:opacity-70 ${openCategories[category.id] ? 'rotate-90' : ''}`}
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-black group-hover:text-gray-700">
                      {category.title}
                    </h2>
                  </div>
                  {openCategories[category.id] && (
                    <div className="pl-10 mt-3 flex flex-col gap-y-2">
                      {category.subItems.map(item => (
                        <p key={item.title} className="text-xl text-black">
                          {item.title}
                        </p>
                      ))}
                      {category.subItems.length === 0 && (
                          <p className="text-lg text-gray-500 italic">No notes in this section yet.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right Column - Disclaimer */}
            <div className="w-full md:w-1/3 md:pt-1">
              <p className="text-sm text-gray-700 leading-relaxed">
                {disclaimerText1}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-4">
                {disclaimerText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 