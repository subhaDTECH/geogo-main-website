import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import DigitalProductCom from "../components/digitalProduct";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const SolutionTemplates = ({ data }) => {
  const solutionData = data.strapiSolution

  return (
    <Layout>
      <div className="container mx-auto py-10 my-[90px]">
        <div className="w-full p-4 m-4 w-[80%] md:w-[50%] mx-auto flex flex-col justify-center">
          <h3 className="text-[40px] font-bold my-2">{solutionData?.title}</h3>
          <p className="text-[22px] py-3">{solutionData?.description}</p>

          <ReactMarkdown>{solutionData?.content?.data?.content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Solution Templates" />

export const query = graphql`
  query MyQuery($slug: String!) {
    strapiSolution(slug: { eq: $slug }) {
      slug
      title
      description
      image {
        localFile {
          url
        }
      }
      content {
        data {
          content
        }
      }
    }
  }
`

export default SolutionTemplates
