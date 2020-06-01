/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Super`,
    author: `Jahl Herapath`,
    description: `Super is a community of emerging talent and platform of contemporary culture.`,
    siteUrl: `https://sssssuper.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `sssssuper`,
        accessToken: `${process.env.PRISMIC_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
  ],
}
