// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png"

import * as React from "react"

const Review = ({ reviews }) => (
  <div className="Review-Section">
    <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
      <div className=" min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* frist review box start  */}

          {reviews &&
            reviews?.map((review, index) => {
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform ease-in-out hover:shadow-xl ease-in-out"
                >
                  <div className="p-1 bg-[#53c07d]"></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="start-container">
                        <img
                          alt="Img"
                          src={review?.review_platform_image?.localFile?.url}
                        />
                        <p className="text-sm">THE REVIEW</p>
                      </div>
                      <div className=" w-[40px] h-[40px] p-2 bg-green-500 text-white rounded-full flex items-center  justify-center">
                        <p className="text-sm">{review?.rating}</p>
                      </div>
                    </div>
                    <p className="mb-6 text-lg">{review?.review_text}</p>
                    <p className="text-sm  text-gray-800 my-2">
                      {review?.author_name}
                    </p>
                  </div>
                  <div class="p-4">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline text-white ml-2"
                      href={review?.link}
                    >
                      <button className="bg-[#32373c] w-[160px] mx-auto  text-white rounded-sm px-4 py-2  focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                        View Full Review
                      </button>
                    </a>
                  </div>
                </div>
              )
            })}
        </div>
      </div>

      <div className="btn-continer mx-auto mb-8  mt-20 text-center">
        <button className="border border-gray-600 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a
            target="_blank"
            href="https://clutch.co/profile/geogo-techsolutions"
            className="no-underline text-black"
          >
            OUR CLUTCH PROFILE
          </a>
        </button>
      </div>
    </div>
  </div>
)

export default Review
