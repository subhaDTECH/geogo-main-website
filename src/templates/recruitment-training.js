import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import DigitalProductCom from "../components/digitalProduct";
import RecruitmentTrainingCom from "../components/RecruitmentService";






const RecruitmentTraining= () => (
  <Layout>
    
    <RecruitmentTrainingCom/>
  </Layout>
)

export const Head = () => <Seo title="recruitment training" />

export default RecruitmentTraining
