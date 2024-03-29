import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
const PortfolioPage = () => {
  return (
    <Layout>
      <div className="Technology-Section  my-[100px] sm:my-[200px]">
        <div className="container h-full mx-auto w-[95%]  m-3 my-10 p-10 bg-white">
          <div className="py-10">
            <h2 className="text-4xl md:text-6xl font-semibold p-5">
              Our Projects<span className="text-green-500">.</span>
            </h2>
          </div>

          <div className="flex   flex-col md:flex-row justify-center py-10 gap-4">
            <div className="content-box shadow border border-gray-200 w-full md:w-1/2  mx-auto p-5">
              <div>
                <h2 className="text-xl sm:text-3xl">Project Title</h2>
              </div>
              <p className="text-[17px]">
                Agile is a set of principles or methodologies that aims to
                maximise efficiency and minimise wastage in a process. It adopts
                well in the process of software development and maintenance.
              </p>
              <p className="text-[17px]">
                Agile as a software project management process is highly adopted
                across organisations globally owing to its simplicity and
                effectiveness.
              </p>
              <div className="img-conatner">
                <img alt="img" src="" />
              </div>

              <p className="text-[17px]">
                <strong>TechStack</strong> : Reactjs , Nodejs ,Redis , Kafka .
              </p>
            </div>

            <div className="content-box shadow border border-gray-200 w-full md:w-1/2  mx-auto p-5">
              <div>
                <h2 className="text-xl sm:text-3xl">Project Title</h2>
              </div>
              <p className="text-[17px]">
                Agile is a set of principles or methodologies that aims to
                maximise efficiency and minimise wastage in a process. It adopts
                well in the process of software development and maintenance.
              </p>
              <p className="text-[17px]">
                Agile as a software project management process is highly adopted
                across organisations globally owing to its simplicity and
                effectiveness.
              </p>
              <div className="img-conatner">
                <img alt="img" src="" />
              </div>

              <p className="text-[17px]">
                <strong>TechStack</strong> : Reactjs , Nodejs ,Redis , Kafka .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default PortfolioPage
