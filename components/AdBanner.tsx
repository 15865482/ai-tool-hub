"use client";

import { useEffect, useRef } from "react";

interface AdBannerProps {
  position: "top" | "sidebar" | "bottom";
  className?: string;
}

// AdSense 广告位 slot ID（在 AdSense 后台创建广告单元后填入）
// 暂时使用 Auto Ads，不需要 slot ID
const AD_SLOT_MAP: Record<string, string> = {
  top: "",
  sidebar: "",
  bottom: "",
};

export default function AdBanner({ position, className = "" }: AdBannerProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // @ts-expect-error AdSense global
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet, ignore
    }
  }, []);

  const slot = AD_SLOT_MAP[position];

  if (!slot) {
    // 没有配置 slot 时显示占位（Auto Ads 会自动投放广告）
    return (
      <div
        className={`min-h-[90px] flex items-center justify-center rounded-xl bg-gray-50 border border-dashed border-gray-200 ${className}`}
        data-ad-position={position}
      >
        <p className="text-xs text-gray-400">广告位</p>
      </div>
    );
  }

  return (
    <div className={className} data-ad-position={position}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5093946559633174"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
