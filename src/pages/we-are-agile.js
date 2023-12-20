import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TermsCom from "../components/termsCom"

const WeAerAgilePage = () => {
    return (
        <Layout>
             <div className="Technology-Section">
                <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
                <h2 className="text-4xl font-semibold">We are Agile</h2>
                <div className="flex items-center justify-center">
                   <div className="title-container">
                      <h2 className="text-4xl font-semibold">We are Agile</h2>
                   </div>
                    <div className="content-box w-1/2 bg-red-400 mx-auto">
                                   <p>Agile means to move quickly but with ease.</p>
                                   <p>Agile is a set of principles or methodologies that aims to maximise efficiency and minimise wastage in a process. 
                                    It adopts well in the process of software development and maintenance.</p>
                                    <p>Agile as a software project management process is highly adopted across organisations globally owing to its simplicity and effectiveness.</p>
                      </div>
                </div>
                </div>
                  </div>
        </Layout>
    )
}

export const Head = () => <Seo title="we are agile" />

export default WeAerAgilePage;
