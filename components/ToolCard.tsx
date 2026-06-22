import Link from "next/link";

interface Tool {
  slug: string;
  name: string;
  description: string;
  url: string;
  category: string;
  rating: number;
  pricing: string;
  tags: string[];
  featured: boolean;
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
      {tool.featured && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
            ⭐ 推荐
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Icon placeholder */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold">
          {tool.name.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {tool.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-amber-500">★ {tool.rating}</span>
          <span className="text-xs text-gray-400">|</span>
          <span className="text-xs text-gray-500">{tool.pricing}</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tool.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-gray-50 text-xs text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Link
          href={`/tool/${tool.slug}`}
          className="flex-1 text-center px-4 py-2 rounded-lg bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          详情
        </Link>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          访问
        </a>
      </div>
    </div>
  );
}
