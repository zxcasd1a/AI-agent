import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Common practice, good to have
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
