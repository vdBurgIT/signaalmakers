import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Read the built index.html
const distPath = join(process.cwd(), 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

console.log('📝 Creating 404.html for GitHub Pages SPA support...');

try {
  let indexHtml = readFileSync(indexPath, 'utf-8');

  // Add the redirect script before </head>
  const redirectScript = `
    <!-- SPA Redirect Script for GitHub Pages -->
    <script>
      // Store the actual path that was requested
      sessionStorage.redirect = location.pathname + location.search + location.hash;
    </script>
  `;

  indexHtml = indexHtml.replace('</head>', `${redirectScript}</head>`);

  // Write to 404.html
  writeFileSync(notFoundPath, indexHtml, 'utf-8');

  console.log('✅ 404.html created successfully!');
} catch (error) {
  console.error('❌ Error creating 404.html:', error);
  process.exit(1);
}
