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

module.exports = withSentryConfig(
  moduleExports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "soplugged",
    project: "soplugged",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
