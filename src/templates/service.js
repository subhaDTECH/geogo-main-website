import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
// import "../components/layout.css"
//<div className=" text-[16px]" dangerouslySetInnerHTML={{ __html: htmlData }} />

const ServiceTemplates = ({ data }) => {
  const service = data?.allStrapiService?.edges[0]?.node
  console.log(service?.content?.data?.content, "content")
  // const htmlData = service?.content?.data?.childMarkdownRemark?.html

  return (
    <Layout>
      <div className="container mx-auto py-10 my-[90px]">
        <div className="w-[90%] p-4 m-4  md:w-[50%] mx-auto flex flex-col justify-center">
          <h3 className="text-[36px] font-bold my-2">{service?.title}</h3>
          <p className="text-[22px] py-3">{service?.description}</p>

          <ReactMarkdown>{service?.content?.data?.content}</ReactMarkdown>
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
          sub_title
          technology
          title
          image {
            localFile {
              url
            }
          }
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
