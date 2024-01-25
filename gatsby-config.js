/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // Load environment variables based on the current environment
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },

  flags: {
    DEV_SSR: true,
  },

  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: process.env.STRAPI_API_URL,
        apiURL: "https://strapicms.geogo.in",
        accessToken:
          "b7958bfe04d24515c81f6241c2601970aabd0a770715311a332fabe337d3019d70cf00a10e6c1ea2911cb6270c86f8d4349667572bc8bbce232dbfc3ec5df23884da336f0c8bbc502c617ef80abe1a6cd4b9476fb0645d478e2fd765ded5e66cc6d8c4af0a49b229009babe20a7f0b84c7a9d69b8df16ad315903ab2bb7da5bc",
        // accessToken:
        //  "361cca3a4a48e0bfa46f9d2bc0af7d2c0213c12259225972ab23040ee30ef1bd393ad66f3a220b556f061711ee9f23181b4211ec932a7792db9cd43acfc4170cf9f427941be5a857dbdb182427278546704eca408b9771df72e0b48e9a21853ae1e7e42f048d769ea97b7507d004b15a9594c236bc0be9caa948add31b02b911",
        // accessToken:
        // "f1f6bd9126c3a4c99a315facafdf5b90184ff145a2b689676d89e736f8f30e3af78adce513c21e6480285e74a0d0e7e73ff5405ac76cfbabf8dfd45ef36400d724f1883f038f55723faf7b13c8355781ee2e9fd092c625b6c28193edacfaa4b06e68ee90f1575c556bc798fcaa5c8e81160207ce6cbf7799585bb5240b9019eb",
        // accessToken: process.env.STRAPI_ACCESS_TOKEN,
        // Replace with your Strapi API URL
        queryLimit: 1000, // Optional, increase if you have a large number of content entries
        collectionTypes: [
          // Define the content types you want to fetch from Strapi
          // Adjust this to your content types in Strapi
          "post",
          "review",
          "service",
          "client",
          "tool",
          "program",
          "job",
          "team",
          "solution_category",
          "sevice_category",
          "solution",
          "gallery",
          "privacy",
          "term",
          "contact",

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
        name: `Geogo Techsolutions`,
        short_name: `Geogo`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/geogo-favicon.ico`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-plugin-material-ui",
  ],
}
