module.exports = {
  siteUrl: "https://www.soplugged.com",
  generateRobotsTxt: true, // (optional)
  exclude: ["/my-business", "/dashboard", "/server-sitemap-index.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.soplugged.com/server-sitemap-index.xml", // <==== Add here
    ],
  },
  // ...other options
};
