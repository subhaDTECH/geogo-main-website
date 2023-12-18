import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TermsCom from "../components/termsCom"




const TermsPage = () => (
<Layout>
 <TermsCom/>
</Layout>
)


export const Head = () => <Seo title="Terms" />

export default TermsPage ;
