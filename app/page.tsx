import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import CategoryGrid from "@/components/CategoryGrid";
import AdBanner from "@/components/AdBanner";
import tools from "@/data/tools.json";
import categories from "@/data/categories.json";

export default function Home() {
  const featuredTools = tools.filter((t) => t.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                发现最好用的
              </span>
              <br />
              <span className="text-gray-900">AI 工具</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              精选 {tools.length}+ 款热门 AI 工具，涵盖对话、绘画、编程、视频、音乐等领域，
              <br className="hidden sm:block" />
              帮你找到最适合的 AI 工具，提升工作效率 10 倍。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#tools"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                浏览全部工具
              </Link>
              <Link
                href="/submit"
                className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                提交你的工具
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3" />
      </section>

      {/* Top Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <AdBanner position="top" />
      </div>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">按分类浏览</h2>
          <p className="mt-3 text-gray-500">找到你需要的 AI 工具类型</p>
        </div>
        <CategoryGrid categories={categories} />
      </section>

      {/* Featured Tools */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">🔥 热门推荐</h2>
            <p className="mt-2 text-gray-500">精选最受欢迎的 AI 工具</p>
          </div>
          <Link
            href="/category/chatbot"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* All Tools by Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">📋 全部工具</h2>
          <p className="mt-3 text-gray-500">按分类查看所有收录的 AI 工具</p>
        </div>
        {categories.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat.slug);
          if (catTools.length === 0) return null;
          return (
            <div key={cat.slug} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
                <span className="text-sm text-gray-400">({catTools.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl py-16 px-8">
          <h2 className="text-3xl font-bold text-white">有好用的 AI 工具推荐？</h2>
          <p className="mt-4 text-blue-100 text-lg">
            提交你发现的 AI 工具，帮助更多人发现好工具
          </p>
          <Link
            href="/submit"
            className="mt-8 inline-block px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
          >
            立即提交
          </Link>
        </div>
      </section>
    </div>
  );
}
