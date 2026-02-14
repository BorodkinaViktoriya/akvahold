import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,

  // basePath и assetPrefix только в проде (на GitHub Pages)
  basePath: isProd ? "/akvahold" : "",
  assetPrefix: isProd ? "/akvahold/" : undefined,

  // если используешь next/image – нужно отключить оптимизацию при export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
