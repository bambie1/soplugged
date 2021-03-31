module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
    ],
  },
};
