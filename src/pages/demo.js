// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import * as styles from "../components/index.module.css"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"

const DemoPage = ({ data }) => {
  

const services = data.allStrapiService.nodes;
const services_category=data.allStrapiSeviceCategory.nodes;


console.log(services,"ser");
console.log(services_category,"cat")

  return (
    <Layout>
      <section className="service-page-section relative">
        <div className="container h-full mx-auto w-[90%] p-5 m-3 my-10 p-10 mx-5">
          <div className="service-header">
            <h1 className="text-[46px] font-semibold">Services.</h1>
            <h3 className="text-[28px] font-semibold">Giving shape to ideas</h3>
            <p className="text-[18px]  opacity-0.8">
              We build high quality digital products and we also ensure rapid
              on-boarding of applications by automating end-to-end delivery
              pipeline and facilitate continuous integration and development
              across leading cloud platforms.
            </p>
          </div>

          <div className="row my-8 p-5 flex flex-col lg:flex-row">
            <div className="left-box w-full lg:w-1/2  sticky">
              <ul>
              {services_category &&
                  services_category?.map((service, index) => {
                    return (
                      <li key={index} className="m-2 p-2 cursor-pointer">
                        <a
                          href={`#${service?.slug}`}
                          className="no-underline text-black"
                        >
                          {service?.type}
                        </a>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div className="right-box p-5 md:mx-5 w-full">
            

              {services &&
                services
                  .map((service, index) => (
                    <div
                      key={index}
                      id={service?.slug}
                      className=" text-justify md:text-start w-full border digital-product-box my-8 p-5 shadow-lg"
                    >
                     <h3 className="text-sm my-2 top-0 right-0 text-right">{service?.slug}</h3>
                      <p className="text-[20px] opacity-0.8 font-semibold">
                        {service?.sub_title}
                      </p>
                      <p className="text-[16px] opacity-0.8">
                        {service?.description}
                      </p>
                      <p className="text-[18px]">{service?.technology}</p>

                      {service?.content?.data?.content && (
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                          <Link
                            to={`${service?.slug}`}
                            className="no-underline text-black"
                          >
                            Read More..
                          </Link>
                        </button>
                      )}
                    </div>
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
    allStrapiSeviceCategory(sort: {priority: ASC}) {
      nodes {
        type
        slug
      }
    }
    allStrapiService(sort: {piority: ASC}) {
      nodes {
        title
        technology
        sub_title
        slug
        description
        content {
          data {
            content
            
          }
        }
      }
    }
  }
`

export default DemoPage
