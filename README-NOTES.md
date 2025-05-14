# Notes System Documentation

This README explains how to manage the notes system in this website.

## Directory Structure

Notes are organized using the following structure:

```
public/
  └── notes/
      └── [Category]/
          └── [Subitem]/
              └── index.html                (Main page for this note section)
              └── [Notion Export Folder]/   (Optional, for Notion exports)
                  └── [HTML Files]
                  └── [Images]
                  └── [Other Assets]
```

## Adding New Notes

### Option 1: Export from Notion (Recommended)

1. Export your Notion page as HTML
2. Place the exported folder in the appropriate category and subitem directory:
   - `/public/notes/[Category]/[Subitem]/[Notion Export Folder]/`

### Option 2: Create Custom HTML

1. Create an `index.html` file directly in the subitem directory:
   - `/public/notes/[Category]/[Subitem]/index.html`

## Adding New Categories or Subitems

### 1. Update the script configuration

Edit the `scripts/create-notes-structure.js` file to include your new category or subitem:

```js
const notesStructure = {
  'Mathematics': [
    'mathematical-statistics',
    'numerical-methods-to-differential-equation',
    'analytical-methods-to-partial-differential-equation-pde',
    'analytical-methods-to-ordinary-differential-equation-ode',
    'your-new-subitem' // Add your new subitem here
  ],
  'Your New Category': [  // Add your new category here
    'first-subitem',
    'second-subitem'
  ]
  // ...existing categories
};
```

### 2. Run the setup script

```bash
npm run setup-notes
```

This will create the necessary directories and placeholder files for your new notes.

## URL Structure

Notes are accessible via the following URL pattern:

```
/blogs/[category-slug]/[subitem-slug]
```

The slugs are generated from the directory names by:
1. Converting to lowercase
2. Replacing spaces with hyphens

For example:
- Directory: `public/notes/Mathematics/Mathematical Statistics/`
- URL: `/blogs/mathematics/mathematical-statistics`

## Troubleshooting

### Images Not Loading

- Make sure image paths in your HTML are relative to the note's directory
- The system will automatically fix relative image paths in the HTML

### Subpages Not Working

- If links to subpages within your notes don't work, make sure they use relative paths
- The system will handle navigation to subpages with an iframe approach

### SVG Rendering Issues

- SVG attributes are automatically converted from kebab-case to camelCase for React compatibility
- If you encounter SVG rendering issues, check that the SVG doesn't use unsupported attributes

## Notes System Implementation Details

The notes system is implemented using:

1. **Dynamic Routes**: Next.js dynamic routes handle URL patterns
2. **Static Generation**: `generateStaticParams()` builds all possible note URLs at build time
3. **Directory Mapping**: The system maps URL slugs to actual directory names (case-insensitive)
4. **Client-Side Navigation**: Internal links are handled with JavaScript to maintain navigation

For more advanced customization, see the implementation in:
- `src/app/blogs/[category]/[subitem]/page.tsx` 