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
        source: "/search",
        destination: "/search/all",
        permanent: true,
      },
      {
        source: "/raffle",
        destination: "https://app.sli.do/event/8fopXff3aXdFBaSLnox2p6",
        permanent: true,
      }
    ];
  },
};

module.exports = withBundleAnalyzer(withSentryConfig(moduleExports));
