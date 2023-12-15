import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import "./jobCard.css"
const JobCard = () => (
    <div className="Job-Section my-10 py-5 p-5">
        <div className="h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
             <h1 className="text-3xl md:text-4xl font-bold  p-2 m-2">Want to Join Us?</h1>
             <h2 className="text-xl md:text-3xl font-bold  p-2 m-2">Find Your Role</h2>
              <div className="shadow-lg p-5  row flex flex-col  md:flex-row items-center">
                  <div className="img-box  w-full p-5 m-3">
                      <img src="https://www.geogo.in/static/9d8fa0ec739ce614d5f56430c8c9571f/simplifying.jpg" />
                  </div>
                  <div className="job-content w-full p-4 m-2">
                       <h3 className=" text-xl md:text-2xl font-bold">Full Stack Engineer</h3>
                       <p className="text-lg">Full-time - Freshers or Mid-Senior Level</p>
                       <p className="text-lg">HTML, CSS, Node.JS, ReactJS</p>
                       <p className="text-lg">Bengaluru, Kolkata, India</p>
                       <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded">Apply Now</button>
                  </div>
              </div>

        </div>
    </div>

)

export default JobCard;
