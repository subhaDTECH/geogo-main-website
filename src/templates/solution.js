import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import DigitalProductCom from "../components/digitalProduct";
import { graphql } from "gatsby"

import remark from "remark"
import remarkHtml from "remark-html"

const SolutionTemplates = ({ data }) => {
  console.log(data.strapiSolution)

  const solutionData = data.strapiSolution

  return (
    <Layout>
      <div className="container mx-auto py-10 my-8">
        <div className="w-[90%]  flex items-center flex-col mx-auto  p-5 m-3">
          <h2 className="text-4xl font-bold pb-5">{solutionData.title}</h2>
          <p className="text-[18px] px-5">{solutionData.description}</p>
          <div>
            <p className="text-[18px] px-5">
              {solutionData?.content?.data?.content}
            </p>
          </div>
          <div>
            {/* <div dangerouslySetInnerHTML={{ __html: solutionData?.content?.data?.content }} /> */}
          </div>
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
