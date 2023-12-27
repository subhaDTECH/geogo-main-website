import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DigitalProductCom from "../components/ServiceCom/digitalProduct.js"

const DigitalProductDevelopment = () => (
  <Layout>
    <DigitalProductCom />
  </Layout>
)

export const Head = () => <Seo title="Digital Product development" />

export default DigitalProductDevelopment
