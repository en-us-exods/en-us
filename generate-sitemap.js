import fs from 'fs';

const baseUrl = 'https://exodus.com';

const pages = [
  {
    url: '/',
    lastMod: new Date().toISOString().split('T')[0],
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    url: '/features',
    lastMod: new Date().toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    url: '/security',
    lastMod: new Date().toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'monthly'
  },
  {
    url: '/ecosystem',
    lastMod: new Date().toISOString().split('T')[0],
    priority: '0.7',
    changefreq: 'monthly'
  },
  {
    url: '/download',
    lastMod: new Date().toISOString().split('T')[0],
    priority: '0.9',
    changefreq: 'weekly'
  }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>
`;

fs.writeFileSync('./dist/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');