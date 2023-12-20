import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
// style={{  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${solution?.image?.localFile?.url})`, backgroundSize: 'cover' }}
import { graphql } from "gatsby"
const SolutionPage = ({data}) => {
  
  const solutions=data.allStrapiSolution.nodes;
  console.log(solutions);
  return (
    <Layout>
    <section className="service-page-section">
      <div className="container h-full mx-auto w-[90%] p-5 m-3 my-10 p-10 mx-5">
        <div className="service-header">
          <h1 className="text-[46px] font-semibold">Solutions.</h1>
        </div>

        <div className="row my-8 p-5 flex flex-col lg:flex-row ">
          <div className="left-box w-full lg:w-1/2 ">
            <ul>
              <li  id="MSME" className="m-2 p-2 cursor-pointer">
                <a href="#MSME" className="no-underline text-black">MSME</a>
              </li>
              <li className="m-2 p-2 cursor-pointer">
                <a href="#MicroMobility" className="no-underline text-black">Micro Mobility</a>
              </li>
              <li className="m-2 p-2 cursor-pointer">
                <a href="#Industry4.0" className="no-underline text-black">Industry 4.0</a>
              </li>
              <li className="m-2 p-2 cursor-pointer">
                <a  href="#Education" className="no-underline text-black">Education</a>
              </li>
            </ul>
          </div>
          <div className="right-box p-5 mx-5 w-full">
            <h1 id="MSME" className="text-4xl font-semibold">MSME</h1>
            {
            solutions &&
            solutions
              .filter(solution => solution.type === 'MSME')
              .map((solution,index)=>(
                   <div 
                   
                   key={index} className="w-full border digital-product-box my-8 p-5 shadow-lg">
              <h2 className="text-2xl font-semibold">
                {solution?.title}
              </h2>
              <p className="text-[16px] opacity-0.8">
              {
                solution?.description
              }
              </p>
              
              <button  class="bg-white hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400  rounded shadow">
               <a className="no-underline text-black">
                 Read More..
               </a>
              </button>
            </div>
              ))


            }
            <h1 id="MicroMobility" className="text-4xl font-semibold ">Micro Mobility</h1>
            
              {
                solutions &&
                solutions
                  .filter(solution => solution.type === 'Micro Mobility')
                  .map((solution,index)=>(
                       <div  key={index} 
                        className="w-full border digital-product-box my-8 p-5 shadow-lg">
                  <h2 className="text-2xl font-semibold">
                    {solution?.title}
                  </h2>
                  <p className="text-[16px] opacity-0.8">
                  {
                    solution?.description
                  }
                  </p>
                 
                  <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                   <a className="no-underline text-black">
                     Read More..
                   </a>
                  </button>
                </div>
                  ))
            }
            

            <h1 id="Industry4.0" className="text-4xl font-semibold ">Industry 4.0</h1>

            
               {
                solutions &&
                solutions
                  .filter(solution => solution.type === 'Industry 4.0')
                  .map((solution,index)=>(
                       <div 
                       key={index} className="w-full border digital-product-box my-8 p-5 shadow-lg">
                  <h2 className="text-2xl font-semibold">
                    {solution?.title}
                  </h2>
                  <p className="text-[16px] opacity-0.8">
                  {
                    solution?.description
                  }
                  </p>
                  
                  <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                   <a href={solution?.link} className="no-underline text-black">
                     Read More..
                   </a>
                  </button>
                </div>
                  ))
            }
            

            <h1 id="Education" className="text-4xl font-semibold">Education</h1>
            {
                solutions &&
                solutions
                  .filter(solution => solution.type === 'Education')
                  .map((solution,index)=>(
                       <div  key={index} className=" border   digital-product-box my-8 p-5 shadow-lg">
                  <h2 className="text-2xl font-semibold">
                    {solution?.title}
                  </h2>
                  <p className="text-[16px] opacity-0.8">
                  {
                    solution?.description
                  }
                  </p>
                 
                  <button  class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                   <a className="no-underline text-black">
                     Read More..
                   </a>
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

export const Head = () => <Seo title="Solution" />




export const query = graphql`
query MyQuery {
  allStrapiSolution {
    nodes {
      slug
      title
      id
      description
      image {
        localFile {
          url
        }
      }
      type
      link
      solution_category {
        id
        type
      }
    }
  }
}
`


export default SolutionPage
