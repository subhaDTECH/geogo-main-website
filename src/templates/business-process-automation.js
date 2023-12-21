import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import DigitalProductCom from "../components/digitalProduct";
import BusinessProcessAutomationCom from "../components/businessProcess";






const BusinessProcessAutomation= () => (
  <Layout>
    
    <BusinessProcessAutomationCom/>
  </Layout>
)

export const Head = () => <Seo title="Business process Automation" />

export default BusinessProcessAutomation
