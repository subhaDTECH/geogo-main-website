import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TermsCom from "../components/termsCom"


const LifeAtGeogoPage = () => {
  return (
    <Layout>
      <div className="Technology-Section">
        <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10 bg-white">
        <div className="bg-white h-[100%] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex flex-col bg-transparent   py-2 px-4   rounded  gap-3 shadow-lg p-4">
            <strong>Program : </strong>
                <p className="hidden max-w-screen-sm  md:block text-[18px]">
                    This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.
                </p>
                <p>Date : 1 | 12 | 2024</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/IMG-20210412-WA0009-1024x587.jpg" alt=""/>
             </div>
             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-13-at-17.32.25-1-1024x472.jpeg" alt=""/>
             </div>
             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-13-at-17.32.25-1024x472.jpeg" alt=""/>
             </div>
             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/20210415_140149-min-1-1024x472.jpg" alt=""/>
             </div>
             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/IMG-20201213-WA0006-1024x766.jpg" alt=""/>
             </div>
             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/IMG-20201213-WA0014-1024x769.jpg" alt=""/>
             </div>

             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/IMG-20201213-WA0011-1024x769.jpg" alt=""/>
             </div>

             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://cms.geogo.in/wp-content/uploads/2021/07/IMG-20201213-WA0007-769x1024.jpg" alt=""/>
             </div>

             <div>
                  <img class="h-auto max-w-full rounded-lg" src="https://www.geogo.in/static/39f2b8e8254b9ec5061820d1c30cb6cf/20201213_113233_HDR-1.jpg" alt=""/>
             </div>



        </div>
    </div>
</div>

        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Life at Geogo" />

export default LifeAtGeogoPage
