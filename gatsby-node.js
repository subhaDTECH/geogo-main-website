/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// createPage({
//   path: "/using-dsg",
//   component: require.resolve("./src/templates/using-dsg.js"),
//   context: {},
//   defer: true,
// })

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   const pagePaths = [
//     { path: '/service/digital-product-development', template: './src/templates/digital-product-development.js' },
//     { path: '/service/agile-service-management', template: './src/templates/agile-service-management.js' },
//     { path: '/service/business-process-automation', template: './src/templates/business-process-automation.js' },
//     { path: '/service/recruitment-training', template: './src/templates/recruitment-training.js' },
//     { path: '/solution/msme', template: './src/templates/msme.js' },
//     { path: '/solution/industry4.0', template: './src/templates/industry.js' },
//   ];

//   pagePaths.forEach(({ path, template }) => {
//     createPage({
//       path: path,
//       component: require.resolve(template),
//       context: {
//        pagePath: path,
//       },
//     });
//   });

// }

//***************************FOR DYNAMIC PAGE ROUTE***************************** */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allStrapiService {
        nodes {
          slug
          sub_title
          title
        }
      }
      allStrapiSolution {
        nodes {
          slug
          type
          id
        }
      }
    }
  `)

  // console.log(result, "result")

  result?.data?.allStrapiService?.nodes?.forEach(node => {
    //console.log(node?.slug, "res")
    createPage({
      path: `/service/${node?.slug}`,
      component: path.resolve("./src/templates/service.js"),
      context: {
        id: node?.id,
        title: node?.title,
        slug: node?.slug,
      },
    })
  })

  //2nd result
  result?.data?.allStrapiSolution?.nodes?.forEach(res => {
    // console.log(res.slug, "res")
    createPage({
      path: `/solution/${res?.slug}`,
      component: path.resolve("./src/templates/solution.js"),
      context: {
        id: res?.id,
        type: res?.type,
        slug: res?.slug,
      },
    })
  })
}
