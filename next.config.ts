import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";


const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/ulichnaya_kupel_goodline" : "",
  assetPrefix: isProd ? "/ulichnaya_kupel_goodline/" : "",

  // next/image – нужно отключить оптимизацию при export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/* basePath: isProd ? "/akvahold" : "",
 assetPrefix: isProd ? "/akvahold/" :"",*/
