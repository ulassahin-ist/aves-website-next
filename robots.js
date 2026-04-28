// src/app/robots.js
// Next.js App Router robots.txt generator — place at src/app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://www.aveselektronik.com/sitemap.xml",
    host: "https://www.aveselektronik.com",
  };
}
