// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";

// const services = data.allStrapiService.nodes
// const services_category = data.allStrapiSeviceCategory.nodes
// const [activeTabIndex, setActiveTabIndex] = React.useState(0)
import * as React from "react"
import { Link } from "gatsby"
const Help = ({ data }) => {
  const services = data.allStrapiService.nodes
  const services_category = data.allStrapiSeviceCategory.nodes
  const [activeTabIndex, setActiveTabIndex] = React.useState(0)

  return (
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
        {/* <div className="main-container row my-8 p-5 flex relative flex-col lg:flex-row">
            <div className="left-box w-full lg:w-1/2  w-[100%] ">
              <ul className="sticky top-[20vh] z-5">
                {services_category &&
                  services_category?.map((service, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setActiveTabIndex(index)}
                        className={`m-2 p-2 cursor-pointer`}
                      >
                        <a
                          href={`#${service?.slug}`}
                          className={`no-underline   ${
                            activeTabIndex === index
                              ? "text-green-500"
                              : "text-black"
                          }`}
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
                services.map((service, index) => (
                  <div
                    key={index}
                    id={service?.slug}
                    className=" text-start md:text-start w-full border border-gray-200 digital-product-box my-8 p-5 shadow-lg"
                  >
                    <h3 className="text-sm my-2 top-0 right-0 text-right">
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
          </div> */}

        <div className="main-container row my-8 p-5">
          <div className="left-box-service">
            <ul className="">
              {services_category &&
                services_category?.map((service, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => setActiveTabIndex(index)}
                      className={`m-2 p-2 cursor-pointer`}
                    >
                      <a
                        href={`#${service?.slug}`}
                        className={`no-underline   ${
                          activeTabIndex === index
                            ? "text-green-500"
                            : "text-black"
                        }`}
                      >
                        {service?.type}
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className="right-box-service p-5 md:mx-5 ">
            {services &&
              services.map((service, index) => (
                <div
                  key={index}
                  id={service?.slug}
                  className=" text-start md:text-start w-full border border-gray-200 digital-product-box my-8 p-5 shadow-lg"
                >
                  <h3 className="text-sm my-2 top-0 right-0 text-right">
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

        {/* end  */}
      </div>
    </section>
  )
}

export default Help

// *******************************************service useffect for stikcy sidebar *************
// useEffect(() => {
//   let sidebarInstance = null

//   const initStickySidebar = () => {
//     if (sidebarRef.current) {
//       sidebarInstance = new StickySidebar(sidebarRef.current, {
//         // Configure options as needed, like topSpacing, bottomSpacing, etc.
//         // Example:
//         topSpacing: 120,
//         bottomSpacing: 20,
//       })
//     }
//   }

//   const destroyStickySidebar = () => {
//     if (sidebarInstance) {
//       sidebarInstance.destroy()
//       sidebarInstance = null
//     }
//   }

//   // Initialize the sticky sidebar only for larger screens (desktop)
//   if (window.matchMedia("(min-width: 1024px)").matches) {
//     initStickySidebar()
//   }

//   // Clean up when the component unmounts
//   return () => {
//     destroyStickySidebar()
//   }
// }, [])

// ***********************End of useEffect with sticky sidebar *******************

//*************useEffect for sticky sidebar in solution section*****

// useEffect(() => {
//   let sidebarInstance = null

//   const initStickySidebar = () => {
//     if (sidebarRef.current) {
//       sidebarInstance = new StickySidebar(sidebarRef.current, {
//         // Configure options as needed, like topSpacing, bottomSpacing, etc.
//         // Example:
//         topSpacing: 120,
//         bottomSpacing: 20,
//       })
//     }
//   }

//   const destroyStickySidebar = () => {
//     if (sidebarInstance) {
//       sidebarInstance.destroy()
//       sidebarInstance = null
//     }
//   }

//   // Initialize the sticky sidebar only for larger screens (desktop)
//   if (window.matchMedia("(min-width: 1024px)").matches) {
//     initStickySidebar()
//   }
//   console.log("call")
//   // Clean up when the component unmounts
//   return () => {
//     destroyStickySidebar()
//   }
// }, [window.innerWidth])

// **********************end of sticky sidebar of solutions section ********

//************************************** agile-service-management(inside templates)********************** */
// import * as React from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import AgileServiceCom from "../components/ServiceCom/agileService"

// const AgileServiceManageMent = () => (
//   <Layout>
//     <AgileServiceCom />
//   </Layout>
// )

// export const Head = () => <Seo title="Agile Service" />

// export default AgileServiceManageMent

//**************end of agile-service-management*************************************** */

//**************start of business-process-management******************

// import * as React from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import BusinessProcessAutomationCom from "../components/ServiceCom/businessProcess"

// const BusinessProcessAutomation = () => (
//   <Layout>
//     <BusinessProcessAutomationCom />
//   </Layout>
// )

// export const Head = () => <Seo title="Business process Automation" />

// export default BusinessProcessAutomation

//end

// start of digital product development
// import * as React from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import DigitalProductCom from "../components/ServiceCom/digitalProduct.js"

// const DigitalProductDevelopment = () => (
//   <Layout>
//     <DigitalProductCom />
//   </Layout>
// )

// export const Head = () => <Seo title="Digital Product development" />

// export default DigitalProductDevelopment

//industry page
// import * as React from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// // import MsmeSolutionCom from "../components/MsmeSolution";

// const IndustryPage = () => (
//   <Layout>
//     <p>Industry page</p>
//   </Layout>
// )

// export const Head = () => <Seo title="industry" />

// export default IndustryPage

//MSME Solutions
//import * as React from "react";
// import Layout from "../components/layout";
// import Seo from "../components/seo";
// import MsmeSolutionCom from "../components/SolutionCom/MsmeSolutionCom.js"

// const MsmeSolution= () => (
//   <Layout>

//     <MsmeSolutionCom/>
//   </Layout>
// )

// export const Head = () => <Seo title="solution" />

// export default MsmeSolution

//RecruitmentTraining

// import * as React from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

// import RecruitmentTrainingCom from "../components/ServiceCom/recruitmentService"

// const RecruitmentTraining = () => (
//   <Layout>
//     <RecruitmentTrainingCom />
//   </Layout>
// )

// export const Head = () => <Seo title="recruitment training" />

// export default RecruitmentTraining

//terms page components

// import * as React from "react"
// import ReactMarkdown from "react-markdown"

// const TermsCom = ({ data }) => {
//   //const privacyData = data.allStrapiTerm.nodes[0]
//   console.log(data, "terms")

//   return (
//     <div className="Technology-Section my-[200px]">
//       <div className="container h-full mx-auto w-[80%] md:w-[50%] p-5 m-3 my-10 p-10 ">
//         <h2 className="text-3xl  sm:text-4xl font-semibold">
//           {/* // {privacyData.title} */}
//         </h2>
//         <div>
//           {/* <ReactMarkdown>{privacyData.content.data.content}</ReactMarkdown> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TermsCom

//contact form  page
// import * as React from "react"
// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import ContactCom from "./contactCom";

// const Contact = () => {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   // const isBrowser = typeof window !== "undefined"

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async e => {
//     e.preventDefault()

//     if (!formData.name || !formData.message || !formData.email) {
//       toast.success("All field require !", {
//         position: toast.POSITION.TOP_RIGHT,
//       })
//       //alert("please all the field ")

//       return
//     }
//     try {
//       const response = await fetch(
//         `${process.env.STRAPI_API_URL}/api/contacts`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             data: {
//               // Replace these with your form field values
//               name: formData.name,
//               email: formData.email,
//               message: formData.message,
//               // Add other fields as needed based on your Strapi collection schema
//             },
//           }),
//         }
//       )

//       if (response.ok) {
//         // Data sent successfully
//         toast.success(" Message sent successfully !", {
//           position: toast.POSITION.TOP_RIGHT,
//         })
//         // alert(" Data sent successfully ")
//         console.log("Data sent successfully")

//         //set the from again
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//         })
//       } else {
//         // Handle errors if any
//         toast.error("Error sending data ", {
//           position: toast.POSITION.TOP_RIGHT,
//         })
//         console.error("Error sending data")
//       }
//     } catch (error) {
//       toast.error("Error sending data ", {
//         position: toast.POSITION.TOP_RIGHT,
//       })
//       console.error("Error:", error)
//     }
//   }

//   return (
//     <section className="text-gray-600 body-font relative py-[100px] md:py-[100px]">
//       <ContactCom />
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col text-center w-full mb-12">
//           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
//             Contact Us<span className="text-green-500">.</span>
//           </h1>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <ToastContainer />
//           <div className="lg:w-1/2 md:w-2/3 mx-auto">
//             <div className="flex flex-wrap -m-2">
//               <div className="p-2 w-1/2">
//                 <div className="relative">
//                   <p for="name" class="leading-7 text-sm text-gray-600">
//                     Name
//                   </p>
//                   <input
//                     autoComplete="off"
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//               </div>
//               <div class="p-2 w-1/2">
//                 <div class="relative">
//                   <p for="email" class="leading-7 text-sm text-gray-600">
//                     Email
//                   </p>
//                   <input
//                     autoComplete="off"
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </div>
//               </div>
//               <div className="p-2 w-full">
//                 <div className="relative">
//                   <p for="message" class="leading-7 text-sm text-gray-600">
//                     Message
//                   </p>
//                   <textarea
//                     autoComplete="off"
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                   ></textarea>
//                 </div>
//               </div>
//               <div class="p-2 w-full">
//                 <button
//                   type="submit"
//                   className="flex mx-auto text-white bg-[#013220] border-0 py-2 px-8 focus:outline-none hover:bg-[#fff] hover:text-green-500 hover:border hover:border-green-400 rounded text-lg"
//                 >
//                   Button
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Contact

//recruitmentService compomenet

// import * as React from "react"
// import "../hero.css"
// import HiringImg1 from "../../images/hiring-img1.jpg";
// import HiringImg3 from "../../images/hiring-img3.jpg";
// import HiringImg4 from "../../images/hiring-img4.jpg";
// import HiringImg5 from "../../images/hiring-img5.jpg";

// const RecruitmentTrainingCom = () => (
//   <div className="Recruitment-Section">
//     <div className="container  w-[90%] md:w-[90%] p-5 mx-auto my-10">
//         <h1 className="text-5xl font-semibold leading-[70px] ml-5">recruitment <br></br> and training</h1>

//         <div className="container flex flex-col md:flex-row justify-center py-5 my-10">
//              <div className="w-full md:w-1/2 p-5">
//                 <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">We help businesses with Remote Hiring – Assessment – Outsourcing – Trainings</h3>
//              </div>
//               <div className="w-full md:w-1/2">
//                 <p className="text-[18px]">At GEOGO we help you take your idea to market. But we don’t stop there. We go beyond it to ensure that reach the next level.</p>
//                 <p className="text-[18px]">  As part of that commitment, we also help our clients to set up their own Tech Team so that the business becomes self-sufficient and scales by itself.</p>

//                 <p className="text-[18px]">As part of the GEOGO service we offer :</p>

//                   <ul>
//                     <li>Campus hiring setup and assistance</li>
//                     <li>Technical Assessment of candidates for the desired job role</li>
//                     <li>Training and Orientation for hired candidates to get started on the job.</li>
//                     <li>Hiring and offering Contractual role on GEOGO payroll</li>
//                     <li>HR Policy Formation.</li>
//                     <li>HR Process Implementation</li>

//                   </ul>

//               </div>
//         </div>

//         <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//              <div className="w-full md:w-1/2 p-5 my-5">
//                 <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Remote hiring</h3>
//                 <p className="text-[18px] px-4">Make your hiring process and decision easier and accurate with ScoutLive (our remote hiring platform). From conducting tests to automated video interviews to post offer engagement, our platform connects all dots.</p>
//                  <p className="text-[18px] px-4">In post COVID era, where on-campus drives are almost next to impossible, our ecosystem aims to find the right talent for you, remotely.</p>
//                   <p className="text-[18px] px-4">Not only that, we even do the post offer engagement to:</p>
//                   <ul>
//                     <li>Identify ‘ghosting’ earlier</li>
//                     <li>Continuous engagement with offered candidates resulting in less drop outs.</li>
//                     <li>Self train to make induction process faster</li>
//                   </ul>
//              </div>
//               <div className="w-full md:w-1/2 my-12 p-10">
//                  <img src={HiringImg4} alt="img" />
//               </div>
//         </div>

//         <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//              <div className="w-full md:w-1/2 p-5 my-5">
//                 <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Assessment</h3>
//                 <p className="text-[18px] px-4">Measure your candidates on skill, personality & ability. Our ScoutLive ecosystem aims to simplify your hiring process and find the right talent for you.</p>

//                   <p className="text-[18px] px-4">We conduct:</p>
//                   <ul>
//                     <li>Coding tests on C, C++, Java, Python, Ruby, PHP, JavaScript and more to evaluate hands-on technical, analytical and problem solving skills of a candidate.</li>
//                     <li>Aptitude tests to measure innate, learned or acquired ability of an individual to perform certain tasks. Aptitude tests inculcate many factors like Numerical reasoning, verbal reasoning, abstract reasoning, speed, accuracy and more.</li>
//                     <li>Psychometric tests to evaluate a candidate’s decision making, intelligence and motivation to find his/her psychological compatibility for the intended position.</li>
//                   </ul>
//              </div>
//               <div className="w-full md:w-1/2 my-12 p-10">
//                  <img alt="img" src={HiringImg3} />
//               </div>
//         </div>

//         <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//              <div className="w-full md:w-1/2 p-5 my-5">
//                 <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Training</h3>
//                 <p className="text-[18px] px-4">We also offer Training Services based on custom needs. Our team consists of multi domain professionals carrying experience of over 15 years and will help address your needs effectively.</p>

//              </div>
//               <div className="w-full md:w-1/2 my-12 p-10">
//                  <img alt="img" src={HiringImg5} />
//               </div>
//         </div>

//         <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//              <div className="w-full md:w-1/2 p-5 my-5">
//                 <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Outsourcing</h3>
//                 <p className="text-[18px] px-4">We hire and offer contractual role on GEOGO payroll. We also help to form policies guided by your company principles, regulatory norms, which form the guidelines of your organization. Policies don’t work unless Process are set out properly. Setting up HR Process helps in optimum implementation of policies & percolating down to employees. Effective communication of process and policies to employees has resulted in better adherence.</p>

//              </div>
//               <div className="w-full md:w-1/2 my-12 p-10">
//                  <img alt="img" src={HiringImg1} />
//               </div>
//         </div>

//     </div>
//   </div>
// )

// export default RecruitmentTrainingCom

// digitalProduct component

// import * as React from "react"
// import "../hero.css"
// // import AboutImg from "../../images/about-img.jpg";
// import SystemImg from "../../images/system-img.jpg"
// const DigitalProductCom = () => (
//   <div className="Digital-product-Section">
//     <div className="container  w-[90%] md:w-[90%] p-5 mx-auto my-10">
//       <h1 className="text-5xl font-semibold leading-[70px]">
//         digital <br></br> product development
//       </h1>

//       <div className="container flex flex-col md:flex-row justify-center py-5 my-10">
//         <div className="w-full md:w-1/2 p-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             We craft enterprise-grade digital products, for your business needs
//           </h3>
//         </div>
//         <div className="w-full md:w-1/2">
//           <p className="text-[18px]">
//             We’ve been building, best-in-class user experiences for our
//             customers since 2016 and we haven’t stopped yet. To date, we’ve
//             successfully deployed 25+ applications, for several different
//             business domains and we are still exploring for more. We have
//             experience across every major industry means that we can build a
//             custom solution to solve any challenge. We know how to create
//             products that would delight our customers and their end-users.
//           </p>
//           <p className="text-[18px]">
//             {" "}
//             Beyond expertise across several tools and technologies, we do
//             in-depth analysis of different real world use-cases in all phases of
//             the development lifecycle, which increases our productivity and
//             decreases wastage of efforts. We plan, code, build, test, deploy,
//             monitor, and support at scale, and our products are designed to be
//             future-proof and modular in structure to support any future scope of
//             development.
//           </p>

//           <p className="text-[18px]">
//             Our multi-functional team of developers collaborate with designers
//             and product architects at every stage, to keep the development
//             aligned towards end-user’s usage behaviour. As a result, our
//             products are not only exceptionally built, but offers a seamless
//             user experience.
//           </p>
//         </div>
//       </div>

//       <div className="container flex flex-col md:flex-row justify-center py-5 my-10">
//         <div className="w-full md:w-1/2 p-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             System design
//           </h3>
//           <p className="text-[18px] p-4">
//             Our experienced architects help our clients to brainstorm and
//             evaluate all possibilities to bring their ideas to life. The best
//             user experiences require a stong back-end foundation. Over past
//             years our team have excelled on integrating front-end apps and
//             websites with back-end systems and microservices. We evaluate all
//             possible alternatives depending on cost, go-to-market strategy,
//             performance, scaling, and security considerations.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2">
//           <img alt="img" src={SystemImg} />
//         </div>
//       </div>

//       <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//         <div className="w-full md:w-1/2 p-5 my-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Frontend engineering
//           </h3>
//           <p className="text-[18px] p-4">
//             We are obsessed with performance centric web apps and that drives
//             our engineers to achieve a new high when it comes to delivering a
//             high-speed UX. If you have a existing backend system which supports
//             API, we will integrate with that one too..
//           </p>
//           <p className="text-[18px] p-4">
//             With the help of data visualization tools we can help you visualize
//             all the data generated by your business processes, and create
//             dashboards to keep track of pretty much everything.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 my-12 p-10">
//           <p className="text-xl mt-10 py-4 font-semibold">EXPERTISE</p>
//           <div className="row grid grid-cols-2">
//             <p className="text-[18px]">React.Js</p>
//             <p className="text-[18px]">Gatsby.Js</p>
//             <p className="text-[18px]">Next.Js</p>
//             <p className="text-[18px]">NodeRED</p>
//             <p className="text-[18px]">D3.Js</p>
//             <p className="text-[18px]">Grafana</p>
//           </div>
//         </div>
//       </div>

//       <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//         <div className="w-full md:w-1/2 p-5 my-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Backend engineering
//           </h3>
//           <p className="text-[18px] p-4">
//             From the earliest stages of product conception and strategy
//             development, our seasoned architects focus on building robust
//             backend-system to meet your specific needs. Whether it’s integrating
//             with your existing systems or building a custom solution
//             from-scratch, our engineers have done it. We follow the API-First
//             Design approach, which allows any modern front-end framework,
//             library or mobile app to quickly integrate with the backend.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 my-12 p-10">
//           <p className="text-xl mt-10 py-4 font-semibold">EXPERTISE</p>
//           <div className="row grid grid-cols-2 gap-1">
//             <p className="text-[18px]">Ruby on Rails</p>
//             <p className="text-[18px]">PostgreSQL</p>
//             <p className="text-[18px]">TimescaleDb</p>
//             <p className="text-[18px]">NodeRED</p>
//             <p className="text-[18px]">Redis</p>
//             <p className="text-[18px]">Node.JS</p>
//             <p className="text-[18px]">MongoDB</p>
//             <p className="text-[18px]">Solr</p>
//             <p className="text-[18px]">Cloud Computing</p>
//           </div>
//         </div>
//       </div>

//       <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//         <div className="w-full md:w-1/2 p-5 my-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Mobile app development
//           </h3>
//           <p className="text-[18px] p-4">
//             When it comes to mobile app development, you want to go live on both
//             Android Play Store and iOS App Store, but you don’t want to bear
//             extra cost for two separate apps. Thats why Hybrid mobile app
//             frameworks comes to aid with their code once - deploy everywhere
//             feature. Means a single code base that looks and performs exactly
//             same can run on both Android and iOS platform.
//           </p>
//           <p className="text-[18px] p-4">
//             If that’s not your choice, our inhouse Android developers can
//             code-build-deploy native app with ease.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 my-12 p-10">
//           <p className="text-xl mt-10 py-4 font-semibold">EXPERTISE</p>
//           <div className="row grid grid-cols-2 gap-1">
//             <p className="text-[18px]">React Native</p>
//             <p className="text-[18px]">Flutter</p>
//             <p className="text-[18px]">Ionic</p>
//             <p className="text-[18px]">Android</p>
//           </div>
//         </div>
//       </div>

//       <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//         <div className="w-full md:w-1/2 p-5 my-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Search engine optimization
//           </h3>
//           <p className="text-[18px] p-4">
//             Our developers, designers and strategists collaborates with product
//             owners to make the web app search-engine friendly. Means Google and
//             other search engines can crawl each page on the website efficiently,
//             interpret the content effectively, and index it in their database.
//             Once indexed, they can then serve the most relevant and valuable web
//             pages to their users based on the topics they search for on the very
//             first page of the search results.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 my-12 p-10">
//           <p className="text-xl mt-10 py-4 font-semibold">EXPERTISE</p>
//           <div className="row grid grid-cols-2 gap-1">
//             <p className="text-[18px]">Google Analytics</p>
//             <p className="text-[18px]">Google AdWords</p>
//             <p className="text-[18px]">Google PageSpeed Index</p>
//           </div>
//         </div>
//       </div>

//       <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//         <div className="w-full md:w-1/2 p-5 my-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Security & compliance
//           </h3>
//           <p className="text-[18px] p-4">
//             Web application security is the process of protecting websites and
//             online services against different security threats that exploit
//             vulnerabilities in an application’s code. Common targets for web
//             application attacks are content management systems, database
//             administration tools and SaaS applications.
//           </p>
//           <p className="text-[18px]">
//             GEOGO has developed and follows an standard approach to ensure we
//             offer our clients comprehensive approaches to testing every project
//             before every deployment.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 my-12 p-10">
//           <p className="text-xl mt-10 py-4 font-semibold">TACTICS & STRATEGY</p>
//           <div className="row grid grid-cols-2 gap-1">
//             <p className="text-[18px]">SSL</p>
//             <p className="text-[18px]">CSRF Protection</p>
//             <p className="text-[18px]">XSS Prevention</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )

// export default DigitalProductCom

//businessProcess

// import * as React from "react"
// import "../hero.css"
// // import AboutImg from "../../src/images/about-img.jpg";
// // import BusinessProcessAutomation from "../templates/business-process-automation";
// const BusinessProcessAutomationCom = () => (
//   <div className="Digital-product-Section">
//     <div className="container  w-[90%] md:w-[90%] p-5 mx-auto my-10">
//       <h1 className="text-5xl font-semibold leading-[70px] ml-5">
//         business<br></br> process automation
//       </h1>

//       <div className="container flex flex-col md:flex-row justify-center py-5 my-10">
//         <div className="w-full md:w-1/2 p-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Automated processes for seamless business operations
//           </h3>
//         </div>
//         <div className="w-full md:w-1/2">
//           <p className="text-[18px]">
//             Businesses in their endeavour to improve their work process and
//             environment always prefer to automate the repetitive and preassigned
//             tasks. This leads to workflow efficiency. A technique to get more
//             done with less.
//           </p>
//           <p className="text-[18px]">
//             {" "}
//             Businesses that implement workflow automation in the process are
//             more efficient, save time and money, and minimize the likelihood of
//             errors, as it helps to streamline communication and empowers
//             employees to manage their own time resulting in more workplace
//             efficiency.
//           </p>

//           <p className="text-[18px]">
//             Business Process automation in a post COVID era, where people prefer
//             working remotely from where they makes it more relevant and useful.
//           </p>
//           <p className="text-[18px]">
//             Processes in your business already exists. Just setting up a system
//             around that can be quick and provide multitude of benefits.
//           </p>
//           <p className="text-[18px]">
//             Some common statements that we hear from Business Owners often when
//             we talk about Automation for their business :
//           </p>
//           <p className="text-xl font-semibold">
//             “Business Process Automation needs costly tools.“
//           </p>
//           <p>Or</p>
//           <p className="text-xl font-semibold">
//             “You need specialised IT team to build and manage the automation
//             tools.”
//           </p>
//           <p>Or</p>
//           <p>
//             “I already pay salaries to my staff to get the job done. If we
//             automate their job, what will they do ?”
//           </p>

//           <p>We say all the above are myths. The fact is :</p>
//           <ul>
//             <li>
//               Most of the basic workflow automation tools get be used FREE.
//               Sometimes you are already paying for the automation tools but you
//               are not using it.
//             </li>
//             <li>
//               Basic automation systems once set can be maintained and extended
//               by your existing team without having a dedicated team.
//             </li>
//             <li>
//               When your people are freed from repetitive mundane tasks they will
//               utilise their time in activities at the next level.
//             </li>
//           </ul>
//           <p className="text-[18px]">
//             Cloud, DevOps, Agile – Lets crack the puzzle together.
//           </p>
//         </div>
//       </div>

//       <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//         <div className="w-full md:w-1/2 p-5 my-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Workflow modelling
//           </h3>
//           <p className="text-[18px] p-4">
//             Workflows are designed to help you optimize business processes,
//             streamlining them for efficiency and consistent stellar results.
//             However, you won’t be doing much good by simply tacking on a
//             workflow into your business processes. Creating an efficient
//             workflow model is key to reaping these benefits.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 my-12 p-10">
//           <p className="text-xl mt-10 py-4 font-semibold">STRATEGIES</p>
//           <div className="row grid grid-cols-2 gap-1">
//             <p className="text-[18px]">SIPOC Diagrams</p>
//             <p className="text-[18px]">
//               Business Process Model and Notation (BPMN)
//             </p>
//             <p className="text-[18px]">IPO Model</p>
//             <p className="text-[18px]">Unified Modeling Language (UML)</p>
//             <p className="text-[18px]">Value Stream Mapping</p>
//             <p className="text-[18px]">Gantt Charts </p>
//           </div>
//         </div>
//       </div>

//       <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
//         <div className="w-full md:w-1/2 p-5 my-5">
//           <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
//             Workflow automation & integration
//           </h3>
//           <p className="text-[18px] p-4">
//             Workflow automation is defining a series of tasks to complete a
//             process, and then removing all the manual steps. It’s like watching
//             dominos fall in a cleverly orchestrated, harmonious pattern.
//           </p>
//           <p className="text-[18px] px-4">
//             Don’t hesitate to identify and automate business processes sooner.
//           </p>
//           <p className="text-[18px] px-4">
//             At GEOGO, we have a 3 steps process to kickstart the automation
//             process for you.
//           </p>
//           <p className="text-[18px] px-4">
//             Contact us and we will will happy to build your next process flow.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 my-12 p-10">
//           <p className="text-xl mt-10 py-4 font-semibold">STRATEGIES</p>
//           <div className="row grid grid-cols-2 gap-1">
//             <p className="text-[18px]">Redmine</p>
//             <p className="text-[18px]">Microsoft Power Platform</p>
//             <p className="text-[18px]">Appsheet</p>
//             <p className="text-[18px]">Custom App</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )

// export default BusinessProcessAutomationCom

// ****************************************** Full service section page code ***************

// import React, { useState, useEffect, useRef } from "react"
// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { graphql, Link } from "gatsby"
// import { useStickyBox } from "react-sticky-box"
// import Sticky from "react-stickynode"

// // import Help from "../components/help"
// // import StickySidebar from "sticky-sidebar"

// const ServicePage = ({ data }) => {
//   const services = data.allStrapiService.nodes
//   const services_category = data.allStrapiSeviceCategory.nodes
//   // const [activeTabIndex, setActiveTabIndex] = useState(0)
//   const [sidebarInstance, setSidebarInstance] = useState(null)
//   const sidebarRef = useRef(null)
//   //const sectionsRef = useRef([])
//   const sectionsRef = useRef(null)

//   const stickyRef = useStickyBox({ offsetTop: 100, offsetBottom: 20 })
//   const [activeSectionId, setActiveSectionId] = useState(
//     services_category[0]?.slug
//   )
//   console.log(activeSectionId, "activesectionid")

//   // useEffect(() => {
//   //   const initStickySidebar = () => {
//   //     if (sidebarRef.current) {
//   //       const newSidebarInstance = new StickySidebar(sidebarRef.current, {
//   //         topSpacing: 140,
//   //         bottomSpacing: 20,
//   //       })
//   //       setSidebarInstance(newSidebarInstance)
//   //     }
//   //   }

//   //   const destroyStickySidebar = () => {
//   //     if (sidebarInstance) {
//   //       sidebarInstance.destroy()
//   //       setSidebarInstance(null)
//   //     }
//   //   }

//   //   // Call the initialization function when the component mounts
//   //   initStickySidebar()

//   //   // Cleanup function to destroy sidebar on unmount
//   //   return () => {
//   //     destroyStickySidebar()
//   //   }
//   // }, [])

//   useEffect(() => {
//     //view port options configuration for scroll event part
//     const options = {
//       root: null, // Use the viewport as the root
//       rootMargin: "-50px 0px 0px 0px",
//       threshold: 0.8, // 0 to 1: Percentage of the section's visibility required to trigger the callback
//     }

//     // //observer for entries section
//     // const observer = new IntersectionObserver(entries => {
//     //   entries.forEach(entry => {
//     //     if (entry.isIntersecting) {
//     //       setActiveSectionId(entry.target.id)
//     //     }
//     //   })
//     // }, options)

//     // // Observe each section
//     //  //const sections = document.querySelectorAll("section")
//     // const sections = sectionsRef.current
//     // console.log("sections", sections)
//     // sections?.forEach(section => {
//     //   observer?.observe(section)
//     // })

//     // return () => {
//     //   // Clean up the observer on unmount
//     //   sections?.forEach(section => {
//     //     observer?.unobserve(section)
//     //   })
//     // }

//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // setActiveSectionId(entry.target.id)
//           console.log(entry.target.id, "target id")
//         }
//       })
//     }, options)

//     const sections = sectionsRef.current.querySelectorAll("section")
//     console.log("all section", sections)
//     sections.forEach(section => {
//       observer.observe(section)
//     })

//     return () => {
//       sections.forEach(section => {
//         observer.unobserve(section)
//       })
//     }
//   }, [])

//   useEffect(() => {
//     setActiveSectionId(0)
//   }, [])

//   return (
//     <Layout>
//       <section className="service-page-section relative my-[150px]">
//         <div className="container h-full mx-auto w-[90%]  m-3 my-10 p-10">
//           {/* <div className="service-header  sm:mt-[100x] lg:mt-[10px]">
//             <h1 className="text-[46px] font-semibold">
//               Services<span className="text-green-500">.</span>
//             </h1>
//             <h3 className="text-[28px] font-semibold">Giving shape to ideas</h3>
//             <p className="text-[18px]  opacity-0.8">
//               We build high quality digital products and we also ensure rapid
//               on-boarding of applications by automating end-to-end delivery
//               pipeline and facilitate continuous integration and development
//               across leading cloud platforms.
//             </p>
//           </div> */}
//           {/* main-container */}
//           {/* right-box */}
//           {/* //start*/}
//           {/* left-box */}
//           <div className=" row my-8 p-5 w-[100%] flex flex-row relative ">
//             {/* menu  */}

//             <div
//               ref={sidebarRef}
//               className="left-sidebar-box top-[0px]     lg:w-1/2   hidden md:block"
//             >
//               <ul ref={stickyRef} className="">
//                 {services_category &&
//                   services_category?.map((service, index) => {
//                     console.log(service, "service")
//                     return (
//                       <li
//                         key={index}
//                         // onClick={() => setActiveTabIndex(index)}
//                         //  const element = document.getElementById(service?.slug)
//                         //   if (element) {
//                         //     element.scrollIntoView({ behavior: "smooth" })
//                         //   }
//                         onClick={() => {
//                           setActiveSectionId(index)
//                           const element = document.getElementById(service?.slug)
//                           if (element) {
//                             element.scrollIntoView({ behavior: "smooth" })
//                           }
//                         }}
//                         className={`   m-2 p-2 cursor-pointer ${
//                           index === activeSectionId && "text-green-500"
//                         }`}
//                       >
//                         <a
//                           // href={`#${service?.slug}`}
//                           className={`no-underline  ${
//                             index === activeSectionId && "text-green-500"
//                           } `}
//                         >
//                           {service?.type}
//                         </a>
//                       </li>
//                     )
//                   })}
//               </ul>
//             </div>

//             {/* right side */}
//             <div ref={sectionsRef} className="w-[100%] top-[-50px] ">
//               {services &&
//                 services.map((service, index) => (
//                   <section
//                     // ref={el => (sectionsRef.current[index] = el)}
//                     key={index}
//                     id={service?.slug}
//                     className=" h-auto lg:h-[400px] text-start md:text-start w-[100%] border border-gray-200 digital-product-box my-8 p-5 shadow-lg"
//                   >
//                     <h3 className="text-sm my-2 top-0 right-0 text-right mt-4">
//                       {service?.type}
//                     </h3>
//                     <p className="text-[18px] sm:text-[20px] opacity-0.8 font-semibold">
//                       {service?.sub_title}
//                     </p>
//                     <p className="text-[16px] opacity-0.8">
//                       {service?.description}
//                     </p>
//                     <p className="text-[18px]">{service?.technology}</p>

//                     {service?.content?.data?.content && (
//                       <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
//                         <Link
//                           to={`${service?.slug}`}
//                           className="no-underline text-black"
//                         >
//                           Read More..
//                         </Link>
//                       </button>
//                     )}
//                   </section>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   )
// }

// export const Head = () => <Seo title="Service" />
// export const query = graphql`
//   query MyQuery {
//     allStrapiSeviceCategory(sort: { priority: ASC }) {
//       nodes {
//         type
//         slug
//       }
//     }
//     allStrapiService(sort: { piority: ASC }) {
//       nodes {
//         title
//         technology
//         sub_title
//         slug
//         description
//         type
//         content {
//           data {
//             content
//           }
//         }
//       }
//     }
//   }
// `

// export default ServicePage
