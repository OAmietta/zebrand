/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['zebrands.mx'],
  },
}

module.exports = nextConfig
