import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  serverExternalPackages: ["@sparticuz/chromium"],
  experimental: {
    agentUpgrade: "security",
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.jurispage.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "jurispage.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "jurisdigital.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
