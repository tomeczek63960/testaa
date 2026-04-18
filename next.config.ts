import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://app.storyblok.com;",
          },
        ],
      },
      
    ];
  },
  images: {
    domains: ['a.storyblok.com'],
  },
};

export default nextConfig;