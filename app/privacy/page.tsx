import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "AI Tool Hub 隐私政策",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">隐私政策</h1>

      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          <strong>最后更新日期：</strong>2025年1月1日
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 信息收集</h2>
          <p>
            AI Tool Hub（以下简称"本站"）致力于保护用户隐私。我们可能收集以下信息：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>访问日志（IP 地址、浏览器类型、访问时间）</li>
            <li>Cookie 和类似技术收集的使用数据</li>
            <li>用户主动提交的信息（如通过提交工具表单）</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 信息使用</h2>
          <p>我们收集的信息用于：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>提供和维护本站服务</li>
            <li>改善用户体验</li>
            <li>分析网站流量和使用模式</li>
            <li>防止欺诈和滥用</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 广告服务</h2>
          <p>
            本站使用 Google AdSense 展示广告。Google AdSense 可能使用 Cookie
            和网络信标来收集信息，用于提供与您相关的广告。您可以通过访问 Google
            的广告设置页面来选择退出个性化广告。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 第三方链接</h2>
          <p>
            本站包含指向第三方网站的链接。我们不对这些网站的隐私做法负责。
            我们建议您在离开本站时阅读每个网站的隐私政策。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookie</h2>
          <p>
            本站使用 Cookie 来提升用户体验。您可以在浏览器设置中禁用 Cookie，
            但这可能影响某些功能的正常使用。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 数据安全</h2>
          <p>
            我们采取合理措施保护您的个人信息，但没有任何传输或存储方法是 100%
            安全的。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 政策更新</h2>
          <p>
            我们可能会不时更新本隐私政策。更新后的政策将在本页面发布，
            并注明最新更新日期。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 联系我们</h2>
          <p>
            如果您对本隐私政策有任何疑问，请通过以下方式联系我们：
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>邮箱：hello@aitoolhub.com</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
