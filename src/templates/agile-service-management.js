import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import AgileServiceCom from "../components/agileService";






const AgileServiceManageMent= () => (
  <Layout>
    
    <AgileServiceCom/>
  </Layout>
)

export const Head = () => <Seo title="Agile Service" />

export default AgileServiceManageMent
