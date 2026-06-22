interface AdBannerProps {
  position: "top" | "sidebar" | "bottom";
  className?: string;
}

export default function AdBanner({ position, className = "" }: AdBannerProps) {
  const heightMap = {
    top: "h-24",
    sidebar: "h-64",
    bottom: "h-32",
  };

  return (
    <div
      className={`${heightMap[position]} flex items-center justify-center rounded-xl bg-gray-50 border border-dashed border-gray-200 ${className}`}
      data-ad-position={position}
    >
      {/* Google AdSense 代码将插入此处 */}
      <div className="text-center">
        <p className="text-xs text-gray-400">广告位</p>
        <p className="text-[10px] text-gray-300 mt-1">{position} banner</p>
      </div>
    </div>
  );
}
