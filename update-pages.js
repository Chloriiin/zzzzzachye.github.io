const fs = require('fs');
const path = require('path');

const blogsDir = path.join(__dirname, 'src', 'app', 'blogs');

// List of subdirectories with Notion embed pages
const notionPages = [
  'numerical',
  'pde',
  'ode',
  'statistics',
  'mathmodeling',
  'biology',
  'enzymes',
  'japanese1', // Already updated
  'japanese2', // Already updated
  'japanese3', // Already updated
];

const updateTemplate = (content) => {
  // Find the start of the floating nav bar
  const navBarStart = content.indexOf('{/* Translucent floating navigation bar */}');
  if (navBarStart === -1) return content; // No navbar found
  
  // Find the end of the navbar (start of the next comment)
  const nextComment = content.indexOf('{/*', navBarStart + 10);
  if (nextComment === -1) return content; // Couldn't find the end
  
  // Remove the navbar section
  const beforeNavbar = content.substring(0, navBarStart);
  const afterNavbar = content.substring(nextComment);
  
  // Also update the imports to remove Link
  const updatedContent = beforeNavbar
    .replace('import Link from \'next/link\';\n', '') + 
    afterNavbar;
  
  return updatedContent;
};

// Update each page
notionPages.forEach(page => {
  const pageFilePath = path.join(blogsDir, page, 'page.tsx');
  
  if (fs.existsSync(pageFilePath)) {
    const content = fs.readFileSync(pageFilePath, 'utf8');
    const updatedContent = updateTemplate(content);
    
    if (content !== updatedContent) {
      fs.writeFileSync(pageFilePath, updatedContent);
      console.log(`Updated ${page}/page.tsx`);
    } else {
      console.log(`No changes needed for ${page}/page.tsx`);
    }
  } else {
    console.log(`File not found: ${pageFilePath}`);
  }
}); 