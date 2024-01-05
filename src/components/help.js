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
