import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
