import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import "./jobCard.css"
const InternCard = () => (
    <div className="Job-Section my-10 py-5 p-5">
        <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
             <h1 className="  text-2xl md:text-4xl font-bold  p-2 m-2">Intern with us</h1>
             
              <div className="shadow-lg p-5 row flex flex-col  md:flex-row items-center">
                  <div className="img-box p-5 m-3">
                      <img src="https://www.geogo.in/static/f24e05e14a10bc77522b8ed1134a8383/Internship-Full-Banner-min.png" />
                  </div>
                  <div className="job-content p-4 m-2">
                       <h3 className="text-2xl md:text-3xl font-bold">Full Stack Web Development Internship</h3>
                       <p className="text-lg">Program Starts on : <span>01-Apr-2022</span></p>
                       <p className="text-lg">Duration : <span>8 Weeks</span></p>
                       <p className="text-lg">Last date for Application: <span>20-Mar-2022  12:00PM</span></p>
                       <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded">Apply Now</button>
                  </div>
              </div>

        </div>
    </div>

)

export default InternCard;
