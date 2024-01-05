// import Hero from "./hero"
// import Service from "./service"
//import FooterCom from "./footerCom"
//import Header from "./header"
// import FooterHead from "./footerHead"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "../components/header/header.js"
import Footer from "../components/Footer/footer.js"
import FooterHead from "./Footer/footerHead.js"

const Layout = ({ children }) => {
  console.log(children?.props?.id, "children")
  let ContactID = children?.props?.id
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
            {ContactID !== 1 && <FooterHead />}
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
