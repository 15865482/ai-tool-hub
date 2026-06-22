import Link from "next/link";

interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/category/${cat.slug}`}
          className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
        >
          <span className="text-4xl">{cat.icon}</span>
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {cat.name}
            </h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              {cat.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
