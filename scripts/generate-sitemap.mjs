#!/usr/bin/env node

/**
 * Sitemap 生成脚本
 *
 * 自动生成 sitemap.xml，基于 data/tools.json 和 data/categories.json
 * 注意：Next.js 的 app/sitemap.ts 已自动处理，此脚本作为备用
 */

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const BASE_URL = "https://aitoolhub.com";

const tools = JSON.parse(readFileSync(join(ROOT, "data/tools.json"), "utf-8"));
const categories = JSON.parse(readFileSync(join(ROOT, "data/categories.json"), "utf-8"));

const today = new Date().toISOString().split("T")[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Static Pages -->
  <url>
    <loc>${BASE_URL}/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${BASE_URL}/submit</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Categories -->
`;

categories.forEach((cat) => {
  xml += `  <url>
    <loc>${BASE_URL}/category/${cat.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

xml += `
  <!-- Tools -->
`;

tools.forEach((tool) => {
  xml += `  <url>
    <loc>${BASE_URL}/tool/${tool.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

xml += `</urlset>`;

writeFileSync(join(ROOT, "public/sitemap.xml"), xml);

console.log("✅ Sitemap 已生成:");
console.log(`   ${join(ROOT, "public/sitemap.xml")}`);
console.log(`   共 ${2 + categories.length + tools.length} 个 URL`);
