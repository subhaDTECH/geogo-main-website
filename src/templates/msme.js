import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MsmeSolutionCom from "../components/SolutionCom/MsmeSolutionCom.js"

const MsmeSolution= () => (
  <Layout>
    
    <MsmeSolutionCom/>
  </Layout>
)

export const Head = () => <Seo title="solution" />

export default MsmeSolution
