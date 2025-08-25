import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github.com', 'linkedin.com'],
  },
};

export default nextConfig;
