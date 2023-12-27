import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BusinessProcessAutomationCom from "../components/ServiceCom/businessProcess"

const BusinessProcessAutomation = () => (
  <Layout>
    <BusinessProcessAutomationCom />
  </Layout>
)

export const Head = () => <Seo title="Business process Automation" />

export default BusinessProcessAutomation
