import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解 AI Tool Hub — 你的 AI 工具导航站",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">关于 AI Tool Hub</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 我们的使命</h2>
          <p className="text-gray-600 leading-relaxed">
            AI Tool Hub 致力于帮助每个人发现最好用的 AI 工具。在 AI 技术飞速发展的今天，
            每天都有新的 AI 工具诞生，我们帮你筛选、评测、推荐最值得使用的工具，
            让你不用花时间一个个试用，直接找到最适合自己的。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 我们的数据</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600">30+</div>
              <div className="text-sm text-gray-600 mt-1">收录工具</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-600">8</div>
              <div className="text-sm text-gray-600 mt-1">工具分类</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-600">每日</div>
              <div className="text-sm text-gray-600 mt-1">更新维护</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-600">免费</div>
              <div className="text-sm text-gray-600 mt-1">使用</div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 我们如何盈利</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>广告收入</strong>：页面展示 Google AdSense 广告</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>联盟佣金</strong>：推荐用户注册 AI 工具获得佣金</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>付费收录</strong>：AI 工具方可付费优先展示</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>赞助位</strong>：首页置顶推荐位</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🤝 联系我们</h2>
          <p className="text-gray-600 leading-relaxed">
            如果你有任何问题、建议或合作意向，欢迎联系我们：
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>📧 邮箱：hello@aitoolhub.com</li>
            <li>🐦 Twitter：@aitoolhub</li>
            <li>💬 GitHub：github.com/aitoolhub</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
