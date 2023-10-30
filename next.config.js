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
      {
        protocol: 'https',
        hostname: "scontent-atl3-2.xx.fbcdn.net",
      },
    ]
  }
}

module.exports = nextConfig
