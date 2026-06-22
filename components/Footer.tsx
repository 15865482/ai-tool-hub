import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Tool Hub
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              发现最好用的 AI 工具，提升你的工作效率和创造力。
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">热门分类</h3>
            <ul className="space-y-2">
              <li><Link href="/category/chatbot" className="text-sm text-gray-500 hover:text-blue-600">AI 对话</Link></li>
              <li><Link href="/category/image" className="text-sm text-gray-500 hover:text-blue-600">AI 绘画</Link></li>
              <li><Link href="/category/coding" className="text-sm text-gray-500 hover:text-blue-600">AI 编程</Link></li>
              <li><Link href="/category/video" className="text-sm text-gray-500 hover:text-blue-600">AI 视频</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-blue-600">关于我们</Link></li>
              <li><Link href="/submit" className="text-sm text-gray-500 hover:text-blue-600">提交工具</Link></li>
              <li><Link href="/sitemap.xml" className="text-sm text-gray-500 hover:text-blue-600">网站地图</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">📧 hello@aitoolhub.com</li>
              <li className="text-sm text-gray-500">🐦 Twitter: @aitoolhub</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AI Tool Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
