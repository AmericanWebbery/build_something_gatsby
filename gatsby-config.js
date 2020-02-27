module.exports = {
  siteMetadata: {
    title: `Gatsby Oh Snap!`,
    description: `Building a test Gatsby site based on FEM tutorial.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
