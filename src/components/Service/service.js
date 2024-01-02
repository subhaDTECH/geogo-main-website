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
      <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
        <h1 className="title">Our Core Services</h1>
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-5  mx-auto ">
          {services &&
            services?.map(service => (
              <Link
                to={`/service/${service?.slug}`}
                className="Service-box no-underline text-black text-sm bg-white h-full w-full md:80vh   shadow-lg flex flex-row flex items-center justify-center"
              >
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
                  <p className="Service-Paragraph text-[16px] font-normal">
                    {service?.description}.
                  </p>
                </div>
              </Link>
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
                  src={TeamPartImg1}
                />
              </div>
              <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
                <p>We believe</p>
                <h2 className="text-2xl md:text-3xl">Simplicity is the Key</h2>
                <span className="py-3 my-5 ">
                  <Link to="/portfolio" className="no-underline">
                    See Our Work
                  </Link>
                </span>
              </div>
            </div>

            <div className="h-full w-full flex flex-row justify-center flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
              <div className="Img-container  md:flex items-center justify-center">
                <img
                  alt="Img"
                  className="team-Img items-center mx-auto "
                  src={TeamPartImg2}
                />
              </div>
              <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
                <p>We practice</p>
                <h2 className="text-2xl md:text-3xl">Creativity at Core</h2>
                <span className="py-3 my-5 ">
                  <Link to="/service" className="no-underline">
                    Explore our services
                  </Link>
                </span>
              </div>
            </div>
            <div className="h-full w-full flex flex-row justify-center flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
              <div className="Img-container  md:flex items-center justify-center">
                <img
                  alt="Img"
                  className="team-Img items-center mx-auto "
                  src={TeamParImg3}
                />
              </div>
              <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
                <p>Our process is</p>
                <h2 className="text-2xl md:text-3xl">Always Agile</h2>
                <span className="py-3 my-5 ">
                  <Link to="/we-are-agile" className="no-underline">
                    More about our process
                  </Link>
                </span>
              </div>
            </div>
            <div className="h-full w-full flex flex-row justify-center flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
              <div className="Img-container  md:flex items-center justify-center">
                <img
                  alt="Img"
                  className="team-Img items-center mx-auto "
                  src={TeamPartImg4}
                />
              </div>
              <div className="flex flex-col w-full md:w-[60%]   p-3 m-3">
                <p>Powered by</p>
                <h2 className="text-2xl md:text-3xl">Passionate People</h2>
                <span className="py-3 my-5 ">
                  <Link to="/career" className="no-underline">
                    Join our team
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* end of team row  */}
        </div>
        <div className="btn-continer mx-auto my-10 text-center">
          <Link to="/company">
            <button class="border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              LEARN MORE ABOUT OUR COMPANY
            </button>
          </Link>
        </div>

        <OurClient clients={clients} />
        <Review reviews={reviews} />
        <Technology tools={tools} />
        <Post posts={posts} />
        <OurPatner />
      </div>
    </div>
  )
}

export default Service
