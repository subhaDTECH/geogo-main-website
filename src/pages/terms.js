import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const TearmsPage = ({ data }) => {
  const termsData = data?.allStrapiTerm?.nodes[0]

  return (
    <Layout>
      <div className="Terms-Section w-full my-[130px] lg:my-[200px]">
        <div className="sm:container h-full mx-auto w-[100%] lg:w-[60%]  m-3 my-10 p-4 sm:p-10 ">
          <h2 className="text-3xl  sm:text-4xl font-semibold mt-8">
            {termsData.title} <span className="text-green-500">.</span>
          </h2>
          <div>
            <ReactMarkdown>{termsData?.content?.data?.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Terms" />
export const query = graphql`
  query MyQuery {
    allStrapiTerm {
      nodes {
        title
        content {
          data {
            content
          }
        }
        updatedAt
      }
    }
  }
`
export default TearmsPage
