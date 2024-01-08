// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import * as styles from "../components/index.module.css"
import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
// import Help from "../components/help"
import StickySidebar from "sticky-sidebar"

const ServicePage = ({ data }) => {
  const services = data.allStrapiService.nodes
  const services_category = data.allStrapiSeviceCategory.nodes
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [sidebarInstance, setSidebarInstance] = useState(null)
  const sidebarRef = useRef(null)
  const [activeSectionId, setActiveSectionId] = useState(
    services_category[0]?.slug
  )
  console.log(activeSectionId, "activesectionid")

  //this useEffect for stick sidebar only for large screen
  useEffect(() => {
    const initStickySidebar = () => {
      if (sidebarRef.current && window.innerWidth >= 1024 && !sidebarInstance) {
        const newSidebarInstance = new StickySidebar(sidebarRef.current, {
          // Configure options as needed, like topSpacing, bottomSpacing, etc.
          // Example:
          topSpacing: 150,
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

  //for scroll event part

  useEffect(() => {
    //view port options configuration for scroll event part
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "-50px 0px 0px 0px",
      threshold: 0.8, // 0 to 1: Percentage of the section's visibility required to trigger the callback
    }

    //observer for entries section
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
      <section className="service-page-section relative my-[200px]">
        <div className="container h-full mx-auto w-[90%] p-5 m-3 my-10 p-10 mx-5">
          <div className="service-header">
            <h1 className="text-[46px] font-semibold">
              Services<span className="text-green-500">.</span>
            </h1>
            <h3 className="text-[28px] font-semibold">Giving shape to ideas</h3>
            <p className="text-[18px]  opacity-0.8">
              We build high quality digital products and we also ensure rapid
              on-boarding of applications by automating end-to-end delivery
              pipeline and facilitate continuous integration and development
              across leading cloud platforms.
            </p>
          </div>
          {/* //start*/}
          <div className="main-container row my-8 p-5 flex relative flex-col lg:flex-row">
            <div
              ref={sidebarRef}
              className=" left-box w-full lg:w-1/2  w-[100%] "
            >
              <ul className="sticky top-[20vh] z-5">
                {services_category &&
                  services_category?.map((service, index) => {
                    console.log(service, "service")
                    return (
                      <li
                        key={index}
                        //onClick={() => setActiveTabIndex(index)}
                        //  const element = document.getElementById(service?.slug)
                        //   if (element) {
                        //     element.scrollIntoView({ behavior: "smooth" })
                        //   }
                        onClick={() => {
                          const element = document.getElementById(service?.slug)
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                        className={`m-2 p-2 cursor-pointer ${
                          service?.slug === activeSectionId && "text-green-500"
                        }`}
                      >
                        <a
                          // href={`#${service?.slug}`}
                          className={`no-underline  ${
                            service?.slug === activeSectionId &&
                            "text-green-500"
                          } `}
                        >
                          {service?.type}
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div className="right-box p-5 md:mx-5 w-full mt-[-40px]">
              {services &&
                services.map((service, index) => (
                  <section
                    key={index}
                    id={service?.slug}
                    className="h-auto md:h-[400px] text-start md:text-start w-full border border-gray-200 digital-product-box my-8 p-5 shadow-lg"
                  >
                    <h3 className="text-sm my-2 top-0 right-0 text-right mt-4">
                      {service?.type}
                    </h3>
                    <p className="text-[18px] sm:text-[20px] opacity-0.8 font-semibold">
                      {service?.sub_title}
                    </p>
                    <p className="text-[16px] opacity-0.8">
                      {service?.description}
                    </p>
                    <p className="text-[18px]">{service?.technology}</p>

                    {service?.content?.data?.content && (
                      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        <Link
                          to={`${service?.slug}`}
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
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Service" />
export const query = graphql`
  query MyQuery {
    allStrapiSeviceCategory(sort: { priority: ASC }) {
      nodes {
        type
        slug
      }
    }
    allStrapiService(sort: { piority: ASC }) {
      nodes {
        title
        technology
        sub_title
        slug
        description
        type
        content {
          data {
            content
          }
        }
      }
    }
  }
`

export default ServicePage
