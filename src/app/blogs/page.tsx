'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Simple slugify function (can be replaced with a more robust library if needed)
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

interface SubItem {
  title: string;
  slug: string;
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
      { title: 'Numerical methods to differential equation', slug: 'numerical' },
      { title: 'Analytical methods to partial differential equation (PDE)', slug: 'pde' },
      { title: 'Analytical methods to ordinary differential equation (ODE)', slug: 'ode' },
      { title: 'Mathematical statistics', slug: 'statistics' },
      { title: 'Numerical Methods for Math Modeling', slug: 'mathmodeling' },
    ],
  },
  {
    id: 'biology',
    title: 'Biology/ Life science',
    subItems: [
      { title: 'Intro to modern biology II', slug: 'biology' },
      { title: 'Enzymatic kinetics', slug: 'enzymes' },
    ],
  },
  {
    id: 'arts',
    title: 'Arts and language',
    subItems: [
      { title: 'Elementary Japanese (Genki I Note Unit 1-5)', slug: 'japanese1' },
      { title: 'Elementary Japanese (Genki I Note Unit 6-10)', slug: 'japanese2' },
      { title: 'Genki Note Unit 11-15', slug: 'japanese3' },
    ],
  },
];

const disclaimerText1 = "This page contains notes that I have meticulously organized for my own learning purposes. Since high school, I have consistently used Markdown or Notion for note-taking. The primary purpose in keeping these notes is to deepen my own understanding of the material and to have them available as references when needed. I would be very glad and honored if you find my notes helpful.";
const disclaimerText2 = "Moreover, given the nature of my note-taking approach, I cannot guarantee content accuracy equivalent to professional educators, even though I strive for it. Therefore, please carefully examine the content when using these notes. Additionally, I warmly welcome any suggestions and feedback from readers.";

export default function BlogsNotesPage() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({}); // Default to closed

  // Animation state
  const initialStyle = { opacity: 0, transform: 'translateY(20px)' };
  const finalStyle = { opacity: 1, transform: 'translateY(0px)' };
  const transitionClasses = 'transition-all duration-700 ease-out';

  const [titleStyle, setTitleStyle] = useState(initialStyle);
  const [boardStyle, setBoardStyle] = useState(initialStyle);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setTitleStyle(finalStyle), 100), // Title appears first
      setTimeout(() => setBoardStyle(finalStyle), 300), // Board appears second
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-8 pt-16 pb-24">
      <div className="w-full max-w-6xl xl:max-w-7xl">
        <h1 
          className={`text-5xl md:text-6xl font-bold text-black mb-10 md:mb-16 ${transitionClasses}`}
          style={titleStyle}
        >
          Blogs & Notes
        </h1>
        {/* Background board */}
        <div 
          className={`bg-gray-50 rounded-lg p-6 md:p-8 ${transitionClasses}`}
          style={boardStyle}
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Left Column - Toggle List */}
            <div className="w-full md:w-2/3 flex flex-col gap-y-3">
              {categoriesData.map(category => (
                <div key={category.id}>
                  <div 
                    className="flex items-center cursor-pointer group"
                    onClick={() => toggleCategory(category.id)}
                  >
                    {/* Custom SVG Icon */}
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 48 48" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={`mr-2 transition-transform duration-200 ease-in-out ${openCategories[category.id] ? 'rotate-90' : 'rotate-0'}`}
                    >
                      <path d="M18 36L30 24L18 12" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 className="text-3xl font-bold text-black group-hover:text-gray-700">
                      {category.title}
                    </h2>
                  </div>
                  {openCategories[category.id] && (
                    <div className="pl-10 mt-3 flex flex-col gap-y-2">
                      {category.subItems.map(item => {
                        // For mathematics, biology and arts categories, use direct embed
                        const isDirectEmbed = category.id === 'mathematics' || category.id === 'biology' || category.id === 'arts';
                        const href = isDirectEmbed ? 
                          `/blogs/${item.slug}` : 
                          `/blogs/${category.id}/${item.slug}`;
                          
                        return (
                          <Link 
                            key={item.slug} 
                            href={href}
                            className="text-xl text-black hover:text-blue-600 transition-colors"
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                      {category.subItems.length === 0 && (
                          <p className="text-lg text-gray-500 italic">No notes in this section yet.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Right Column - Disclaimer */}
            <div className="w-full md:w-1/3 md:pt-2">
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