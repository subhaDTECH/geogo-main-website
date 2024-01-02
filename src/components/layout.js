// import Hero from "./hero"
// import Service from "./service"
//import FooterCom from "./footerCom"
//import Header from "./header"
// import FooterHead from "./footerHead"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "../components/header/header.js"
import FooterHead from "../components/Footer/footer.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <div>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

          <main>{children}</main>
          <footer>
            <FooterHead />
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
