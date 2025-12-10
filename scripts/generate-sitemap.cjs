/**
 * Sitemap Generator for SIGNAALMAKERS
 *
 * Generates sitemap.xml with all pages in 3 locales:
 * - nl-NL (default, no prefix)
 * - nl-BE (/nl-be/ prefix)
 * - en (/en/ prefix)
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://signaalmakers.nl';
const currentDate = new Date().toISOString().split('T')[0];

// Locale configuration
const locales = [
  { code: 'nl-NL', prefix: '' },
  { code: 'nl-BE', prefix: '/nl-be' },
  { code: 'en', prefix: '/en' },
];

// Page definitions with priority and changefreq
const pages = [
  // Main pages
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/diensten', priority: 0.9, changefreq: 'monthly' },
  { path: '/abonnementen', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/over-ons', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.9, changefreq: 'monthly' },
  { path: '/offerte', priority: 0.8, changefreq: 'monthly' },
  { path: '/sectoren', priority: 0.8, changefreq: 'monthly' },
  { path: '/sitemap', priority: 0.5, changefreq: 'monthly' },

  // Service pages
  { path: '/diensten/netwerkbekabeling', priority: 0.8, changefreq: 'monthly' },
  { path: '/diensten/audiokabels', priority: 0.7, changefreq: 'monthly' },
  { path: '/diensten/camera-bekabeling', priority: 0.7, changefreq: 'monthly' },
  { path: '/diensten/patchkasten', priority: 0.7, changefreq: 'monthly' },
  { path: '/diensten/certificeren', priority: 0.7, changefreq: 'monthly' },

  // Sector pages
  { path: '/sectoren/serverruimtes', priority: 0.7, changefreq: 'monthly' },
  { path: '/sectoren/kantoren', priority: 0.7, changefreq: 'monthly' },
  { path: '/sectoren/retail', priority: 0.7, changefreq: 'monthly' },
  { path: '/sectoren/magazijn', priority: 0.7, changefreq: 'monthly' },
  { path: '/sectoren/onderwijs', priority: 0.7, changefreq: 'monthly' },

  // Blog posts
  { path: '/blog/msp-bekabelingspartner', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/netwerkbekabeling-belangrijkste-laag', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/wifi-bekabeling-uitgelegd', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/bekabeling-moderniseren', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/kabelplan-essentieel', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/kabelmanagement-documentatie', priority: 0.6, changefreq: 'monthly' },
];

/**
 * Generate URL entry for sitemap
 */
function generateUrlEntry(path, locale, priority, changefreq) {
  const localePrefix = locale.prefix;
  const fullUrl = `${baseUrl}${localePrefix}${path}`;

  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

/**
 * Generate complete sitemap XML
 */
function generateSitemap() {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const footer = `</urlset>`;

  const urlEntries = [];

  // Generate URLs for each locale
  locales.forEach(locale => {
    const localeComment = `\n  <!-- ${locale.code === 'nl-NL' ? 'Nederlands (NL)' : locale.code === 'nl-BE' ? 'Nederlands (BE)' : 'English'} -->`;
    urlEntries.push(localeComment);

    pages.forEach(page => {
      const urlEntry = generateUrlEntry(
        page.path,
        locale,
        page.priority,
        page.changefreq
      );
      urlEntries.push(urlEntry);
    });
  });

  return `${header}\n${urlEntries.join('\n\n')}\n${footer}\n`;
}

/**
 * Write sitemap to file
 */
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

  fs.writeFileSync(outputPath, sitemap, 'utf8');

  console.log('✅ Sitemap generated successfully!');
  console.log(`📄 Location: ${outputPath}`);
  console.log(`📊 Total URLs: ${pages.length * locales.length} (${pages.length} pages × ${locales.length} locales)`);
  console.log('\n🌐 Locale breakdown:');
  console.log(`   - nl-NL (default): ${pages.length} URLs`);
  console.log(`   - nl-BE (/nl-be/): ${pages.length} URLs`);
  console.log(`   - en (/en/): ${pages.length} URLs`);
}

// Run the generator
writeSitemap();
