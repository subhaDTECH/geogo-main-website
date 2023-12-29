import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import DigitalProductCom from "../components/digitalProduct";
import { graphql } from "gatsby"

const ServiceTemplates = ({ data }) => {
  const service = data?.allStrapiService?.edges[0]?.node
  console.log(service?.content?.data?.content, "content")
  const htmlData=service?.content?.data?.childMarkdownRemark?.html;
  console.log(service,"service")

  return (
    <Layout>
      <div className="container mx-auto py-10 my-8">
        <div className="w-full md:w-1/2  mx-auto">
        <h3 className="text-4xl font-bold">{service?.title}</h3>
        <p className="text-[18px]">{service?.description}</p>
         <div
          className=" text-[16px]"
          dangerouslySetInnerHTML={{ __html: htmlData }}
        />
        </div>
      
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Service Templates" />

export const query = graphql`
  query ($slug: String!) {
    allStrapiService(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          slug
          sub_title
          technology
          title
          link
          content {
            data {
              content
              childMarkdownRemark {
                html
              }
            }
            
          }
          description
        }
      }
    }
  }
`

export default ServiceTemplates
