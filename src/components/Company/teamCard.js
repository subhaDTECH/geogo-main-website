import { Link } from "gatsby"
import * as React from "react"
// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";

const Teamcard = ({ teams }) => (
  <div className="Team-Section">
    <div className="w-full   mx-auto lg:w-[95%]  md:m-3  p-10">
      <section className="body-font">
        <section className="text-gray-600 body-font">
          <div className="w-full px-5 mx-auto">
            {/* start  */}

            <div className="mb-16">
              <div className="container-full flex justify-center mx-auto pt-16">
                <div>
                  <p className="text-gray-500 mx-auto text-[20px] md:text-lg text-center font-normal pb-3">
                    BUILDING TEAM
                  </p>
                  <h1 className=" w-full text-xl xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    The Talented People Behind the Scenes of the Organization
                  </h1>
                </div>
              </div>
              <div className="w-full  py-10">
                <div className="container-full lg:conatiner mx-auto">
                  <div className="flex flex-row items-center justify-center flex-wrap gap-4">
                    {teams &&
                      teams?.map((team, index) => {
                        return (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={team?.link}
                            key={index}
                            className="hover:shadow-xl no-underline text-black cursor-pointer rounded w-full md:w-1/3 lg:w-1/4 overflow-hidden shadow-md bg-white"
                          >
                            <div className="px-6 mt-16">
                              <div className="w-[100px] h-[100px] rounded-full text-center mx-auto">
                                <img
                                  alt="img"
                                  src={team?.image?.localFile?.url}
                                  className="w-full h-full  rounded-full object-contain"
                                />
                              </div>
                              <h1 className="font-bold text-2xl text-center mb-1">
                                {team?.name}
                              </h1>
                              <p className="text-gray-800 text-sm text-center">
                                {team?.position_type}
                              </p>
                              {/* <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p> */}
                              <div className="w-full flex justify-center pt-5 pb-5">
                                <div
                                  target="_blank"
                                  rel="noreferrer"
                                  href={team?.link}
                                  className="cursor-pointer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="24"
                                    fill="none"
                                    stroke="#718096"
                                    strokeWidth="1.1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="feather feather-linkedin"
                                  >
                                    <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </a>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>

            {/* end  */}
          </div>
        </section>
      </section>
    </div>
  </div>
)

export default Teamcard
