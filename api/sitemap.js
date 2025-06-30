// api/sitemap.js

export default async function handler(req, res) {
  const sheetUrl = 'https://opensheet.elk.sh/1AwQWWJTAuf__DsRtL2Ma3BeP5xUh_5N15k5MDki-aUE/Sheet1';
const domain = 'https://dm-02.vercel.app/'; // Replace this

  const response = await fetch(sheetUrl);
  const data = await response.json();

  const urls = data.map((item) => {
    const id = item.code_template?.replace(/\s+/g, '-').toLowerCase();
    return `
    <url>
      <loc>${domain}/blogpage?id=${encodeURIComponent(id)}</loc>
      <lastmod>${item.robottxt_modify_date || item.robottxt_publish_date}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${domain}/</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${urls.join('\n')}
  </urlset>`;

  res.setHeader('Cache-Control', 's-maxage=43200, stale-while-revalidate'); // Cache for 12 hrs
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap.trim());
}
