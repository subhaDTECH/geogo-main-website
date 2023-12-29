/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // Load environment variables based on the current environment
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [

    {
      resolve: `gatsby-source-strapi`,
      options: {
        
        apiURL:process.env.STRAPI_API_URL,
        
        accessToken:process.env.STRAPI_ACCESS_TOKEN,
        // Replace with your Strapi API URL
        queryLimit: 1000, // Optional, increase if you have a large number of content entries
        collectionTypes: [
          // Define the content types you want to fetch from Strapi
          // Adjust this to your content types in Strapi
          'post',
          'review',
          'service',
           'client',
           'tool',
           'program',
           'job',
           'team',
           'solution_category',
           'sevice_category',
           'solution',
           'gallery'
          // Add other content types as needed
        ],
       
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-transformer-remark',
  ],
}
