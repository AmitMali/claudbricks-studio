import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16: React Compiler is now a top-level property
  reactCompiler: true,

  // cacheComponents (formerly PPR) is also a top-level property now
  cacheComponents: true,

  experimental: {
    // We keep this here as it's a newer performance feature for dev
    turbopackFileSystemCacheForDev: true,
  },
  turbopack: {
    root: ".",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
