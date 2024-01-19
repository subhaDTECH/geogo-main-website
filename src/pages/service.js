// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import * as styles from "../components/index.module.css"

// row my-8 p-5 w-[100%] flex flex-row relative
//left-sidebar-box lg:w-1/2 hidden md:block
//w-[100%] top-[-50px]
import HiringImg from "../images/hiring-img5.jpg"
import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import StickyBox from "react-sticky-box"
import { StickyContainer, Sticky } from "react-sticky"

const ServicePage = ({ data }) => {
  const services = data.allStrapiService.nodes
  const services_category = data.allStrapiSeviceCategory.nodes
  // const [activeTabIndex, setActiveTabIndex] = useState(0)

  const [sidebarInstance, setSidebarInstance] = useState(null)
  const sidebarRef = useRef(null)
  const sectionsRef = useRef(null)
  const stickyRef = useRef(null)

  const [activeSectionId, setActiveSectionId] = useState(
    services_category[0]?.slug
  )

  useEffect(() => {
    //view port options configuration for scroll event part
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "-50px 0px 0px 0px",
      threshold: 0.8, // 0 to 1: Percentage of the section's visibility required to trigger the callback
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id)
          console.log(entry.target.id)
        }
      })
    }, options)

    const sections = sectionsRef.current.querySelectorAll("section")
    console.log("all section", sections)
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <Layout>
      <StickyContainer>
        <section className="service-page-section relative my-[150px] sm:my-[180px]">
          <div className="container h-full w-full mx-auto lg:w-[90%]  m-3 my-10 p-3 sm:p-10">
            {/* ... (existing code) */}

            <div className="service-header  sm:mt-[100x] ">
              <h1 className="text-[36px] sm:text-[46px]  font-semibold">
                Services<span className="text-green-500">.</span>
              </h1>
              {/* <h3 className="text-[28px] font-semibold">
                Giving shape to ideas
              </h3>
              <p className="text-[21px]  opacity-0.8">
                We build high quality digital products and we also ensure rapid
                on-boarding of applications by automating end-to-end delivery
                pipeline and facilitate continuous integration and development
                across leading cloud platforms.
              </p> */}
            </div>

            <div className="row my-8 p-5 flex  flex-col lg:flex-row relative text-start">
              <div className="left-box   w-full lg:w-1/2 hidden lg:block">
                <Sticky>
                  {({ style }) => (
                    <ul
                      ref={stickyRef}
                      // className="top-[400px]"
                      style={{
                        ...style,
                        zIndex: 1000,
                        top: style.isSticky ? "100px" : "100px",
                      }}
                    >
                      {services_category &&
                        services_category?.map((service, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              // setActiveSectionId(index)
                              const element = document.getElementById(
                                service?.type
                              )
                              if (element) {
                                element.scrollIntoView({
                                  behavior: "smooth",
                                })
                              }
                            }}
                            className={`m-2 p-2 cursor-pointer ${
                              service?.type === activeSectionId &&
                              "text-green-500"
                            }`}
                          >
                            <a
                              className={`no-underline  ${
                                service?.type === activeSectionId &&
                                "text-green-500"
                              } `}
                            >
                              {service?.type}
                            </a>
                          </li>
                        ))}
                    </ul>
                  )}
                </Sticky>
              </div>

              <div
                ref={sectionsRef}
                className="right-box   w-full  top-[-50px]"
              >
                {services &&
                  services.map((service, index) => (
                    <section
                      // ref={el => (sectionsRef.current[index] = el)}
                      key={index}
                      id={service?.type}
                      className=" h-auto lg:h-[400px] text-start md:text-start w-[100%] border  border-gray-300 digital-product-box my-8 p-2 shadow-lg"
                    >
                      <div className="w-full p-4">
                        <h3 className="text-sm my-2 top-0 right-0 text-right mt-4">
                          {service?.type}
                        </h3>
                        <p className="text-[22px] sm:text-[20px] opacity-0.8 font-semibold">
                          {service?.sub_title}
                        </p>
                        <p className="text-[18px] opacity-0.8 text-[##000000DE]">
                          {service?.description}
                        </p>
                        <p className="text-[20px] font-normal">
                          {service?.technology}
                        </p>

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
                      </div>
                    </section>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="Services" />
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
