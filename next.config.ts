import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "media.geetsankalan.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "",
        pathname: "/**"
      }
      // Add any other image hosts you're using
      // {
      //   protocol: 'https',
      //   hostname: 'your-other-image-host.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
