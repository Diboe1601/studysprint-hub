// generate-sitemap.cjs
const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const HOSTNAME = "https://studysprint-official.co.za";

// Helper to get current date in ISO format (for lastmod)
function getToday() {
  return new Date().toISOString().split("T")[0];
}

// All known pages & blog posts (update this list when you add new content)
const pages = [
  // Main pages
  { url: "/", changefreq: "daily", priority: 1.0, lastmod: getToday() },
  { url: "/about", changefreq: "monthly", priority: 0.8, lastmod: getToday() },
  { url: "/contact", changefreq: "monthly", priority: 0.8, lastmod: getToday() },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.5, lastmod: getToday() },

  // Blog index & category
  { url: "/blog", changefreq: "weekly", priority: 0.9, lastmod: getToday() },

  // Blog posts (add real lastmod dates when you know them)
  { url: "/blog/best-study-apps-2026", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/bursaries-south-africa", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/coursera-vs-udemy", changefreq: "monthly", priority: 0.7, lastmod: "2025-12-13" },
  { url: "/blog/study-effectively-guide", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/ai-tools-students", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/productivity-hacks", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/time-management-methods", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/online-learning-success", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/exam-preparation-strategies", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
  { url: "/blog/free-resources-students", changefreq: "monthly", priority: 0.7, lastmod: getToday() },
];

async function generateSitemap() {
  try {
    console.log(`Generating sitemap for ${HOSTNAME} with ${pages.length} URLs...`);

    const stream = new SitemapStream({ hostname: HOSTNAME });

    // Pipe the links into the stream
    const xmlString = await streamToPromise(
      Readable.from(pages.map(link => {
        // Normalize URL (ensure it starts with /)
        const url = link.url.startsWith("/") ? link.url : `/${link.url}`;
        return { ...link, url };
      })).pipe(stream)
    ).then(data => data.toString());

    // Write to public/sitemap.xml (Vite serves this at /sitemap.xml)
    const outputPath = path.resolve(__dirname, "public", "sitemap.xml");
    fs.writeFileSync(outputPath, xmlString);

    console.log(`✅ Sitemap successfully generated at: ${outputPath}`);
    console.log(`Total URLs included: ${pages.length}`);
    console.log("Next step: run 'npm run generate-sitemap' before deploying");
  } catch (error) {
    console.error("❌ Failed to generate sitemap:");
    console.error(error);
    process.exit(1);
  }
}

// Run the function
generateSitemap();