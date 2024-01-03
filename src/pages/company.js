// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
//import * as styles from "../components/index.module.css"
// import CompanyHero from "../components/Company"
// import CompanyCard from "../components/CompanyCard"
// import Teamcard from "../components/teamCard"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CompanyImg1 from "../images/company-img1.jpg"
import CompanyImg2 from "../images/company-img2.jpg"
import CompanyImg3 from "../images/company-img3.jpg"
import { graphql } from "gatsby"
import RecogCom from "../components/Career/recog.js"
import CompanyCard from "../components/Company/CompanyCard.js"
import CompanyHero from "../components/Company/Company.js"
import Teamcard from "../components/Company/teamCard.js"

const CompanyPage = ({ data }) => {
  const teams = data?.allStrapiTeam?.nodes
  return (
    <Layout>
      <CompanyHero />
      <CompanyCard
        imageUrl={CompanyImg1}
        title={"Our Mission"}
        subtitle1={"To simplify digital technology adoption with a human touch"}
      />
      <CompanyCard
        imageUrl={CompanyImg2}
        title={"Our Vision"}
        subtitle1={
          "Be a Team of Champions delivering high quality Digital Products & solutions to solve business needs and challenges with agility using best of technology"
        }
      />
      <CompanyCard
        imageUrl={CompanyImg3}
        title={"Our culture charter reads"}
        subtitle1={"1. Goals first, People second & Individual third."}
        subtitle2={
          "2. A WIN-WIN-WIN business, where Customer wins, Employees win and the Business Owners win."
        }
        subtitle3={"3. Fail fast, fail differently."}
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
