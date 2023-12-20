// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import * as styles from "../components/index.module.css"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql,Link } from "gatsby" 

const ServicePage = ({data}) =>{
  
  //console.log(data.allStrapiService.nodes,"data");
  
  const services=data.allStrapiService.nodes
  console.log(services,"services--")
 // const services=data.allStrapiService.nodes;


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
              <li   className="m-2 p-2 cursor-pointer">
                <a href="#service1" className="no-underline text-black">Digital Products Engineering</a>
              </li>
              <li className="m-2 p-2 cursor-pointer">
                <a href="#service2" className="no-underline text-black">Agile Service Management</a>
              </li>
              <li className="m-2 p-2 cursor-pointer">
                <a href="#service3" className="no-underline text-black">Business Process Automation</a>
              </li>
              <li className="m-2 p-2 cursor-pointer">
                <a  href="#service4" className="no-underline text-black">Recruitment & Training</a>
              </li>
            </ul>
          </div>
          <div className="right-box p-5 mx-5 w-full">
            <h1 id="service1" className="text-4xl font-semibold">
              Digital Products Engineering
            </h1>
            
            {
            services &&
            services
              .filter(service => service.title === 'Digital Products Engineering')
              .map((service,index)=>(
                   <div  key={index} className="w-full border digital-product-box my-8 p-5 shadow-lg">
              <p className="text-[20px] opacity-0.8 font-semibold">
              {
                service?.sub_title
              }
              </p>
              <p className="text-[16px] opacity-0.8">
              {
                service?.description
              }
              </p>
              <p>{service?.technology}</p>
              
              {
                service?.link && <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                 <Link to={`${service?.slug}`} className="no-underline text-black">
                  Read More..
                </Link>
               </button>
              }
            </div>
              ))


            }




            <h1 id="service2" className="text-4xl font-semibold ">
              Agile Service Management
            </h1>
            {
            services &&
            services
              .filter(service => service.title === 'Agile Service Management')
              .map((service,index)=>(
                   <div  key={index} className="w-full border digital-product-box my-8 p-5 shadow-lg">
             
             
                <p className="text-[20px] opacity-0.8 font-semibold">
              {
                service?.sub_title
              }
              </p>
              <p className="text-[16px] opacity-0.8">
              {
                service?.description
              }
              </p>
              <p>{service?.technology}</p>
              
              
              {
                service?.link && <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <Link to={`${service?.slug}`} className="no-underline text-black">
                  Read More..
                </Link>
               </button>
              }
            </div>
              ))


            }

            <h1 id="service3" className="text-4xl font-semibold ">
              Business Process Automation
            </h1>

            
            {
            services &&
            services
              .filter(service => service.title === 'Business Process Automation')
              .map((service,index)=>(
                   <div  key={index} className="w-full border digital-product-box my-8 p-5 shadow-lg">
             
             <p className="text-[20px] opacity-0.8 font-semibold">
              {
                service?.sub_title
              }
              </p>
              <p className="text-[16px] opacity-0.8">
              {
                service?.description
              }
              </p>
              <p>{service?.technology}</p>
              
              <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link to={`${service?.slug}`} className="no-underline text-black">
                  Read More..
                </Link>
              </button>
            </div>
              ))


            }



            <h1 id= "service4"className="text-4xl font-semibold">Recruitment & Training</h1>

            {
            services &&
            services
              .filter(service => service.title === 'Recruitment & Training')
              .map((service,index)=>(
             
             <div  key={index} className="w-full border digital-product-box my-8 p-5 shadow-lg">
              <p className="text-[18px] opacity-0.8 font-semibold">
              {
                service?.sub_title
              }
              </p>
              <p className="text-[16px] opacity-0.8">
              {
                service?.description
              }
              </p>
              <p>{service?.technology}</p>
              
              <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Link to={`${service?.slug}`} className="no-underline text-black">
                  Read More..
                </Link>
              </button>
            </div>
              ))


            }



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
  allStrapiService {
    nodes {
      slug
      technology
      title
      image {
        localFile {
          url
        }
        name
      }
      description
      content {
        data {
          content
        }
      }
      sevice_category {
        type
      }
      link
      sub_title
    }
  }
}
`






export default ServicePage
