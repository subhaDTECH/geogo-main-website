import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png"
import "./Technology.css"

//import graphql
import { graphql, useStaticQuery } from 'gatsby';

const Technology = ({tools}) => {
//   const data = useStaticQuery(graphql`
//   query MyQuery {
//     allStrapiTool {
//       nodes {
//         id
//         type
//         image {
//           localFile {
//             url
//           }
//         }
        
//       }
//     }
//   }
// `);
 
//  const tools =  data?.allStrapiTool?.nodes;
//  console.log(data,"tools")

  return (
    <div className="Technology-Section">
    <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
      <h3 className="title">
        Ensuring quality and performance using these{" "}
        <span className="text-green-500">Tools</span> and{" "}
        <span className="text-green-500">Technologies</span>.
      </h3>
      <div className="btn-container flex items-center justify-start  flex-wrap my-3">
        <button className="technology-btn bg-gray-200 text-center py-2 px-5 mx-3 my-3 rounded-full ">
          All
        </button>
        <button className="technology-btn bg-gray-200 text-center py-2 px-5 mx-3 my-3 rounded-full">
          Plan
        </button>
        <button className="technology-btn bg-gray-500 text-center py-2 px-5 mx-3 my-3 rounded-full">
          Code
        </button>
        <button className="technology-btn bg-gray-200 text-center py-2 px-5 mx-3 my-3 rounded-full">
          Build
        </button>
        <button className="technology-btn bg-gray-200 text-center py-2 px-5 mx-3 my-3 rounded-full">
          Release
        </button>
        <button className="technology-btn bg-gray-200 text-center py-2 px-5 mx-3 my-3 rounded-full">
          Test
        </button>
        <button className="technology-btn bg-gray-200 text-center py-2 px-5 mx-3 my-3 rounded-full">
          Deploy
        </button>
        <button className="technology-btn bg-gray-200 text-center py-2 px-5 mx-3 my-3 rounded-full">
          Monitor
        </button>
      </div>
      <div className="row flex mx-auto justify-center items-center mt-4 grid grid-cols-2 lg:grid-cols-6 gap-3">
       {
        tools && tools?.map((tool,index)=>(
          <div key={index} className="Img-container  flex items-center justify-center  m-2 md:m-2">
                 <img alt="Img" src={tool?.image?.localFile?.url} />
        </div>
        ))
       }
       
       </div>
     </div>
  </div>
  )
}

export default Technology
