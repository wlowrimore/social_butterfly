/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "via.placeholder.com",
      },
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
    ]
  }
}

module.exports = nextConfig
