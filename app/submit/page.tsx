"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">提交成功！</h1>
        <p className="text-lg text-gray-600 mb-8">
          感谢你的提交，我们会在 1-3 个工作日内审核并上线。
        </p>
        <a
          href="/"
          className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          返回首页
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">提交 AI 工具</h1>
        <p className="mt-3 text-gray-500">
          推荐你发现的好用 AI 工具，帮助更多人提升效率
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            工具名称 *
          </label>
          <input
            type="text"
            required
            placeholder="例如：ChatGPT"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            官网链接 *
          </label>
          <input
            type="url"
            required
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            工具分类 *
          </label>
          <select
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          >
            <option value="">请选择分类</option>
            <option value="chatbot">🤖 AI 对话</option>
            <option value="image">🎨 AI 绘画</option>
            <option value="writing">✍️ AI 写作</option>
            <option value="video">🎬 AI 视频</option>
            <option value="coding">💻 AI 编程</option>
            <option value="music">🎵 AI 音乐</option>
            <option value="productivity">📊 效率工具</option>
            <option value="design">🎯 AI 设计</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            工具简介 *
          </label>
          <textarea
            required
            rows={4}
            placeholder="简要描述这个工具的功能和特点..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            价格信息
          </label>
          <input
            type="text"
            placeholder="例如：免费 / Pro $10/月"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            你的邮箱
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          />
          <p className="mt-1 text-xs text-gray-400">仅用于审核通知，不会公开</p>
        </div>

        {/* Pricing info */}
        <div className="bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-2">💎 付费优先收录</h3>
          <p className="text-sm text-blue-700 mb-3">
            想要更快上线和更好的展示位？选择付费收录方案：
          </p>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• 基础收录：免费（1-3 工作日审核）</li>
            <li>• 优先收录：$10（24 小时内上线 + 推荐标签）</li>
            <li>• 首页置顶：$50/月（首页 Banner 展示）</li>
          </ul>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          提交工具
        </button>
      </form>
    </div>
  );
}
