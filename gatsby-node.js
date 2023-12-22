/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })

 
  const pagePaths = [
    { path: '/service/digital-product-development', template: './src/templates/digital-product-development.js' },
    { path: '/service/agile-service-management', template: './src/templates/agile-service-management.js' },
    { path: '/service/business-process-automation', template: './src/templates/business-process-automation.js' },
    { path: '/service/recruitment-training', template: './src/templates/recruitment-training.js' },
    { path: '/solution/msme', template: './src/templates/msme.js' },
    { path: '/solution/industry', template: './src/templates/industry.js' },
  ];

  pagePaths.forEach(({ path, template }) => {
    createPage({
      path: path,
      component: require.resolve(template),
      context: {
        // You can pass additional context data if needed
        // For example, you could pass the path itself as context here
        pagePath: path,
      },
    });
  });

}
