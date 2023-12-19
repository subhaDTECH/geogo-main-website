// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png"

import * as React from "react"
import "./service.css"
import OurClient from "./ourClient"
import Review from "./review"
import Technology from "./Technology"
import Post from "./post"
import OurPatner from "./ourPatner"

//import graphql
import { graphql, useStaticQuery } from 'gatsby';

const Service = ({services,clients,tools,posts,reviews}) => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allStrapiService {
  //       nodes {
  //         slug
  //         technology
  //         title
  //         id
  //         description
  //         image {
  //           localFile {
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

   // Access data returned from the query
   //const services = data?.allStrapiService?.nodes
  

  return (
    <div className="Service-Section">
    <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
     <h1 className="title">Our Core Services</h1>
      <div className="row grid grid-cols-1 md:grid-cols-2 gap-5  mx-auto ">
      { services && services?.map(service => (
               <div  className="Service-box bg-white h-full w-full md:80vh   shadow-lg flex flex-row flex items-center justify-center">
               <img
                 alt="Img"
                 className="Service-box-Img hidden md:block"
                 src={service?.image?.localFile?.url}
               />
               <div className="Service-text-container p-2 flex flex-col gap-1">
                 <h2 className="font-bold text-green-900 text-xl p-2">
                   {service?.title}
                 </h2>
                 <h4 className="font-bold text-sm p-2">
                  {service?.technology}
                 </h4>
                 <p className="Service-Paragraph">
                  {service?.description}.
                 </p>
               </div>
             </div>
        ))}

       </div>
    </div>

    {/* team part section  */}
    <div className="service-team-section py-10 my-10">
      <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
        <h2 className="title my-10">
          We’re a team of thinkers and problem solvers
        </h2>

        {/* first row of team  */}
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto m-3">
          <div className="h-full w-full flex flex-row justify-center flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
            <div className="Img-container  md:flex items-center justify-center">
              <img
                alt="Img"
                className="team-Img items-center mx-auto "
                src="https://www.geogo.in/static/9afe3591474a8d95a4555b174dcbb739/Screenshot-2021-04-13-at-3.46.22-PM.jpg"
              />
            </div>
            <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
              <p>We believe</p>
              <h2 className="text-2xl md:text-4xl">Simplicity is the Key</h2>
              <span className="py-3 my-5 ">
                <a href="#" className="no-underline">
                  See Our Work
                </a>
              </span>
            </div>
          </div>

          <div className="h-full w-full flex flex-row justify-center flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
            <div className="Img-container  md:flex items-center justify-center">
              <img
              alt="Img"
                className="team-Img items-center mx-auto "
                src="https://www.geogo.in/static/942c1612824f412bed0d239bb65f30e4/Screenshot-2021-04-13-at-3.48.12-PM.jpg"
              />
            </div>
            <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
              <p>We practice</p>
              <h2 className="text-2xl md:text-4xl">Creativity at Core</h2>
              <span className="py-3 my-5 ">
                <a href="#" className="no-underline">
                  Explore our services
                </a>
              </span>
            </div>
          </div>
          <div className="h-full w-full flex flex-row justify-center flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
            <div className="Img-container  md:flex items-center justify-center">
              <img
              alt="Img"
                className="team-Img items-center mx-auto "
                src="https://www.geogo.in/static/4558d3961acb15314bd59d7ad9d636ce/Agile-e1618309457190-min.png"
              />
            </div>
            <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
              <p>Our process is</p>
              <h2 className="text-2xl md:text-4xl">Always Agile</h2>
              <span className="py-3 my-5 ">
                <a href="#" className="no-underline">
                  More about our process
                </a>
              </span>
            </div>
          </div>
          <div className="h-full w-full flex flex-row justify-center flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
            <div className="Img-container  md:flex items-center justify-center">
              <img
              alt="Img"
                className="team-Img items-center mx-auto "
                src="https://www.geogo.in/static/5dfa26afaec2863684b67d33a36f2236/Screenshot-2021-04-13-at-3.58.29-PM.jpg"
              />
            </div>
            <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
              <p>Powered by</p>
              <h2 className="text-2xl md:text-4xl">Passionate People</h2>
              <span className="py-3 my-5 ">
                <a href="#" className="no-underline">
                  Join our team
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* end of team row  */}
      </div>
      <div className="btn-continer mx-auto my-10 text-center">
        <button class="border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          LEARN MORE ABOUT OUR COMPANY
        </button>
      </div>

      <OurClient clients={clients} />
      <Review reviews={reviews} />
      <Technology tools={tools} />
      <Post posts={posts} />
      <OurPatner />
    </div>
  </div>
  );

};

export default Service
