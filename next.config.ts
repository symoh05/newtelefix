import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev-only: accept HMR WebSocket from LAN IPs
  allowedDevOrigins: ['10.*', '192.168.*', 'localhost', '127.0.0.1'],

  // Allow remote images (only needed if you use next/image with external URLs)
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // Optional: hide the "X-Powered-By: Next.js" header
  poweredByHeader: false,
};

export default nextConfig;