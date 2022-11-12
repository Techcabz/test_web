/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB: process.env.MONGODB_URI,
  },
}

module.exports = nextConfig
