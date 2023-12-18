import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png"
import "./service.css"
const ServiceTeamCard = () => (
   <div className="h-full w-full flex flex-row  flex items-center border border-gray-200 hover:bg-white  rounded-sm transition transform ease-in-out duration-300 hover:shadow-xl ease-in-out">
      <div className="Img-container">
        <img
          className="team-Img"
          src="https://www.geogo.in/static/942c1612824f412bed0d239bb65f30e4/Screenshot-2021-04-13-at-3.48.12-PM.jpg"
        />
      </div>
      <div className="flex flex-col   p-3 m-3">
        <p>We practice</p>
        <h2 className="title">Creativity at Core</h2>
        <span className="py-3 my-5 ">
          <a href="#" className="no-underline">
            See Our Work
          </a>
        </span>
      </div>
    </div>

)

export default ServiceTeamCard
