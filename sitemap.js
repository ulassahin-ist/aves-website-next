// src/app/sitemap.js
// Next.js App Router sitemap — place at src/app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://www.aveselektronik.com";

  const routes = [
    { url: baseUrl, priority: 1.0, changeFrequency: "monthly" },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "yearly" },
    { url: `${baseUrl}/products`, priority: 0.9, changeFrequency: "monthly" },
    {
      url: `${baseUrl}/products/rc210`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/rc264`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/rcp8`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/rc1`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/rc1s`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/rc206`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/android`,
      priority: 0.7,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/products/c4128`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { url: `${baseUrl}/software`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/references`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/download`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
