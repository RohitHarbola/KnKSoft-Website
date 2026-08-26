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
};

export default nextConfig;