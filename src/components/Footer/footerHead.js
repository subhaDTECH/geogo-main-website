import * as React from "react"
import { Link } from "gatsby"
import FooterImg1 from "../../images/footer-logo1.png"
import FooterImg2 from "../../images/footer-logo2.png"

import { FaArrowRight } from "react-icons/fa"
const FooterHead = () => (
  <div className=" h-[100%] flex flex-col lg:flex-row z-20">
    <Link
      to="/solution"
      className="left-box no-underline cursor-pointer  py-5 flex justify-center  flex-col w-full lg:w-1/2 h-auto bg-[#154406] text-white "
    >
      <p className="text-lg  mx-10 px-3">Solutions</p>
      <h3 className="text-2xl md:text-4xl font-medium mx-10 px-3 py-3">
        Explore Our Offering.
      </h3>
      <div className="mx-[55px] animate-bounce my-3">
        <FaArrowRight size={"40px"} />
      </div>
    </Link>
    <div className="right-box row bg-[#f1ece4]  w-full  lg:w-1/2  text-black">
      <div className=" p-4">
        <h2 className="px-5 text-black text-3xl ">Get in Touch</h2>
        <p className="px-5 text-sm">We’d love to hear from you.</p>
        <p className="px-5 text-sm">Just tell us what you want from us.</p>
        <p className="text-2xl px-5 font-medium">You want to...</p>
      </div>
      <div className="right-box-context lg:mt-[-60px] flex flex-col lg:flex-row  mx-10 gap-2">
        <div className="btn-box-container w-[100%] lg:w-[40%] flex flex-col items-center justify-center">
          <button className="text-start w-full  m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <Link to="/contact" className="no-underline">
              Get our Service
            </Link>
          </button>
          <button className=" text-start w-full  m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <Link to="/contact" className="no-underline">
              Become Our Patner
            </Link>
          </button>
          <button className="text-start w-full  m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <Link to="/contact" className="no-underline">
              Join Our Team
            </Link>
          </button>
          <button className="text-start w-full  m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <Link to="/contact" className="no-underline">
              Discuss about something else
            </Link>
          </button>
        </div>
        <div className="content-box  mx-3 w-[100%] lg:w-[60%]  flex  flex-col  justify-center">
          <div className="flex flex-row justify-center">
            <div className="footer-img-container w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]">
              <img
                alt="img"
                className="w-[100%] h-[100%] object-contain"
                src={FooterImg1}
              />
            </div>
            <div className="p-2 m-2">
              <h3 className="text-lg">Confidentiality Assured!</h3>
              <p className="text-sm">
                We are assuring you, your words will stay within us. If you are
                willing to share any confidential information or idea with us,
                we are always committed to protect that.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="footer-img-container w-[80px] h-[80px] lg:w-[120px] lg:h[120px] ">
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
)

export default FooterHead
