// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
//import * as styles from "../components/index.module.css"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CompanyHero from "../components/Company"
import CompanyCard from "../components/CompanyCard"
import RecogCom from "../components/recog"
import Teamcard from "../components/teamCard"

import { graphql } from "gatsby"
const CompanyPage = ({data}) => {


  const teams=data.allStrapiTeam.nodes;
  return (
    <Layout>
    <CompanyHero />
    <CompanyCard
      imageUrl={
        "https://www.geogo.in/static/e0512ad5585b29de76271c5effc84191/fighter-plane2-1.jpg"
      }
      title={"Our Mission"}
      subtitle={"To simplify digital technology adoption with a human touch"}
    />
    <CompanyCard
      imageUrl={
        "https://www.geogo.in/static/a7e2faa16f210d1d7e9b85e6ca2e38be/side-section2-min.jpg"
      }
      title={"Our Vision"}
      subtitle={
        "Be a Team of Champions delivering high quality Digital Products & solutions to solve business needs and challenges with agility using best of technology"
      }
    />
    <CompanyCard
      imageUrl={
        "https://www.geogo.in/static/e0512ad5585b29de76271c5effc84191/fighter-plane2-1.jpg"
      }
      title={"Our culture charter reads"}
      subtitle={"1. Goals first, People second & Individual third"}
    />
     <RecogCom />
     <Teamcard teams={teams} />
  </Layout>
  )
}

export const Head = () => <Seo title="Company" />

export const query = graphql`
query MyQuery {
  
  allStrapiTeam {
    nodes {
      id
      joining_date(formatString: "DD|MM|YY")
      link
      name
      position_type
      image {
        
        localFile {
          id
          url
        }
      }
      employment_type
    }
  }
}
`




export default CompanyPage
