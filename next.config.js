/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/listings",
        destination: "https://dark-pig-sock.cyclic.app/",
      },
    ];
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
