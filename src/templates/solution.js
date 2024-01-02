import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import DigitalProductCom from "../components/digitalProduct";
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import remark from "remark"
import remarkHtml from "remark-html"

const SolutionTemplates = ({ data }) => {
  console.log(data.strapiSolution)

  const solutionData = data.strapiSolution

  return (
    <Layout>
      <div className="container mx-auto py-10 my-[90px]">
        <div className="w-full p-4 m-4 md:w-[50%] mx-auto flex flex-col justify-center">
          <h3 className="text-[40px] font-bold my-2">{solutionData?.title}</h3>
          <p className="text-[22px] py-3">{solutionData?.description}</p>
          {/* <div className="w-full h-[350px] ">
            <img
              className="w-[100%] h-[100%] object-contain"
              alt="img"
              src={solutionData?.image?.localFile?.url}
            />
          </div> */}
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
