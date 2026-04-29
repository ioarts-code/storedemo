/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.graphassets.com', // Hygraph CDN domain
      'graphcms.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.graphassets.com',
      },
    ],
  },
}

module.exports = nextConfig
