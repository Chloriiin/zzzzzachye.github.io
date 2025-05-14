const fs = require('fs');
const path = require('path');

// Define the directory structure
const notesStructure = {
  'Mathematics': [
    'mathematical-statistics',
    'numerical-methods-to-differential-equation',
    'analytical-methods-to-partial-differential-equation-pde',
    'analytical-methods-to-ordinary-differential-equation-ode'
  ],
  'Arts and language': [
    'literature',
    'visual-arts',
    'music-theory'
  ],
  'Biology: Life science': [
    'genetics',
    'microbiology',
    'ecology'
  ]
};

// Create a placeholder index.html file
const createPlaceholderHTML = (category, subitem) => `<!DOCTYPE html>
<html>
<head>
  <title>${subitem.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      color: #333;
      background-color: #f9f9f9;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1, h2 {
      color: #333;
      margin-bottom: 30px;
    }
    
    .placeholder {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      padding: 20px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${subitem.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
    <div class="placeholder">
      <h2>Placeholder Content</h2>
      <p>This is a placeholder for the ${subitem.replace(/-/g, ' ')} notes under ${category}.</p>
      <p>To add content, export your Notion pages as HTML and place them in this directory.</p>
    </div>
  </div>
</body>
</html>`;

// Main function to create directory structure
const createNotesStructure = () => {
  const publicDir = path.join(process.cwd(), 'public');
  const notesDir = path.join(publicDir, 'notes');
  
  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
    console.log('Created public directory');
  }
  
  // Create notes directory if it doesn't exist
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir);
    console.log('Created notes directory');
  }
  
  // Create category and subitem directories
  Object.entries(notesStructure).forEach(([category, subitems]) => {
    const categoryDir = path.join(notesDir, category);
    
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir);
      console.log(`Created category directory: ${category}`);
    }
    
    subitems.forEach(subitem => {
      const subitemDir = path.join(categoryDir, subitem);
      
      if (!fs.existsSync(subitemDir)) {
        fs.mkdirSync(subitemDir);
        console.log(`Created subitem directory: ${category}/${subitem}`);
        
        // Create placeholder index.html if it doesn't exist
        const indexPath = path.join(subitemDir, 'index.html');
        if (!fs.existsSync(indexPath)) {
          fs.writeFileSync(indexPath, createPlaceholderHTML(category, subitem));
          console.log(`Created placeholder index.html: ${category}/${subitem}/index.html`);
        }
      }
    });
  });
  
  console.log('Notes directory structure created successfully!');
};

// Run the script
createNotesStructure(); 