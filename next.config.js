const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const env = {};
  const images = {
    domains: [
      "cdn-images-1.medium.com",
      "dummyimage.com",
      "firebasestorage.googleapis.com",
    ],
  };
  // next.config.js object
  return {
    env,
    images,
  };
};
