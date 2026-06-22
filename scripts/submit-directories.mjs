#!/usr/bin/env node

/**
 * 批量提交到目录站脚本
 *
 * 生成各平台的提交信息，手动或半自动提交
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SITE = {
  name: "AI Tool Hub",
  url: "https://aitoolhub.com",
  tagline: "发现最好用的 AI 工具，提升效率 10 倍",
  description: "中文 AI 工具导航站，精选 30+ 款热门 AI 工具，涵盖对话、绘画、编程、视频、音乐等领域。",
  category: "AI / Productivity / Developer Tools",
  email: "hello@aitoolhub.com",
};

const directories = [
  {
    name: "ProductHunt",
    url: "https://www.producthunt.com/posts/new",
    tips: "周二/周三 12:01 PST 发布效果最佳",
  },
  {
    name: "IndieHackers",
    url: "https://www.indiehackers.com/post",
    tips: "写一篇介绍帖，分享你的构建过程",
  },
  {
    name: "AlternativeTo",
    url: "https://alternativeto.net/contribute/new-app/",
    tips: "填写应用信息，标记为免费",
  },
  {
    name: "BetaList",
    url: "https://betalist.com/submit",
    tips: "提交后等待审核，通常 1-2 周",
  },
  {
    name: "There's An AI For That",
    url: "https://theresanaiforthat.com/submit/",
    tips: "AI 工具专用目录，必提交",
  },
  {
    name: "Futurepedia",
    url: "https://futurepedia.io/submit-tool",
    tips: "AI 工具目录，流量大",
  },
  {
    name: "ToolPilot",
    url: "https://toolpilot.ai/submit",
    tips: "AI 工具聚合站",
  },
  {
    name: "V2EX",
    url: "https://www.v2ex.com",
    tips: "发帖到 /go/share，中文开发者社区",
  },
  {
    name: "少数派",
    url: "https://sspai.com",
    tips: "投稿到 Matrix 社区",
  },
  {
    name: "即刻",
    url: "https://web.okjike.com",
    tips: "发帖并加入相关话题",
  },
  {
    name: "GitHub",
    url: "https://github.com/new",
    tips: "创建开源仓库，提交到 Awesome 列表",
  },
];

console.log("🚀 目录站批量提交脚本\n");
console.log(`📦 项目: ${SITE.name}`);
console.log(`🔗 网址: ${SITE.url}\n`);

const outputDir = join(ROOT, "submit-assets");
mkdirSync(outputDir, { recursive: true });

// 生成通用提交信息
const generalInfo = `# ${SITE.name} - 目录站提交信息

## 基本信息
- 名称: ${SITE.name}
- 网址: ${SITE.url}
- 标语: ${SITE.tagline}
- 描述: ${SITE.description}
- 分类: ${SITE.category}
- 邮箱: ${SITE.email}

## 提交清单

${directories.map((d, i) => `${i + 1}. [ ] **${d.name}** - ${d.url}\n   提示: ${d.tips}`).join("\n")}

## 提交顺序建议
1. 先提交 AI 专用目录（There's An AI For That, Futurepedia, ToolPilot）
2. 再提交综合目录（ProductHunt, BetaList, AlternativeTo）
3. 最后提交中文社区（V2EX, 少数派, 即刻）
4. 每天提交 2-3 个，避免被标记为 spam

## 注意事项
- 每个平台的描述稍作调整，避免完全重复
- ProductHunt 建议周二/周三上午发布
- 准备 3-5 张产品截图（1270x760）
- 回复每条评论，增加曝光
`;

writeFileSync(join(outputDir, "directory-submit-guide.md"), generalInfo);

console.log("✅ 提交指南已生成:");
console.log(`   ${join(outputDir, "directory-submit-guide.md")}`);
console.log(`\n📋 共 ${directories.length} 个平台待提交\n`);

directories.forEach((d, i) => {
  console.log(`   ${i + 1}. ${d.name}`);
  console.log(`      ${d.url}`);
  console.log(`      💡 ${d.tips}\n`);
});
