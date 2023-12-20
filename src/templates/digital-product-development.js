import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// const pagePaths = [
//     { path: '/service/digital-product-development', template: './src/templates/digital-product-development.js' },
//     { path: '/service/agile-service-management', template: './src/templates/agile-service-management.js' },
//     { path: '/service/business-process-automation', template: './src/templates/business-process-automation.js' },
//     { path: '/service/recruitment-training', template: './src/templates/recruitment-training.js' },
//   ];



const DigitalProductDevelopment= () => (
  <Layout>
    <h1>
      Hello from a <b>DigitalProductDevelopment Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default DigitalProductDevelopment
