// generate-sitemap.mjs
import fs from 'fs/promises';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const HOSTNAME = 'https://studysprint-official.co.za';

function getToday() {
  return new Date().toISOString().split('T')[0];
}

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: getToday() },
  { url: '/about', changefreq: 'monthly', priority: 0.8, lastmod: getToday() },
  { url: '/contact', changefreq: 'monthly', priority: 0.8, lastmod: getToday() },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5, lastmod: getToday() },
  { url: '/blog', changefreq: 'weekly', priority: 0.9, lastmod: getToday() },
  { url: '/blog/best-study-apps-2026', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/bursaries-south-africa', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/coursera-vs-udemy', changefreq: 'monthly', priority: 0.7, lastmod: '2025-12-13' },
  { url: '/blog/study-effectively-guide', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/ai-tools-students', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/productivity-hacks', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/time-management-methods', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/online-learning-success', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/exam-preparation-strategies', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
  { url: '/blog/free-resources-students', changefreq: 'monthly', priority: 0.7, lastmod: getToday() },
];

async function generateSitemap() {
  try {
    console.log(`Generating sitemap for ${HOSTNAME} (${pages.length} URLs)...`);

    const stream = new SitemapStream({ hostname: HOSTNAME });

    const xml = await streamToPromise(Readable.from(pages).pipe(stream));

    // Write to public/static/sitemap.xml (your live path)
    const outputPath = path.join(__dirname, 'public', 'static', 'sitemap.xml');
    await fs.writeFile(outputPath, xml);

    console.log(`✅ Sitemap saved to ${outputPath}`);
  } catch (err) {
    console.error('Generation failed:', err);
    process.exit(1);
  }
}

generateSitemap();