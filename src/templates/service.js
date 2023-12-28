import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import DigitalProductCom from "../components/digitalProduct";
import { graphql } from "gatsby"

const ServiceTemplates = ({ data }) => {
  const service = data?.allStrapiService?.edges[0]?.node
  console.log(service?.content?.data?.content, "content")
  console.log(service)

  return (
    <Layout>
      <div className="container mx-auto py-10 my-8">
        <div
          className="w-1/2 mx-auto text-[18px]"
          dangerouslySetInnerHTML={{ __html: service?.content?.data?.content }}
        />
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
            }
          }
          description
        }
      }
    }
  }
`

export default ServiceTemplates
