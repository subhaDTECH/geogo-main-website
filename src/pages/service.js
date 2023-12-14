import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const ServicePage = () => (
  <Layout>
  
      <h1>hello world from Service !!</h1> 
 </Layout>
)


export const Head = () => <Seo title="Service" />

export default ServicePage
