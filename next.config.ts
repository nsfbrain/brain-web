import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Renamed from "Past Projects"; keeps old links and Google's indexed URL working.
      {
        source: "/research/past-projects",
        destination: "/research/example-projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
