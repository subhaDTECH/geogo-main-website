import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import DigitalProductCom from "../components/digitalProduct";
import AgileServiceCom from "../components/agileService";






const AgileServiceManageMent= () => (
  <Layout>
    
    <AgileServiceCom/>
  </Layout>
)

export const Head = () => <Seo title="Agile Service" />

export default AgileServiceManageMent
