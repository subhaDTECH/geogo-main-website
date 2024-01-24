// import Hero from "./hero"
// import Service from "./service"
//import FooterCom from "./footerCom"
//import Header from "./header"
// import FooterHead from "./footerHead"

// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import "./layout.css"
// import Header from "../components/header/header.js"
// import Footer from "../components/Footer/footer.js"
// import FooterHead from "./Footer/footerHead.js"

// const Layout = ({ children }) => {
//   console.log(children?.props?.id, "children")
//   let ContactID = children?.props?.id
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <div>
//         <div>
//           <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//           <main>{children}</main>
//           <footer>
//             {ContactID !== 1 && <FooterHead />}
//             <Footer />
//           </footer>
//         </div>
//       </div>
//     </>
//   )
// }

//export default Layout

// Layout.js
import { window, document, exists } from "browser-monads"
import React, { useEffect, useRef, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header/header.js"
import Footer from "../components/Footer/footer.js"
import FooterHead from "./Footer/footerHead.js"
import "./layout.css"
import { OpenStateProvider } from "./OpenStateProvider"
import Drawer from "./drawer.js"
// Adjust the path accordingly

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

  const [atTopOfPage, setAtTopOfPage] = useState(true)
  const containerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (containerRef.current && containerRef.current.scrollTop > 0) {
  //       if (atTopOfPage) setAtTopOfPage(false)
  //     } else {
  //       if (!atTopOfPage) setAtTopOfPage(true)
  //     }
  //   }

  //   if (containerRef.current) {
  //     console.log("scroll")
  //     containerRef.current.addEventListener("scroll", handleScroll)

  //     return () => {
  //       containerRef.current.removeEventListener("scroll", handleScroll)
  //     }
  //   }
  // }, [atTopOfPage])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 0) {
          // User is scrolled
          if (atTopOfPage) setAtTopOfPage(false)
        } else {
          // User is at the top of the page
          if (!atTopOfPage) setAtTopOfPage(true)
        }
      }
    }

    // Add scroll event listener to window when the component mounts
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [atTopOfPage])

  return (
    <OpenStateProvider>
      <div>
        <div>
          <Header
            setIsOpen={setIsOpen}
            atTopOfPage={atTopOfPage}
            siteTitle={data.site.siteMetadata?.title || `Title`}
          />

          <main>{children}</main>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className={`h-full flex flex-col p-4 mt-5`}>
              <Link
                className="m-2 no-underline mt-[20px] text-[18px]"
                to="/service"
              >
                Services
              </Link>
              <Link
                className="m-2 no-underline mt-[20px] text-[18px]"
                to="/solution"
              >
                Solutions
              </Link>
              <Link
                className="m-2 no-underline mt-[20px] text-[18px]"
                to="/company"
              >
                Company
              </Link>

              <Link
                className="m-2 no-underline mt-[20px] text-[18px]"
                to="/career"
              >
                Careers
              </Link>
              <Link
                className="m-2 no-underline mt-[20px] text-[18px]"
                to="https://blog.geogo.in/"
              >
                Blog
              </Link>

              <Link to="/contact" className="no-underline text-black my-3  ">
                <button className=" w-32 p-5 py-2 border border-gray-400 font-medium hover:text-green-900 mr-5 inline-flex items-center focus:outline-none  rounded text-base mt-4 md:mt-0">
                  Contact Us
                </button>
              </Link>
            </nav>
          </Drawer>

          <footer>
            {ContactID !== 1 && <FooterHead />}
            <Footer />
          </footer>
        </div>
      </div>
    </OpenStateProvider>
  )
}

export default Layout
