// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png"
// import OurClient from "./ourClient"
// import Review from "./review"
// import Post from "./post"
// import OurPatner from "./ourPatner"
import * as React from "react"
import "./service.css"
import TeamPartImg1 from "../../images/team-part-img1.jpg"
import TeamPartImg2 from "../../images/team-part-img2.jpg"
import TeamParImg3 from "../../images/team-part-img3.jpg"
import TeamPartImg4 from "../../images/team-part-last.png"

//import graphql
import { Link } from "gatsby"
import Technology from "../Technology/technology.js"
import OurClient from "../client/OurClient.js"
import OurPatner from "../Patner/OurPatner.js"
import Post from "../Post/Post.js"
import Review from "../Review/review.js"

const Service = ({ services, clients, tools, posts, reviews }) => {
  return (
    <div className="Service-Section">
      <div className="h-full mx-auto w-full md:w-[96%] lg:w-full   mt-10 p-3 sm:p-[10px] lg:p-10">
        <h1 className="title my-4 py-2">Our Core Services</h1>
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-5  mx-auto my-4">
          {services &&
            services?.map((service, index) => (
              <Link
                key={index}
                to={`/service/${service?.slug}`}
                className="Service-box no-underline text-black text-sm bg-white h-full w-full md:80vh   shadow-lg flex flex-row flex  justify-center"
              >
                <div className="service-img-container hidden md:block">
                  <img
                    alt="Img"
                    className="Service-box-Img "
                    src={service?.image?.localFile?.url}
                  />
                </div>
                <div className="Service-text-container  px-2 flex flex-col gap-1">
                  <h3 className="service-title p-2 mt-8">{service?.title}</h3>
                  <h4 className="text-[16px] font-medium mt-2 p-2">
                    {service?.technology}
                  </h4>
                  <p className="Service-Paragraph text-[16px] font-normal">
                    {service?.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>

        {/* team part section  */}
        <div className="service-team-section1 mt-5">
          <div className=" h-full mt-[100px]   mx-auto w-full lg:w-[100%]   p-3  ">
            <h2 className="title my-6">
              We’re a team of thinkers and problem solvers
            </h2>

            {/* first row of team  */}
            <div className="row grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto m-3">
              <div className="overflow-hidden   w-full flex flex-row justify-between  items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl">
                <div className="hidden sm:block  w-[40%] h-[100%] flex-1  md:flex items-center justify-center">
                  <img
                    alt="Img"
                    className="w-[200px] h-[100px] lg:w-[100%] lg:h-[120%]"
                    src={TeamPartImg1}
                  />
                </div>
                <div className="flex flex-col mx-5 w-full md:w-[60%]">
                  <p className="mx-2">We believe</p>
                  <h2 className="text-2xl md:text-3xl mx-2">
                    Simplicity is the Key
                  </h2>
                  <span className="py-3 my-5 ">
                    <Link
                      to="/portfolio"
                      className="no-underline text-blue-500 font-normal mx-2"
                    >
                      See Our Work
                    </Link>
                  </span>
                </div>
              </div>

              <div className="overflow-hidden   w-full flex flex-row justify-between  items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl">
                <div className="hidden sm:block  w-[40%] h-[100%] flex-1  md:flex items-center justify-center">
                  <img
                    alt="Img"
                    className="w-[200px] h-[100px] lg:w-[100%] lg:h-[120%]"
                    src={TeamPartImg2}
                  />
                </div>
                <div className="flex flex-col mx-5 w-[100%] md:w-[60%]">
                  <p className="mx-2">Creativity at Core</p>
                  <h2 className="text-2xl md:text-3xl mx-2">
                    Simplicity is the Key
                  </h2>
                  <span className="py-3 my-5 ">
                    <Link
                      to="/service"
                      className="no-underline text-blue-500 font-normal mx-2"
                    >
                      Explore our services
                    </Link>
                  </span>
                </div>
              </div>

              <div className="overflow-hidden   w-full flex flex-row justify-between  items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl">
                <div className="hidden sm:block  w-[40%] h-[100%] flex-1  md:flex items-center justify-center">
                  <img
                    alt="Img"
                    className="w-[200px] h-[100px] lg:w-[100%] lg:h-[120%]"
                    src={TeamParImg3}
                  />
                </div>
                <div className="flex flex-col mx-5 w-full md:w-[60%]">
                  <p className="mx-2">Our process is</p>
                  <h2 className="text-2xl md:text-3xl mx-2">Always Agile</h2>
                  <span className="py-3 my-5 ">
                    <Link
                      to="/we-are-agile"
                      className="no-underline text-blue-500 font-normal mx-2"
                    >
                      More about our process
                    </Link>
                  </span>
                </div>
              </div>

              <div className="overflow-hidden   w-full flex flex-row justify-between  items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl">
                <div className="hidden sm:block  w-[40%] h-[100%] flex-1  md:flex items-center justify-center">
                  <img
                    alt="Img"
                    className="w-[200px] h-[100px] lg:w-[100%] lg:h-[120%]"
                    src={TeamPartImg4}
                  />
                </div>
                <div className="flex flex-col mx-5 w-full md:w-[60%]">
                  <p className="mx-2">Powered by</p>
                  <h2 className="text-2xl md:text-3xl mx-2">
                    Passionate People
                  </h2>
                  <span className="py-3 my-5 ">
                    <Link
                      to="/career"
                      className="no-underline text-blue-500 font-normal mx-2"
                    >
                      Join our team
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* end of team row  */}
          </div>
          <div className="hover-btn btn-continer mx-auto my-10 text-center transition-all duration-300 ease-in-out">
            <Link to="/company">
              <button className="border-2  border-black bg-[#f8f8f8]  text-gray-800 font-semibold py-2 px-4  rounded shadow">
                LEARN MORE ABOUT OUR COMPANY
              </button>
            </Link>
          </div>

          <OurClient clients={clients} />
          <Review reviews={reviews} />
          <Technology tools={tools} />
          {/* <Post posts={posts} /> */}
          <OurPatner />
        </div>
      </div>
    </div>
  )
}

export default Service
