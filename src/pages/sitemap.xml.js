// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
  const sheetUrl = 'https://opensheet.elk.sh/1AwQWWJTAuf__DsRtL2Ma3BeP5xUh_5N15k5MDki-aUE/Sheet1';
  const response = await fetch(sheetUrl);
  const data = await response.json();

  const domain = 'https://dm-02.vercel.app/'; // change this to your actual deployed domain

  const urls = data.map((item) => {
    const id = item.code_template?.replace(/\s+/g, '-').toLowerCase();
    return `
      <url>
        <loc>${domain}/blogpage?id=${encodeURIComponent(id)}</loc>
        <lastmod>${item.robottxt_modify_date || item.robottxt_publish_date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${domain}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${urls}
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} }; // will never be used
}

export default function Sitemap() {
  return null;
}
