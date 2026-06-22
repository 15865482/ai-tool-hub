import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";
import tools from "@/data/tools.json";
import categories from "@/data/categories.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} - AI 工具详情`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - AI Tool Hub`,
      description: tool.description,
      url: `https://aitoolhub.com/tool/${tool.slug}`,
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const category = categories.find((c) => c.slug === tool.category);
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">
          首页
        </Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-blue-600">
              {category.icon} {category.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-900">{tool.name}</span>
      </nav>

      {/* Tool Header */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
            {tool.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
              {tool.featured && (
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium">
                  ⭐ 推荐
                </span>
              )}
            </div>
            <p className="mt-3 text-lg text-gray-600 leading-relaxed">
              {tool.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="text-lg font-medium text-amber-500">
                ★ {tool.rating}
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">{tool.pricing}</span>
              <span className="text-gray-400">|</span>
              {category && (
                <Link
                  href={`/category/${category.slug}`}
                  className="text-blue-600 hover:text-blue-700"
                >
                  {category.icon} {category.name}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
          >
            访问官网 →
          </a>
          <Link
            href="/"
            className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>

      {/* Ad */}
      <AdBanner position="sidebar" className="my-10" />

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            相关推荐
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedTools.map((t) => (
              <Link
                key={t.slug}
                href={`/tool/${t.slug}`}
                className="block p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">{t.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
