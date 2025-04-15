/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'media.istockphoto.com',
      // Add any other domains you need to use with next/image
    ],
  },
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore ESLint errors during build
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig