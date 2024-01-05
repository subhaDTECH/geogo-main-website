import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
// style={{  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${solution?.image?.localFile?.url})`, backgroundSize: 'cover' }}
import { graphql, Link } from "gatsby"
import StickySidebar from "sticky-sidebar"

const sections = document.querySelectorAll("section")

const SolutionPage = ({ data }) => {
  const solutions = data.allStrapiSolution.nodes
  const solution_category = data?.allStrapiSolutionCategory?.edges

  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [sidebarInstance, setSidebarInstance] = useState(null)
  const sidebarRef = useRef(null)
  const [activeSectionId, setActiveSectionId] = useState(null)
  console.log(activeSectionId, "activesectionid")

  // let sidebarInstance = null
  // let resizeTimer = null

  useEffect(() => {
    // const initStickySidebar = () => {
    //   if (sidebarRef.current && window.innerWidth >= 1024) {
    //     sidebarInstance = new StickySidebar(sidebarRef.current, {
    //       // Configure options as needed, like topSpacing, bottomSpacing, etc.
    //       // Example:
    //       topSpacing: 120,
    //       bottomSpacing: 20,
    //     })
    //   }
    // }

    // const destroyStickySidebar = () => {
    //   if (sidebarInstance) {
    //     sidebarInstance.destroy()
    //     sidebarInstance = null
    //   }
    // }

    // const handleResize = () => {
    //   clearTimeout(resizeTimer)
    //   resizeTimer = setTimeout(() => {
    //     if (window.innerWidth >= 1024 && !sidebarInstance) {
    //       initStickySidebar()
    //     } else if (window.innerWidth < 1024 && sidebarInstance) {
    //       destroyStickySidebar()
    //     }
    //   }, 200) // Adjust debounce time as needed (e.g., 200ms)
    // }

    // Initialize sticky sidebar on mount
    // initStickySidebar()

    // window.addEventListener("resize", handleResize)

    // //Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener("resize", handleResize)
    //   destroyStickySidebar()
    // }

    const initStickySidebar = () => {
      if (sidebarRef.current && window.innerWidth >= 1024 && !sidebarInstance) {
        const newSidebarInstance = new StickySidebar(sidebarRef.current, {
          // Configure options as needed, like topSpacing, bottomSpacing, etc.
          // Example:
          topSpacing: 140,
          bottomSpacing: 20,
        })
        setSidebarInstance(newSidebarInstance)
      }
    }

    const destroyStickySidebar = () => {
      if (sidebarInstance) {
        sidebarInstance.destroy()
        setSidebarInstance(null)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024 && !sidebarInstance) {
        initStickySidebar()
      } else if (window.innerWidth < 1024 && sidebarInstance) {
        destroyStickySidebar()
      }
    }

    initStickySidebar()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      destroyStickySidebar()
    }
  }, [sidebarInstance])

  //for scroll part code
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "-50px 0px 0px 0px",
      threshold: 0.8, // 0 to 1: Percentage of the section's visibility required to trigger the callback
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id)
        }
      })
    }, options)

    // Observe each section
    const sections = document.querySelectorAll("section")
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      // Clean up the observer on unmount
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <Layout>
      <div className=" service-page-section my-[150px]">
        <div className="container  h-full mx-auto w-[90%] p-5 m-3 my-10 p-10 mx-5">
          <div className="service-header">
            <h1 className="text-[46px] font-semibold">
              Solutions<span className="text-green-500">.</span>
            </h1>
          </div>
          <div className="row my-8 p-5 flex  flex-col lg:flex-row relative">
            <div
              ref={sidebarRef}
              id="yourSidebarId"
              className="left-box  w-full lg:w-1/2"
            >
              <ul className="">
                {solution_category &&
                  solution_category?.map((solution, index) => {
                    console.log(solution.node.type, "tye")
                    return (
                      <li
                        key={index}
                        //onClick={() => setActiveTabIndex(index)}
                        onClick={() => {
                          const element = document.getElementById(
                            solution.node.type
                          )
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                        className={`m-2 p-2 cursor-pointer ${
                          solution.node.type === activeSectionId &&
                          "text-green-500"
                        }`}

                        // className="m-2 p-2 cursor-pointer"
                      >
                        <a
                          // key={index}
                          // href={`#${solution?.node?.type}`}
                          className={`no-underline  ${
                            solution.node.type === activeSectionId &&
                            "text-green-500"
                          } `}
                        >
                          {solution?.node?.type}
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div className="right-box  p-5 mx-5 w-full  top-[-50px]">
              {solutions &&
                solutions.map((solution, index) => (
                  <section
                    key={index}
                    id={solution?.type}
                    className="w-full border border-gray-200 h-auto md:h-[400px]  digital-product-box my-8 p-5 shadow-lg"
                  >
                    <h3 className="text-sm my-2 top-0 right-0 text-right mt-5">
                      {solution?.type}
                    </h3>
                    <p className="text-[18px] sm:text-[20px] opacity-0.8 font-semibold">
                      {solution?.title}
                    </p>
                    <p className="text-[16px] opacity-0.8">
                      {solution?.description}
                    </p>

                    {solution?.content?.data?.content && (
                      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        <Link
                          to={`${solution?.slug}`}
                          className="no-underline text-black"
                        >
                          Read More..
                        </Link>
                      </button>
                    )}
                  </section>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Solution" />

export const query = graphql`
  query MyQuery {
    allStrapiSolutionCategory(sort: { priority: ASC }) {
      edges {
        node {
          type
        }
      }
    }
    allStrapiSolution(sort: { solution_category: { priority: ASC } }) {
      nodes {
        slug
        title

        description
        content {
          data {
            content
          }
        }
        image {
          localFile {
            url
          }
        }
        type
      }
    }
  }
`

export default SolutionPage

// const navLi = document.querySelectorAll("ul li a")
// console.log(sections)
// console.log(navLi)

// window.onscroll = () => {
//   let current = ""

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop
//     if (window.pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id")
//       console.log(current, "current")
//     }
//   })

//   navLi.forEach(li => {
//     li.classList.remove("text-green-500")
//     console.log(li, "list", li.href, "<----")
//     if (li.href.includes(current)) console.log("True")
//     if (li.href.includes(current)) {
//       li.classList.add("text-green-500")
//       console.log(li, "classlist")
//     }
//   })
// }
