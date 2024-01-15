// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";

import * as React from "react"
import "./jobCard.css"
const JobCard = ({ jobs }) => {
  // console.log(jobs, "jobs")
  // console.log("image", jobs[0])
  return (
    <div className="Job-Section my-10 py-5 p-5">
      <div className="h-full mx-auto w-[95%]  m-3 my-10 p-5">
        <h1 className="text-3xl md:text-4xl font-bold  p-2 m-2">
          Want to Join Us?
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold  p-2 m-2">
          Find Your Role
        </h2>
        {jobs &&
          jobs?.map((job, index) => {
            return (
              <div
                key={index}
                className="shadow-lg p-5  row flex flex-col  md:flex-row items-center"
              >
                <div className="img-box  w-full p-5 m-3">
                  <img alt="Img" src={job?.image[0]?.localFile?.url} />
                </div>
                <div className="job-content w-full p-4 m-2">
                  <h3 className=" text-xl md:text-2xl font-bold">
                    {job?.role}
                  </h3>

                  <p className="text-lg">{job?.position_type}</p>

                  <p className="text-lg">{job?.tech_stack}</p>
                  <p className="text-lg">{job?.location}</p>
                  <button
                    type="button"
                    className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded"
                  >
                    <a href={job?.link} className="no-underline text-white">
                      Apply Now
                    </a>
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default JobCard
