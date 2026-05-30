import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack ko bataya ke hamara webpack config valid hai
  turbopack: {}, 

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('jsdom');
    }
    return config;
  },
};

export default nextConfig;