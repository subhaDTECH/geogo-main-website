import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import "./service.css";
import OurClient from "./ourClient";
import Review from "./review";
import Technology from "./Technology";
import Post from "./post";

const Service = () => (
    <div className="Service-Section">
        <div className="container h-full mx-auto w-[100%] p-5 m-3 my-10 p-10">
            {/* first row  */}
             <h1 className="title">Our Core Services</h1>
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto ml-4">
                <div className="Service-box bg-white h-full w-full md:80vh  shadow-lg flex flex-row flex items-center justify-center">
                      <img className="Service-box-Img hidden md:block" src="https://www.geogo.in/static/d33a12b1ad81ea1491816ad451a4d817/Digital-Products-Engineering-img-1-min.jpg"/>
                      <div className="Service-text-container p-2 flex flex-col gap-1">
                       <h2 className="font-bold text-green-900 text-xl p-2">Digital Products Engineering</h2>
                       <h4 className="font-bold text-sm p-2">Web & Mobile Apps • UI & UX • Microservices • Cloud</h4>
                       <p className="Service-Paragraph">We touch every stage of the software product life cycle to help accelerate software development, software modernization initiatives to transform your digital product experiences. We deliver high quality digital products and help you leverage new technologies. We are the catalyst for the change that you want to see in your business.</p>
                      </div>
                </div>

                <div className="Service-box bg-white  h-full w-full md:80vh shadow-lg flex flex-row flex items-center justify-center">
                      <img className="Service-box-Img hidden md:block" src="https://www.geogo.in/static/d33a12b1ad81ea1491816ad451a4d817/Digital-Products-Engineering-img-1-min.jpg"/>
                      <div className="Service-text-container p-2 flex flex-col gap-1">
                       <h2 className="font-bold text-green-900 text-xl p-2">Agile Service Management</h2>
                       <h4 className="font-bold text-sm p-2">DevOps • CI-CD • Agile Process Design & Improvement</h4>
                       <p className="Service-Paragraph">With our DevOps as a service offering, we ensure rapid on-boarding of applications by automating end-to-end delivery pipeline and facilitate continuous integration and development across leading cloud platforms. We will help you leverage collaboration, tool-chain pipelines, monitoring, automation and Cloud adoption.</p>
                      </div>
                </div>
                
            </div>
            {/* end of first row  */}
            {/* start of second row  */}
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
                <div className="Service-box bg-white h-full w-full md:80vh  shadow-lg flex flex-row m-3 flex items-center justify-center">
                      <img className="Service-box-Img hidden md:block" src="https://www.geogo.in/static/1808555116bbf061970620a16cf8dab3/Business-Process-Automation-img-min.jpg"/>
                      <div className="Service-text-container p-2 flex flex-col gap-1">
                       <h2 className="font-bold text-green-900 text-xl p-2">Business Process Automation</h2>
                       <h4 className="font-bold text-sm p-2">Workflow Modelling • Automation • Integration</h4>
                       <p className="Service-Paragraph">Business Apps, Workflows, Analytics, Virtual Chat Agents - We enable you to automate your business processes to make it fast and effective. We work together to connect your various disparate systems to deliver business information at right place at right time through right medium..</p>
                      </div>
                </div>

                <div className="Service-box bg-white  h-full w-full md:80vh shadow-lg flex flex-row m-3 flex items-center justify-center">
                      <img className="Service-box-Img hidden md:block" src="https://www.geogo.in/static/a44ad88c8cf293759a9257427ed80a44/Recruitment-Training-img-min.jpg"/>
                      <div className="Service-text-container p-2 flex flex-col gap-1">
                       <h2 className="font-bold text-green-900 text-xl p-2">Agile Service Management</h2>
                       <h4 className="font-bold text-sm p-2">DevOps • CI-CD • Agile Process Design & Improvement</h4>
                       <p className="Service-Paragraph">With our DevOps as a service offering, we ensure rapid on-boarding of applications by automating end-to-end delivery pipeline and facilitate continuous integration and development across leading cloud platforms. We will help you leverage collaboration, tool-chain pipelines, monitoring, automation and Cloud adoption.</p>
                      </div>
                </div>
                
            </div>

            {/* end of second row  */}
        </div>

        {/* team part section  */}
        <div className="service-team-section py-10 my-10">
              <div className="container h-full mx-auto w-[100%] p-5 m-3 my-10 p-10">
                      <h2 className="title my-10">We’re a team of thinkers and problem solvers</h2>

                      {/* first row of team  */}
                   <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto m-3">
                      <div className="h-full w-full  flex flex-row  flex md:items-center border border-gray-200 hover:bg-white rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
                      <div className="Img-container hidden md:block">
                        <img className="team-Img hidden md:block" src= "https://www.geogo.in/static/9afe3591474a8d95a4555b174dcbb739/Screenshot-2021-04-13-at-3.46.22-PM.jpg"/>
                     </div>
                           <div className="flex flex-col   p-3 m-3">
                                <p >We believe</p>
                                 <h2 className="title">Simplicity is the Key</h2>
                                 <span className="py-3 my-5"><a href="#" className="no-underline">See Our Work</a></span>
                           </div>
                       </div>

                       <div className="h-full w-full flex flex-row  flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
                       <div className="Img-container">
                        <img className="team-Img" src= "https://www.geogo.in/static/942c1612824f412bed0d239bb65f30e4/Screenshot-2021-04-13-at-3.48.12-PM.jpg"/>
                     </div>
                           <div className="flex flex-col   p-3 m-3">
                                <p>We practice</p>
                                 <h2 className="title">Creativity at Core</h2>
                                 <span className="py-3 my-5 "><a href="#" className="no-underline">See Our Work</a></span>
                           </div>
                       </div>
                           
                      </div>

                      {/* end of team row  */}

                      {/* start of team row  second  */}
                      <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto m-3">
                      <div className="h-full w-full flex flex-row  flex items-center border border-gray-200 hover:bg-white rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
                      <div className="Img-container">
                        <img className="team-Img" src= "https://www.geogo.in/static/4558d3961acb15314bd59d7ad9d636ce/Agile-e1618309457190-min.png"/>
                     </div>
                           <div className="flex flex-col   p-3 m-3">
                                <p>Our process is</p>
                                 <h2 className="title">Always Agile</h2>
                                 <span className="py-3 my-5"><a href="#" className="no-underline">More about our process</a></span>
                           </div>
                       </div>

                       <div className="h-full w-full flex flex-row  flex items-center border border-gray-200 hover:bg-white rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
                       <div className="Img-container">
                        <img className="team-Img" src= "https://www.geogo.in/static/5dfa26afaec2863684b67d33a36f2236/Screenshot-2021-04-13-at-3.58.29-PM.jpg"/>
                     </div>
                           <div className="flex flex-col   p-3 m-3">
                                <p>Powered by</p>
                                 <h2 className="title">Passionate People</h2>
                                 <span className="py-3 my-5"><a href="#" className="no-underline">Join our team</a></span>
                           </div>
                       </div>
                           
                      </div>


                      {/* end of team row second  */}
              </div>
            <div className="btn-continer mx-auto my-10 text-center">
              <button class="border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                 LEARN MORE ABOUT OUR COMPANY
               </button>
            </div>

            <OurClient/>
            <Review/>
            <Technology/>
            <Post/>

        </div>
    </div>

)

export default Service;
