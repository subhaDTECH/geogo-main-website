import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import RecruitmentTrainingCom from "../components/ServiceCom/recruitmentService"

const RecruitmentTraining = () => (
  <Layout>
    <RecruitmentTrainingCom />
  </Layout>
)

export const Head = () => <Seo title="recruitment training" />

export default RecruitmentTraining
