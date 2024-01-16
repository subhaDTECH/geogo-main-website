// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";

import * as React from "react"
import StartUpImg from "../../images/startupIndia3.jpg"

const RecogCom = () => (
  <div className="">
    <div className="w-full  mx-auto md:w-[95%]    p-10">
      <h1 className="text-4xl  font-medium md:mx-5 leading-tight  md:px-5">
        Recognition
      </h1>
      <section className="body-font md:mx-4">
        <div className=" w-full md:container shadow-lg mx-auto flex px-5 py-2 md:flex-row flex-col justify-center items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={StartUpImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
            <h4 className="text-orange-400 py-3 text-4xl">
              #startupind<span className="text-blue-500">i</span>a
            </h4>
            <p className="text-[17px] my-3">
              We've got recognised by Department of Promotion of Industry and
              Internal Trade, Govt. of India as our startup is working in{" "}
              <strong>IT Services industry and Application Development</strong>{" "}
              sector.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default RecogCom
