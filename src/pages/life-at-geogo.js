import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import TermsCom from "../components/termsCom"
import { graphql } from "gatsby"

const LifeAtGeogoPage = ({ data }) => {
  const events = data?.allStrapiGallery?.nodes
  console.log(events, "events")
  return (
    <Layout>
      <div className="Technology-Section my-[200px]">
        <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10 bg-white">
          <div className="bg-white h-[100%] py-6 sm:py-8 lg:py-12">
            {events &&
              events?.map((event, index) => {
                return (
                  <div
                    key={index}
                    className="mx-auto max-w-screen-2xl px-4 md:px-8"
                  >
                    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                      <div className="flex flex-col bg-transparent w-full lg:w-1/3   px-4   rounded  gap-3">
                        <strong>{event?.event} </strong>
                        <p className="text-[18px]">{event?.event_date}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                      {event?.photos?.map((photo, index) => {
                        return (
                          <div>
                            <img
                              key={index}
                              src={photo?.localFile?.url}
                              class="h-auto max-w-full rounded-lg"
                              alt="img"
                            />
                          </div>
                        )
                      })}
                    </div>
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
