/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: [process.env.NEXT_PUBLIC_STRAPI_ASSETS_DOMAIN],
//   },
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_STRAPI_ASSETS_DOMAIN,
      },
    ],
  },
};
