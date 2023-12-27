// import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";
// import * as styles from "../components/index.module.css";
// import RecogCom from "../components/recog";
// import CareerCard from "../components/careerCard";
// import GlassDoorReview from "../components/glassDoorReview";
// import JobCard from "../components/jobCard";
// import InternCard from "../components/internCard";

import Layout from "../components/layout"
import * as React from "react"
import Seo from "../components/seo"
import CareerHero from "../components/Career/career.js"
import { graphql } from "gatsby"
import JobCard from "../components/Jobs/jobCard"
import CareerCard from "../components/Career/careerCard"
import RecogCom from "../components/Career/recog.js"
import InternCard from "../components/Intern/internCard.js"
import GlassDoorReview from "../components/Review/glassDoorReview.js"

const CareerPage = ({ data }) => {
  const jobs = data?.allStrapiJob?.nodes
  const programs = data?.allStrapiProgram?.nodes

  return (
    <Layout>
      <CareerHero />
      <RecogCom />
      <CareerCard />
      <GlassDoorReview />
      <JobCard jobs={jobs} />
      <InternCard programs={programs} />
    </Layout>
  )
}

export const Head = () => <Seo title="Careers" />

export const query = graphql`
  query MyQuery {
    allStrapiJob {
      nodes {
        job_creator
        link
        location
        opening_date(fromNow: true, formatString: "DD|MM||YY")
        role
        tech_stack
        image {
          localFile {
            url
          }
        }
        closing_date
        position_type
      }
    }

    allStrapiProgram {
      nodes {
        link
        title
        program_start_date(formatString: "dD|MM|YY")
        program_end_date(formatString: "DD|MM|YY")
        program_creator
        id
        Last_date_toApply(formatString: "DD|MM|YY")
        duration
        image {
          localFile {
            url
          }
        }
      }
    }
  }
`

export default CareerPage
