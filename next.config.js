const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
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
