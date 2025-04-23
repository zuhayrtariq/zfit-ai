import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com", protocol: "https" },
      { hostname: "randomuser.me", protocol: "https" },
    ],
  },
  /* config options here */
};

export default nextConfig;
