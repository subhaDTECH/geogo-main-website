// import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";
// import * as styles from "../components/index.module.css";

import Layout from "../components/layout";
import * as React from "react";
import Seo from "../components/seo";
import CareerHero from "../components/career";
import RecogCom from "../components/recog";
import CareerCard from "../components/careerCard";
import GlassDoorReview from "../components/glassDoorReview";
import JobCard from "../components/jobCard";
import InternCard from "../components/internCard";
import { graphql } from 'gatsby';
const CareerPage = ({data}) => {

  const jobs=data?.allStrapiJob?.nodes;
  const programs=data?.allStrapiProgram?.nodes;



  return (
    <Layout>
     <CareerHero/>
     <RecogCom/>
     <CareerCard/>
     <GlassDoorReview/>
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
