import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import MsmeSolutionCom from "../components/MsmeSolution";






const MsmeSolution= () => (
  <Layout>
    
    <MsmeSolutionCom/>
  </Layout>
)

export const Head = () => <Seo title="solution" />

export default MsmeSolution
