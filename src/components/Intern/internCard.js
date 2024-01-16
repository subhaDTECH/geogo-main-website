// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
import * as React from "react"

const InternCard = ({ programs }) => {
  return (
    <div className="Job-Section my-6 py-5 p-5">
      <div className="mx-auto w-full md:w-[90%] p-5 m-3 my-5">
        <h1 className="mx-3  text-2xl md:text-4xl font-bold  p-2 m-2">
          Intern with us
        </h1>

        <div className="w-full flex flex-col">
          {programs &&
            programs?.map((program, index) => {
              return (
                <div
                  key={index}
                  className="mx-3 shadow-lg my-5 w-[100%]  h-auto lg:h-[400px]  row flex flex-col  md:flex-row items-center"
                >
                  <div className="w-full md:w-[55%] h-[100%]">
                    <img
                      className="w-[100%] h-[100%] object-cover"
                      alt="Img"
                      src={program?.image?.localFile?.url}
                    />
                  </div>
                  <div className="job-content w-full p-4 m-2 mx-[30px] px-3">
                    <h3 className="text-2xl md:text-[23px] font-semibold">
                      {program?.title}
                    </h3>
                    <p className="text-sm">
                      <span className="font-semibold">Program Starts on</span> :{" "}
                      <span>{program?.program_start_date}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Duration :</span>{" "}
                      <span>{program?.duration}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">
                        Last date for Application:
                      </span>{" "}
                      <span>{program?.Last_date_toApply}</span>
                    </p>
                    <button
                      type="button"
                      class="border border-black btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline  text-white font-normal py-2 px-4 mr-1 rounded"
                    >
                      <a
                        className="no-underline text-black"
                        href={program?.link}
                      >
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

export default InternCard
