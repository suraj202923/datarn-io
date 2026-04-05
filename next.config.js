/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ keep this (Cloudflare doesn’t support Next image optimization)
  },
  trailingSlash: true,

};

module.exports = nextConfig;