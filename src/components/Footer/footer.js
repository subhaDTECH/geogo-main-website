import * as React from "react"
import { Link } from "gatsby"
import FooterImg1 from "../../images/footer-logo1.png"
import FooterImg2 from "../../images/footer-logo2.png"
import GeogoLogo from "../../images/geogo-logo-1.png"
import { FaArrowRight } from "react-icons/fa"
const FooterHead = () => (
  <div className="Footer-Header-Section  w-full h-full text-white">
    <div className=" h-[100%] flex flex-col lg:flex-row">
      <div className="left-box  py-5 flex justify-center  flex-col w-full lg:w-1/2 h-auto bg-[#154406] text-white ">
        <p className="text-lg  mx-10 px-3">Solutions</p>
        <h3 className="text-2xl md:text-4xl font-medium mx-10 px-3 py-3">
          Explore Our Offering.
        </h3>
        <div className="mx-[55px] animate-bounce my-3">
          <FaArrowRight size={"40px"} />
        </div>
      </div>
      <div className="right-box row bg-[#f1ece4]  w-full  lg:w-1/2  text-black">
        <div className="mx-4 p-4 my-2">
          <h2 className="px-4 text-black text-3xl ">Get in Touch</h2>
          <p className="px-4 text-sm">We’d love to hear from you.</p>
          <p className="px-4 text-sm">Just tell us what you want from us.</p>
        </div>
        <div className="right-box-context  flex flex-col lg:flex-row flex-row mx-10 gap-2">
          <div className="btn-box-container flex flex-col items-center justify-center">
            <button className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Get our Service
            </button>
            <button className=" text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Become Our Patner
            </button>
            <button className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Join Our Team
            </button>
            <button className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Discuss about something else
            </button>
          </div>
          <div className="content-box m-3  flex  flex-col  justify-center">
            <div className="flex flex-row justify-center">
              <div className="footer-img-container w-[80px] h-[80px] md:w-[50px] md:h-[50px]">
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
                  are willing to share any confidential information or idea with
                  us, we are always committed to protect that.
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
    </div>

    {/* footer end part  */}
    <div className="Footer-Header-Section bg-black w-full h-full text-white">
      <div className="container-full">
        <section className="bg-[#013220]">
          <div className=" px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] object-contain h-6 sm:h-9 footer-logo"
                    src={GeogoLogo}
                    alt="logo"
                  />
                  <p className="max-w-xs mt-4 text-sm text-white md:mx-10">
                    © 2021 GEOGO Techsolutions Pvt. Ltd. All rights reserved.
                  </p>
                </div>
                <div className="flex mt-8 space-x-6 text-gray-600 md:mx-10">
                  <a
                    className="hover:opacity-75"
                    href="https://www.facebook.com/geogo.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Facebook </span>
                    <svg
                      className="w-8 h-8"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <a
                    className="hover:opacity-75"
                    href="https://twitter.com/go_geogo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Twitter </span>
                    <svg
                      className="w-8 h-8"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    className="hover:opacity-75"
                    href="https://github.com/geogo-in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> GitHub </span>
                    <svg
                      className="w-8 h-8"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium">Company</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm">
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/company"
                    >
                      About Us
                    </Link>
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/terms"
                    >
                      Terms of Service
                    </Link>
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/privacy"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/life-at-geogo"
                    >
                      Life at Geogo
                    </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/service/digital-product-development"
                    >
                      Digital Products Engineering
                    </Link>
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/service/agile-service-management"
                    >
                      Agile Service Management
                    </Link>
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/service/business-process-automation/"
                    >
                      Business Process Automation
                    </Link>
                    <Link
                      className="text-gray-300 cursor-pointer hover:text-green-500 no-underline"
                      to="/service/recruitment-training"
                    >
                      Recruitment & Training
                    </Link>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Contact Us</p>
                  <nav className="flex flex-col  space-y-2 text-sm text-gray-500">
                    <p className="text-lg text-gray-300  hover:text-green-500 no-underline">
                      Our Offices
                    </p>
                    <p className="text-lg text-gray-300  hover:text-green-500 no-underline">
                      Bengaluru, India
                    </p>

                    <p className="text-lg text-gray-300  hover:text-green-500 no-underline">
                      Kolkata, India
                    </p>
                    <p className="text-lg text-gray-300  hover:text-green-500 no-underline">
                      Texas, USA
                    </p>
                  </nav>
                </div>
                <div></div>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-800">© 2022 Comany Name</p>
          </div>
        </section>
      </div>
    </div>
    {/* footer last part end  */}
  </div>
)

export default FooterHead
