/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
        apiURL: `https://strapicms.geogo.in`, 
        accessToken: 'f1f6bd9126c3a4c99a315facafdf5b90184ff145a2b689676d89e736f8f30e3af78adce513c21e6480285e74a0d0e7e73ff5405ac76cfbabf8dfd45ef36400d724f1883f038f55723faf7b13c8355781ee2e9fd092c625b6c28193edacfaa4b06e68ee90f1575c556bc798fcaa5c8e81160207ce6cbf7799585bb5240b9019eb',
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
           'solution_type',
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
  ],
}
