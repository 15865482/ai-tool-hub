import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Tool Hub - 发现最好用的 AI 工具",
    template: "%s | AI Tool Hub",
  },
  description:
    "AI 工具导航站，精选 30+ 热门 AI 工具，涵盖 AI 对话、绘画、编程、视频、音乐等领域，帮你找到最适合的 AI 工具。",
  keywords: ["AI工具", "人工智能", "ChatGPT", "Midjourney", "AI导航", "AI工具推荐"],
  authors: [{ name: "AI Tool Hub" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "AI Tool Hub",
    title: "AI Tool Hub - 发现最好用的 AI 工具",
    description: "精选 30+ 热门 AI 工具，帮你找到最适合的 AI 工具。",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tool Hub - 发现最好用的 AI 工具",
    description: "精选 30+ 热门 AI 工具，帮你找到最适合的 AI 工具。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5093946559633174"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
