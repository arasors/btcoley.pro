/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WSS_HOST: process.env.WSS_HOST
  }
}

module.exports = nextConfig
