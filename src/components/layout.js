import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Hero from "./hero"
import Service from "./service"
import "./layout.css"
import FooterCom from "./footerCom"
import FooterHead from "./footerHead"





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
     <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      <div>
        <main>{children}</main>
        
        <footer>
          
          <FooterHead/>
          
        </footer>
      </div>
     </div>
     
 </>
  )
}

export default Layout
