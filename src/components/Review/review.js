// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png"

import * as React from "react"
import "./review.css"

const StarRating = ({ rating }) => {
  // Round the rating to the nearest half-star
  const roundedRating = Math.round(rating * 2) / 2

  // Create an array of stars based on the rounded rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star ${index < roundedRating ? "filled" : ""}`}
    ></span>
  ))

  return <div className="star-rating">{stars}</div>
}

const Review = ({ reviews }) => (
  <div className="">
    <div className="container h-full mx-auto w-[95%]  px-3 mt-[40px] ">
      <div className=" flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* frist review box start  */}

          {reviews &&
            reviews?.map((review, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform ease-in-out hover:shadow-xl "
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
                      {/* <div className=" w-[40px] h-[40px] p-2 bg-green-500 text-white rounded-full flex items-center  justify-center">
                        <p className="text-sm">{review?.rating}</p>
                      </div> */}
                      <span className="flex items-center  text-[24px]">
                        {Math.round(review?.rating)}
                        <span className="mx-2">
                          <StarRating rating={review?.rating} />
                        </span>
                      </span>
                    </div>
                    <p className="mb-2 text-lg">{review?.review_text}</p>
                    <p className="text-sm  text-gray-800">
                      {review?.author_name}
                    </p>
                  </div>
                  <div className="p-4">
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

      <div className="btn-continer mx-auto mb-8  mt-[60px] text-center  transition-all duration-300 ease-in-out">
        <button className="hover-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-black rounded shadow">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://clutch.co/profile/geogo-techsolutions"
            className="no-underline text-black"
          >
            OUR CLUT<span className="text-orange-400">C</span>H PROFILE
          </a>
        </button>
      </div>
    </div>
  </div>
)

export default Review
