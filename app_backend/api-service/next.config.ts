import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async headers() {

    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: `http://localhost:${process.env.NEXT_PUBLIC_CLIENT_PORT}`, // Or specify a specific origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];

  },

};

export default nextConfig;
