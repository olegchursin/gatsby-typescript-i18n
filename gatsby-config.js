module.exports = {
  siteMetadata: {
    title: `Gatsby | TS and i18n`,
    description: `Gatsby Starter with TypeScript and i18n`,
    author: `Oleg Chursin`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `update-your-web-browser`,
        short_name: `browser-update`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#754991`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto\:300,700`, `roboto slab\:300,700`],
        display: "swap"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
