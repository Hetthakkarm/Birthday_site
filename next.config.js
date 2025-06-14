// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Brithday_site',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
