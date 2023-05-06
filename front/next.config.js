/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    scrollBehavior: {
      damping: 0.02,
    },
  },
}

module.exports = nextConfig
