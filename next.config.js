/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

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
        source: "/black-businesses",
        destination: "/black-businesses/all",
        permanent: true,
      },
      {
        source: "/search",
        destination: "/black-businesses/all",
        permanent: true,
      },
      {
        source: "/search/all",
        destination: "/black-businesses/all",
        permanent: true,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(withSentryConfig(moduleExports));
