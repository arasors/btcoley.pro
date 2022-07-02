/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  env: {
    WSS_HOST: process.env.WSS_HOST,
    API_HOST: process.env.API_HOST,
  },
  experimental: { images: { allowFutureImage: true } }
}

module.exports = nextConfig
