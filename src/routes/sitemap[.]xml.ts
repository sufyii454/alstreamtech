import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry { path: string; changefreq?: string; priority?: string; }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/why-us", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/portfolio", changefreq: "monthly", priority: "0.7" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.7" },
          { path: "/ai-solutions", changefreq: "monthly", priority: "0.8" },
          { path: "/industries", changefreq: "monthly", priority: "0.7" },
          { path: "/technologies", changefreq: "monthly", priority: "0.7" },
          { path: "/process", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.9" },
        ];
        const urls = entries.map(e =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n` +
          (e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>\n` : "") +
          (e.priority ? `    <priority>${e.priority}</priority>\n` : "") +
          `  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
