// import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
// import * as styles from "../components/index.module.css"

import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "../components/Contact/contact"

const ContactPage = () => (
  <Layout>
    <Contact id={1} />
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
