import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker containers
  output: 'standalone',

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
