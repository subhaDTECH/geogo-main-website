import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import MsmeSolutionCom from "../components/MsmeSolution";






const IndustryPage= () => (
  <Layout>
    
    <MsmeSolutionCom/>
  </Layout>
)

export const Head = () => <Seo title="industry" />

export default IndustryPage
