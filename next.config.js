/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
      "media.graphcms.com",
      "media.graphassets.com",
      "cdn.shopify.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/search/:path*",
        destination: "/directory/c/:path*",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "https://tbmpodcast.soplugged.com/",
        permanent: true,
      },
      {
        source: "/pro",
        destination: "https://studio.soplugged.com/",
        permanent: true,
      },
      {
        source: "/pluggedin",
        destination: "https://pluggedin.soplugged.com/",
        permanent: true,
      },
    ];
  },
};

module.exports = withSentryConfig(moduleExports);
