#!/usr/bin/env node

/**
 * ProductHunt 提交脚本
 *
 * 使用方法：
 * 1. 在 ProductHunt 创建 Maker 账号
 * 2. 获取 API Token: https://www.producthunt.com/v2/oauth/applications
 * 3. 设置环境变量: export PH_TOKEN=your_token
 * 4. 运行: node scripts/submit-producthunt.mjs
 *
 * 注意：ProductHunt API 需要 OAuth2 认证，此脚本生成提交所需的素材
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

console.log("🚀 ProductHunt 提交准备脚本\n");

// 生成 ProductHunt 提交信息
const phContent = {
  name: "AI Tool Hub",
  tagline: "发现最好用的 AI 工具，提升效率 10 倍",
  description: `AI Tool Hub 是一个中文 AI 工具导航站，精选 30+ 款热门 AI 工具。

🎯 核心功能：
• 按分类浏览：AI 对话、绘画、编程、视频、音乐等 8 大分类
• 工具评测：每个工具都有详细评分和价格信息
• 搜索发现：快速找到你需要的 AI 工具
• 免费使用：所有内容完全免费

🔥 为什么选择 AI Tool Hub？
AI 工具层出不穷，一个个试用太浪费时间。我们帮你筛选、评测、推荐最值得使用的工具，让你直接找到最适合自己的。`,
  website: "https://aitoolhub.com",
  topics: ["Artificial Intelligence", "Productivity", "Developer Tools"],
  makers: ["Your Name"],
};

const outputDir = join(ROOT, "submit-assets");
mkdirSync(outputDir, { recursive: true });

writeFileSync(
  join(outputDir, "producthunt.json"),
  JSON.stringify(phContent, null, 2)
);

console.log("✅ ProductHunt 提交信息已生成:");
console.log(`   ${join(outputDir, "producthunt.json")}`);
console.log("\n📋 下一步:");
console.log("   1. 访问 https://www.producthunt.com/posts/new");
console.log('   2. 填入上方 JSON 中的信息');
console.log("   3. 上传产品截图（建议 1270x760）");
console.log("   4. 设置发布时间（建议周二或周三上午 12:01 PST）");
console.log("   5. 发布！\n");
