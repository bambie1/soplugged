/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-images-1.medium.com",
      "dummyimage.com",
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
      "cdn.shopify.com",
      "media.graphcms.com",
    ],
  },
};
