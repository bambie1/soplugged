const withPWA = require("next-pwa");

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
module.exports = withPWA({
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  },
  webpack: (config, { isServer, webpack, _ }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    if (!isServer) {
      config.resolve.alias["@sentry/node"] = "@sentry/browser";
    }
    return config;
  },
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "dummyimage.com",
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
    ],
  },
});
