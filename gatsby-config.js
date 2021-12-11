module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gumtrees",
  },
  pathPrefix: "/gumtrees",
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "aaaaaaaaaaa",
      }
    }
  ],
};
