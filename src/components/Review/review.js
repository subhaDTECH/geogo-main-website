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
    {/* sm:container h-full mx-auto w-full sm:w-[95%] */}
    <div className="w-full px-3 mt-[40px] mx-auto">
      <div className=" flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* frist review box start  */}

          {reviews &&
            reviews?.map((review, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#f8f8f8] hover:bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform ease-in-out hover:shadow-xl "
                >
                  <div className="p-1 bg-[#53c07d]"></div>
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="start-container mt-3">
                        <img
                          className="w-[100%] h-[100%] object-contain"
                          alt="Img"
                          src={review?.review_platform_image?.localFile?.url}
                        />
                      </div>
                      {/* <div className=" w-[40px] h-[40px] p-2 bg-green-500 text-white rounded-full flex items-center  justify-center">
                        <p className="text-sm">{review?.rating}</p>
                      </div> */}
                      <div>
                        <span className="flex items-center  text-[24px] mb-3">
                          {Math.round(review?.rating)}
                          <span className="mx-2">
                            <StarRating rating={review?.rating} />
                          </span>
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">THE REVIEW</p>

                    <p className="mb-2 text-lg">
                      {review?.review_text.substring(0, 140)}...
                    </p>
                    <p className="text-sm  text-gray-800">
                      {review?.author_name}
                    </p>
                  </div>
                  <div className="p-4 text-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline text-white ml-2"
                      href={review?.link}
                    >
                      <button className="bg-[#32373c]  w-[70%] mx-auto  text-white rounded-sm px-4 py-2  focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
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
        <button className="hover-btn bg-[#f8f8f8]  mx-2 text-gray-800 font-semibold py-2 px-4 border-2 border-black rounded shadow">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://clutch.co/profile/geogo-techsolutions"
            className="no-underline text-black text-[16px]"
          >
            Our Clut<span className="text-orange-400">c</span>h Profile
          </a>
        </button>
      </div>
    </div>
  </div>
)

export default Review
