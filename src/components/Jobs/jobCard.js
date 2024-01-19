// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
import { IoBagHandleSharp } from "react-icons/io5"
import { CiLight } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { BsBagDash } from "react-icons/bs"
import * as React from "react"
import "./jobCard.css"
const JobCard = ({ jobs }) => {
  // console.log(jobs, "jobs")
  // console.log("image", jobs[0])
  return (
    <div className="Job-Section px-5 p-5">
      <div className=" mx-auto w-full lg:w-[95%]  m-3  sm:px-5">
        <h1 className="text-3xl md:text-4xl font-bold  lg:p-2 lg:m-2 lg:mx-5">
          Want to Join Us?
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold   lg:p-2 lg:m-2 lg:mx-5">
          Find Your Role
        </h2>

        <div className="w-[100%] flex flex-col items-center ">
          {jobs &&
            jobs?.map((job, index) => {
              return (
                <div
                  key={index}
                  className="shadow-lg my-5 w-full md:w-[95%] h-auto md:h-[340px]  row flex flex-col  md:flex-row items-center"
                >
                  <div className="img-box w-full  md:w-[55%] h-[100%]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      alt="Img"
                      src={job?.image[0]?.localFile?.url}
                    />
                  </div>
                  <div className="job-content w-full p-4 m-2 mx-[30px] px-3">
                    <h3 className=" text-xl md:text-[23px] font-semibold mb-2">
                      {job?.role}
                    </h3>
                    <div className="flex  items-center">
                      <BsBagDash />
                      <span className="text-lg mx-3 my-2">
                        {job?.position_type}
                      </span>
                    </div>
                    <div className="flex  items-center">
                      <CiLight />
                      <span className="text-lg mx-3 my-2">
                        {job?.tech_stack}
                      </span>
                    </div>

                    <div className="flex  items-center">
                      <CiLocationOn />
                      <span className="text-lg mx-3 my-2">{job?.location}</span>
                    </div>

                    <button
                      type="button"
                      className="border mx-2 my-2 border-black btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline  text-white font-normal py-2 px-4 mr-1 rounded"
                    >
                      <a href={job?.link} className="no-underline text-black">
                        Apply Now
                      </a>
                    </button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default JobCard
