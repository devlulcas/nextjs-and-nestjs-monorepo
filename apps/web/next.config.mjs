const API_URL = process.env.API_URL || 'http://localhost:2309/api';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: API_URL + '/:path*',
      },
    ];
  },
};

export default nextConfig;
