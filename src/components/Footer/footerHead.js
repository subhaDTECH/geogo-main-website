import * as React from "react"
import { Link } from "gatsby"
import FooterImg1 from "../../images/footer-logo1.png"
import FooterImg2 from "../../images/footer-logo2.png"

import { FaArrowRight } from "react-icons/fa"
const FooterHead = () => (
  <div className=" h-[100%] flex flex-col lg:flex-row z-20">
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
      <div className="right-box-context  flex flex-col lg:flex-row  mx-10 gap-2">
        <div className="btn-box-container flex flex-col items-center justify-center">
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
                We are assuring you, your words will stay within us. If you are
                willing to share any confidential information or idea with us,
                we are always committed to protect that.
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
)

export default FooterHead
