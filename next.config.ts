import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Skip type checking during build if needed
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build if needed
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;