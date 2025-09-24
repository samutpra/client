import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker containers
  output: 'standalone',

  // Disable ESLint during build for Docker
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors during build for Docker
  typescript: {
    ignoreBuildErrors: true,
  },

  // Configure API routes for health checks
  async rewrites() {
    return [
      {
        source: '/api/health',
        destination: '/api/health'
      }
    ];
  }
};

export default nextConfig;
