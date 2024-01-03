import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const TearmsPage = ({ data }) => {
  const termsData = data?.allStrapiTerm?.nodes[0]

  return (
    <Layout>
      <div className="Technology-Section my-[200px]">
        <div className="container h-full mx-auto w-[80%] md:w-[50%] p-5 m-3 my-10 p-10 ">
          <h2 className="text-3xl  sm:text-4xl font-semibold">
            {termsData.title}
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
