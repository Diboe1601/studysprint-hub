const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "weekly", priority: 0.9 },
];

const stream = new SitemapStream({
  hostname: "https://studysprint-official.vercel.app",
});

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated at /public/sitemap.xml");
});
