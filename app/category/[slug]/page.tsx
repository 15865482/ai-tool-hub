import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ToolCard from "@/components/ToolCard";
import AdBanner from "@/components/AdBanner";
import tools from "@/data/tools.json";
import categories from "@/data/categories.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.icon} ${category.name} - AI 工具推荐`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryTools = tools.filter((t) => t.category === slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-5xl">{category.icon}</span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
          {category.name}
        </h1>
        <p className="mt-3 text-lg text-gray-500">{category.description}</p>
        <p className="mt-2 text-sm text-gray-400">共收录 {categoryTools.length} 款工具</p>
      </div>

      {/* Ad */}
      <AdBanner position="top" className="mb-10" />

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {categoryTools.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">该分类暂无工具，敬请期待</p>
        </div>
      )}
    </div>
  );
}
