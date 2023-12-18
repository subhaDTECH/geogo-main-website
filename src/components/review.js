import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png"
import "./ourClient.css"
const Review = () => (
  <div className="Review-Section">
    <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
      <div class=" min-h-screen flex items-center justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* frist review box start  */}
          <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform ease-in-out hover:shadow-xl ease-in-out">
            <div class="p-1 bg-[#53c07d]"></div>
            <div class="p-8">
              <div className="flex items-center justify-between">
                <div className="start-container">
                  <img src="https://www.geogo.in/static/14476f106cd973f7af8a78cade03a1ab/clutch-2.png" />
                  <p className="text-sm">THE REVIEW</p>
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    className="w-[100%] h-[100%] object-contain"
                    src="https://www.geogo.in/static/356119cdb5a9cfa3ae83c70940ca623c/star.png"
                  />
                </div>
              </div>
              <p class="mb-6 text-lg">
                We’ve worked with a few provider companies, and GEOGO
                Technologies is number one, in my opinion. Solutions Architect,
                Fortune 500 Manufacturing Company
              </p>
              <p class="text-sm  text-gray-800 my-2">
                Solutions Architect, Fortune 500 Manufacturing Company
              </p>
            </div>
            <div class="p-4">
              <button class="bg-[#32373c] w-[160px] mx-auto  text-white rounded-sm px-4 py-2  focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                View Full Review
              </button>
            </div>
          </div>
          {/* frist review box end  */}

          {/* seond review box start */}
          <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform  ease-in-out hover:shadow-xl ease-in-out">
            <div class="p-1 bg-[#53c07d]"></div>
            <div class="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <img src="https://www.geogo.in/static/14476f106cd973f7af8a78cade03a1ab/clutch-2.png" />
                  <p className="text-sm">THE REVIEW</p>
                </div>

                <div className="w-[30px] h-[30px]">
                  <img
                    className="w-[100%] h-[100%] object-contain"
                    src="https://www.geogo.in/static/356119cdb5a9cfa3ae83c70940ca623c/star.png"
                  />
                </div>
              </div>
              <p class="mb-6 text-lg">
                GEOGO Techsolutions has facilitated a dynamic project management
                process, meeting deadlines and satisfying the client’s
                requirements.
              </p>
              <p class="text-sm  text-gray-800 my-2">
                CEO, Staffing & Recruiting Company
              </p>
            </div>
            <div class="p-4 mt-5">
              <button class="bg-[#32373c] w-[160px] mx-auto  text-white rounded-sm px-4 py-2  focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                View Full Review
              </button>
            </div>
          </div>

          {/* second review box end  */}

          {/* third review box start  */}
          <div class="bg-white rounded-lg overflow-hidden  transition-transform transform ease-in-out hover:shadow-xl ease-in-out">
            <div class="p-1 bg-[#53c07d]"></div>
            <div class="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <img src="https://www.geogo.in/static/14476f106cd973f7af8a78cade03a1ab/clutch-2.png" />
                  <p className="text-sm">THE REVIEW</p>
                </div>
                <div className="w-[30px] h-[30px]">
                  <img
                    className="w-[100%] h-[100%] object-contain"
                    src="https://www.geogo.in/static/356119cdb5a9cfa3ae83c70940ca623c/star.png"
                  />
                </div>
              </div>
              <p class="text-lg">
                They provide us quite a satisfactory service, cooperate with us,
                and don’t point fingers. Their team stands out for their
                willingness to make things right.
              </p>
              <p class="text-sm text-gray-800 my-2">
                Director & CTO, Tech Mobility Firm
              </p>
            </div>
            <div class="p-4 mt-2">
              <button class="bg-[#32373c] w-[160px] mx-auto  text-white rounded-sm px-4 py-2  focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                View Full Review
              </button>
            </div>
          </div>

          {/* thrid review box end  */}
        </div>
      </div>

      <div className="btn-continer mx-auto mb-8  mt-20 text-center">
        <button class="border border-gray-600 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          OUR CLUTCH PROFILE
        </button>
      </div>
    </div>
  </div>
)

export default Review
