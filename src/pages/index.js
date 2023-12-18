import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Hero from "../components/hero"
import Service from "../components/service"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
const IndexPage = () => (
  <Layout>
    <Hero />
    <Service />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
