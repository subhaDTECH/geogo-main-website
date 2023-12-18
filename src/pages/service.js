import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const ServicePage = () => (
  <Layout>
   <section className="service-page-section">
   <div className="container h-full mx-auto w-[90%] p-5 m-3 my-10 p-10 mx-5">
     <div className="service-header">
            <h1 className="text-[46px] font-semibold">Services.</h1>
            <h3 className="text-[28px] font-semibold">Giving shape to ideas</h3>
            <p className="text-[18px]  opacity-0.8">We build high quality digital products and we also ensure rapid on-boarding of applications by
               automating end-to-end delivery pipeline and facilitate continuous integration and development across 
               leading cloud platforms.</p>
     </div>

     <div className="row my-8 p-5 flex flex-col lg:flex-row ">
          <div className="left-box w-full lg:w-1/2 "> 
             <ul>
              <li className="m-2 p-2">Digital Products Engineering</li>
              <li className="m-2 p-2">Agile Service Management</li>
              <li className="m-2 p-2">Business Process Automation</li>
              <li className="m-2 p-2">Recruitment & Training</li>
             </ul>
          </div>
          <div className="right-box p-5 mx-5 w-full">
               <h1 className="text-4xl font-semibold">Digital Products Engineering</h1>
                 <div className="digital-product-box my-8 p-5 shadow-lg">
                       <h2 className="text-2xl font-semibold">Enterprise-grade digital product, for your unique business needs</h2>
                       <p className="text-[16px] opacity-0.8">We touch every stage of the software product life cycle to help accelerate software development, software modernization initiatives to transform your digital product experiences. We deliver high quality digital products and help you leverage new technologies. 
                        We are the catalyst for the change that you want to see in your business.</p>
                        <p className="text-[18px]">Microservices</p>
                        <p className="text-[18px]">Mobile App Development</p>
                        <p className="text-[18px]">UI & UX</p>
                        <p className="text-[18px]">Web Development</p>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                              Read More..
                             </button>
                 </div>
                 <h1 className="text-4xl font-semibold ">Agile Service Management</h1>
                 <div className="agile-service-box my-8 p-5 shadow-lg">
                       <h2 className="text-2xl font-semibold">Agile services, built to maximize the speed of doing business.</h2>
                       <p className="text-[16px] opacity-0.8">With our DevOps as a service offering, we ensure rapid on-boarding of applications by automating end-to-end delivery pipeline and facilitate continuous integration and development across leading cloud platforms. We will help 
                       you leverage collaboration, tool-chain pipelines, monitoring, automation and Cloud adoption..</p>
                        <p className="text-[18px]">Microservices</p>
                        <p className="text-[18px]">Mobile App Development</p>
                        <p className="text-[18px]">UI & UX</p>
                        <p className="text-[18px]">Web Development</p>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                              Read More..
                             </button>
                 </div>

                 <h1 className="text-4xl font-semibold ">Business Process Automation</h1>

                 <div className="agile-service-box my-8 p-5 shadow-lg">
                       <h2 className="text-2xl font-semibold">Automated processes for seamless business operations.</h2>
                       <p className="text-[16px] opacity-0.8">Business Apps, Workflows, Analytics, Virtual Chat Agents – We enable you to automate your business processes to make it fast and effective. We work together to connect your various disparate
                        systems to deliver business information at right place at right time through right medium.</p>
                        <p className="text-[18px]">Microservices</p>
                        <p className="text-[18px]">Mobile App Development</p>
                        <p className="text-[18px]">UI & UX</p>
                        <p className="text-[18px]">Web Development</p>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                              Read More..
                        </button>
                 </div>

                 <h1 className="text-4xl font-semibold">Recruitment & Training</h1>

                 <div className="agile-service-box my-8 p-5 shadow-lg">
                       <h2 className="text-2xl font-semibold">We help organisations with Remote Hiring – Assessment – Outsourcing – Trainings.</h2>
                       <p className="text-[16px] opacity-0.8">People resource are key to your business success. We go beyond technology and provide solutions by helping you to hire right talent.
                        You can leverage our remote hiring tools and processes to make the hiring process faster. We get things done by setting up your Offshore work centres if needed..</p>
                        <p className="text-[18px]">Campus Hiring</p>
                        <p className="text-[18px]">Orientation</p>
                        <p className="text-[18px]">Training</p>
                        <p className="text-[18px]">Web Development</p>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                              Read More..
                        </button>
                 </div>
          </div>
     </div>
    </div>
   </section>
     
 </Layout>
)


export const Head = () => <Seo title="Service" />

export default ServicePage
