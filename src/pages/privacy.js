import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

const PrivacyPage = ({ data }) => {
  const privacyData = data?.allStrapiPrivacy?.nodes[0]

  return (
    <Layout>
      <div className="privacy-Section my-[150px] md:my-[200px]">
        <div className="container h-full mx-auto w-[100%] md:w-[50%]  m-3 my-10 p-10 ">
          <h2 className="text-3xl  sm:text-4xl font-semibold">
            {privacyData?.title}
            <span className="text-green-500">.</span>
          </h2>
          <div className="privacy-content">
            <ReactMarkdown>{privacyData?.content?.data?.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Privacy" />

export const query = graphql`
  query MyQuery {
    allStrapiPrivacy {
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

export default PrivacyPage
