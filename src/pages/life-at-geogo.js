import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import TermsCom from "../components/termsCom"
import { graphql } from "gatsby"

const LifeAtGeogoPage = ({ data }) => {
  const events = data?.allStrapiGallery?.nodes

  return (
    <Layout>
      <div className="Technology-Section my-[200px]">
        <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10 bg-white">
          <h2 className="px-3 mx-3 text-[40px] my-4">
            Life at Geogo<span className="text-green-500">.</span>
          </h2>
          <div className="bg-white h-[100%] py-6 sm:py-8 lg:py-12">
            {events &&
              events?.map((event, index) => {
                return (
                  <div
                    key={index}
                    className="mx-auto max-w-screen-2xl px-4 md:px-8"
                  >
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2  md:gap-4 xl:gap-6">
                      {event?.photos?.map((photo, index) => {
                        return (
                          <div
                            key={index}
                            className="transition transform duration-300 hover:scale-105"
                          >
                            <img
                              src={photo?.localFile?.url}
                              class="h-auto max-w-full rounded-lg"
                              alt="img"
                            />
                          </div>
                        )
                      })}
                    </div>

                    <p className="text-sm">
                      {event?.event}
                      <span className="mx-3">{event?.event_date}</span>
                    </p>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Life at Geogo" />

export const query = graphql`
  query MyQuery {
    allStrapiGallery {
      nodes {
        photos {
          localFile {
            url
          }
        }
        event
        event_description
        event_date
      }
    }
  }
`

export default LifeAtGeogoPage
