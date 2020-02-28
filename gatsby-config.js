module.exports = {
  siteMetadata: {
    title: `Gatsby Oh Snap!`,
    description: `Building a test Gatsby site based on FEM tutorial.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
