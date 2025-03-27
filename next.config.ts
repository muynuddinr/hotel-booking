import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    // Disable ESLint during builds (not recommended for production)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds even with type errors
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
