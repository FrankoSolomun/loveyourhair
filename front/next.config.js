/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    scrollBehavior: {
      damping: 0.02,
    },
  },
  images: {
    domains: [
      "api.loveyourhair.hr",
    ],
  },
}

module.exports = nextConfig
