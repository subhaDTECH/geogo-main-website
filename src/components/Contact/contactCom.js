import React, { useState } from "react"
import { Link } from "gatsby"
import FooterImg1 from "../../images/footer-logo1.png"
import FooterImg2 from "../../images/footer-logo2.png"
import GeogoLogo from "../../images/geogo-logo-1.png"
import { FaArrowRight } from "react-icons/fa"
// ;<div className="h-[100vh] w-[100vw] bg-blue-200"></div>
// class="m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-full-screen-modal"
const ContactCom = () => {
  return (
    <>
      (
      <div className=" h-[100%] w-[90%] mx-auto flex flex-col justify-between lg:flex-row my-10">
        <div className="right-box row  w-full my-5    text-black">
          <div className="mx-4 p-4 my-2">
            <h2 className="px-4 text-black text-2xl sm:text-5xl">
              Let's have a talk <span className="text-green-500">.</span>
            </h2>
            <p className="px-4 text-[18px]">
              Just tell us what you want from us.
            </p>
          </div>

          <div className="right-box-context  flex justify-between flex-col lg:flex-row flex-row mx-10 gap-2">
            <div className="btn-box-container w-full  flex flex-col items-center justify-center">
              {/* new code  */}

              <div
                id="hs-full-screen-modal"
                class="hs-overlay hidden w-full h-[100%] fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none"
              >
                <div class="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full w-full">
                  <div class="flex flex-col bg-white dark:bg-gray-800">
                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                      <h3 class="font-bold text-gray-800 dark:text-white">
                        Modal title
                      </h3>
                      <button
                        type="button"
                        class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-overlay="#hs-full-screen-modal"
                      >
                        <span class="sr-only">Close</span>
                        <svg
                          class="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </button>
                    </div>
                    <div class="p-4 overflow-y-auto">
                      <p class="mt-1 text-gray-800 dark:text-gray-400">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                    </div>
                    <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                      <button
                        type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-overlay="#hs-full-screen-modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* end of new code  */}

              <button
                type="button"
                data-hs-overlay="#hs-full-screen-modal"
                className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Get our Service
              </button>
              <button
                data-hs-overlay="#hs-full-screen-modal"
                className=" text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Become Our Patner
              </button>
              <button
                data-hs-overlay="#hs-full-screen-modal"
                className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Join Our Team
              </button>
              <button
                data-hs-overlay="#hs-full-screen-modal"
                className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Discuss about something else
              </button>
            </div>
            <div className="content-box m-3  flex  flex-col  justify-center">
              <div className="flex flex-row justify-center">
                <div className="footer-img-container  w-[80px] h-[80px] md:w-[50px] md:h-[50px]">
                  <img
                    alt="img"
                    className="w-[100%] h-[100%] object-contain"
                    src={FooterImg1}
                  />
                </div>
                <div className="p-2 m-2">
                  <h3 className="text-lg">Confidentiality Assured!</h3>
                  <p className="text-sm">
                    We are assuring you, your words will stay within us. If you
                    are willing to share any confidential information or idea
                    with us, we are always committed to protect that.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div className="footer-img-container w-[80px] h-[80px] md:w-[50px] md:h[50px] ">
                  <img
                    alt="img"
                    className="w-[100%] h-[100%] object-contain"
                    src={FooterImg2}
                  />
                </div>
                <div className="p-2 m-2">
                  <h3 className="text-lg">Same Day Response is Guaranteed!</h3>
                  <p className="text-sm">
                    We are eagerly waiting to hear from you. Write to us and get
                    guaranteed response within 24hrs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hs-full-screen-modal"
          class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none"
        >
          <div class="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full w-full">
            <div class="flex flex-col bg-white dark:bg-gray-800">
              <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h3 class="font-bold text-gray-800 dark:text-white">
                  Modal title
                </h3>
                <button
                  type="button"
                  class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-full-screen-modal"
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div class="p-4 overflow-y-auto">
                <p class="mt-1 text-gray-800 dark:text-gray-400">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
              <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-overlay="#hs-full-screen-modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  )
}

export default ContactCom
