import * as React from "react"
// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";

const Teamcard = ({ teams }) => (
  <div className="Team-Section">
    <div className="container h-full mx-auto w-[95%]  m-3 my-10 p-10">
      <section class="body-font mx-4">
        <section class="text-gray-600 body-font">
          <div class="container-full px-5 py-24 mx-auto">
            {/* start  */}

            <div class="mb-16">
              <div class="container-full flex justify-center mx-auto pt-16">
                <div>
                  <p class="text-gray-500 mx-auto text-[20px] md:text-lg text-center font-normal pb-3">
                    BUILDING TEAM
                  </p>
                  <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    The Talented People Behind the Scenes of the Organization
                  </h1>
                </div>
              </div>
              <div class="w-full bg-gray-100   py-10">
                <div class="container-full lg:conatiner mx-auto">
                  <div
                    role="list"
                    aria-label="Behind the scenes People "
                    class="flex flex-row items-center justify-center flex-wrap gap-4"
                  >
                    {teams &&
                      teams?.map((team, index) => {
                        return (
                          <a
                            target="_blank"
                            href={team?.link}
                            key={index}
                            class="hover:shadow-xl no-underline text-black cursor-pointer rounded w-full md:w-1/3 lg:w-1/4 overflow-hidden shadow-md bg-white"
                          >
                            <div class="px-6 mt-16">
                              <div className="w-[100px] h-[100px] rounded-full text-center mx-auto">
                                <img
                                  src={team?.image?.localFile?.url}
                                  className="w-full h-full  rounded-full object-contain"
                                />
                              </div>
                              <h1 class="font-bold text-2xl text-center mb-1">
                                {team?.name}
                              </h1>
                              <p class="text-gray-800 text-sm text-center">
                                {team?.position_type}
                              </p>
                              {/* <p class="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p> */}
                              <div class="w-full flex justify-center pt-5 pb-5">
                                <a href="javascript:void(0)" class="mx-5">
                                  <div aria-label="Github" role="img">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#718096"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="feather feather-github"
                                    >
                                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                  </div>
                                </a>
                                {/* <a href="javascript:void(0)" class="mx-5">
                                                <div aria-label="Twitter" role="img">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                    </svg>
                                                </div>
                                            </a> */}

                                <a className="cursor-pointer">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="24"
                                    fill="none"
                                    stroke="#718096"
                                    stroke-width="1.1"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    class="feather feather-linkedin"
                                  >
                                    <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z M 7 20 L 3 20 L 3 9 L 7 9 Z M 5 7.699219 C 3.800781 7.699219 3 6.898438 3 5.898438 C 3 4.800781 3.800781 4 5 4 C 6.199219 4 7 4.800781 7 5.800781 C 7 6.898438 6.199219 7.699219 5 7.699219 Z M 21 20 L 17 20 L 17 14 C 17 12.398438 15.898438 12 15.601563 12 C 15.300781 12 14 12.199219 14 14 C 14 14.199219 14 20 14 20 L 10 20 L 10 9 L 14 9 L 14 10.601563 C 14.601563 9.699219 15.601563 9 17.5 9 C 19.398438 9 21 10.5 21 14 Z"></path>
                                  </svg>
                                </a>
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