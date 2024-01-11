// // import { Link } from "gatsby"
// // import { StaticImage } from "gatsby-plugin-image"
// //import * as styles from "../components/index.module.css"
// import * as React from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { graphql } from "gatsby"
// import Hero from "../components/Hero/hero.js"
// import Service from "../components/Service/service.js"

// const IndexPage = ({ data }) => {
//   //console.log(data, "data")
//   // console.log("allStrapiService".data?.allStrapiService?.nodes)
//   // console.log("allStrapiClient", data?.allStrapiClient?.nodes)
//   // console.log("allStrapiTool", data?.allStrapiTool?.nodes)
//   // console.log("allStrapiPost", data.allStrapiPost.nodes)
//   // console.log("allStrapiReview", data?.allStrapiReview.nodes)

//   const allStrapiService = data?.allStrapiService?.nodes
//   const allStrapiClientData = data?.allStrapiClient?.nodes
//   const allStrapiToolData = data?.allStrapiTool?.nodes
//   const allStrapiPost = data?.allStrapiPost?.nodes
//   const allStrapiReview = data?.allStrapiReview?.nodes
//   return (
//     <Layout>
//       <Hero />
//       <Service
//         services={allStrapiService}
//         clients={allStrapiClientData}
//         tools={allStrapiToolData}
//         posts={allStrapiPost}
//         reviews={allStrapiReview}
//       />
//     </Layout>
//   )
// }

// export const Head = () => <Seo title="Home" />

// export const query = graphql`
//   query MyQuery {
//     allStrapiService(sort: { id: DESC }, limit: 4) {
//       nodes {
//         slug
//         technology
//         title
//         id
//         description
//         image {
//           localFile {
//             url
//           }
//         }
//       }
//     }
//     allStrapiClient {
//       nodes {
//         id
//         client_image {
//           localFile {
//             url
//           }
//         }
//       }
//     }
//     allStrapiTool {
//       nodes {
//         type
//         id
//         image {
//           localFile {
//             url
//           }
//         }
//       }
//     }

//     allStrapiPost {
//       nodes {
//         author_name
//         author_subtitle
//         description
//         created_time(fromNow: true)
//         slug
//         title
//         post_image {
//           id
//           localFile {
//             url
//           }
//         }
//         content {
//           data {
//             content
//           }
//         }
//         author_image {
//           localFile {
//             url
//           }
//         }
//       }
//     }

//     allStrapiReview {
//       nodes {
//         author_name
//         rating
//         review_text
//         review_platform_image {
//           createdAt(fromNow: true)
//           localFile {
//             url
//           }
//           name
//         }
//         link
//       }
//     }
//   }
// `

// export default IndexPage

//  allStrapiService(sort: { id: DESC }, limit: 4) {
//           nodes {
//             slug
//             technology
//             title
//             id
//             description
//             image {
//               localFile {
//                 url
//               }
//             }
//           }
//         }

import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/hero.js"
import Service from "../components/Service/service.js"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiService(
        filter: { IsForHomePage: { eq: true } }
        limit: 4
        sort: { id: DESC }
      ) {
        nodes {
          slug
          technology
          title
          id
          description
          image {
            localFile {
              url
            }
          }
        }
      }

      allStrapiClient {
        nodes {
          id
          client_image {
            localFile {
              url
            }
          }
        }
      }
      allStrapiTool {
        nodes {
          type
          id
          image {
            localFile {
              url
            }
          }
        }
      }
      allStrapiPost {
        nodes {
          author_name
          author_subtitle
          description
          created_time(fromNow: true)
          slug
          title
          post_image {
            id
            localFile {
              url
            }
          }
          content {
            data {
              content
            }
          }
          author_image {
            localFile {
              url
            }
          }
        }
      }
      allStrapiReview {
        nodes {
          author_name
          rating
          review_text
          review_platform_image {
            createdAt(fromNow: true)
            localFile {
              url
            }
            name
          }
          link
        }
      }
    }
  `)

  const {
    allStrapiService,
    allStrapiClient,
    allStrapiTool,
    allStrapiPost,
    allStrapiReview,
  } = data

  return (
    <Layout>
      <Hero />
      <Service
        services={allStrapiService.nodes}
        clients={allStrapiClient.nodes}
        tools={allStrapiTool.nodes}
        posts={allStrapiPost.nodes}
        reviews={allStrapiReview.nodes}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
