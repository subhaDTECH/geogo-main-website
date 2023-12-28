import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TermsCom from "../components/Terms/termsCom"


const TearmsPage = () => {
  return (
    <Layout>
       <TermsCom/>
    </Layout>
  )
}

export const Head = () => <Seo title="Terms" />

export default TearmsPage
