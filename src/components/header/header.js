import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../images/geogo-logo-1.png"
import { FaBars } from "react-icons/fa"
import { logoImg, myClass, logoContainer } from "./header.module.css"
import { IoCloseSharp } from "react-icons/io5"

const Header = ({ setIsOpen, atTopOfPage, siteTitle }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <header
      // ref={containerRef}
      className={`h-[14vh] w-[100vw] body-font fixed top-0 z-10 bg-white ${
        atTopOfPage ? "" : "shadow-md"
      }`}

      //className=" h-[14vh] w-[100vw]  body-font shadow-lg  fixed top-0 z-10 bg-white"
    >
      {
        <div
          id="header"
          className="w-[100%]  h-[14vh]   flex  pl-2 pr-3 sm:px-5  flex-row items-center justify-between  mx-auto"
        >
          <div className={`${logoContainer}`}>
            <Link to="/">
              <img alt="Img" className={logoImg} src={GeogoLogo} />
            </Link>
          </div>

          <nav className={` items-center hidden  sm:flex`}>
            <Link
              to="/service"
              className={` ${myClass} mr-5 hover:text-green-900  lg:mx-2 ml-[20px]`}
            >
              Services
            </Link>
            <Link
              to="/solution"
              className={` ${myClass} mr-5 hover:text-green-900  lg:mx-2 ml-[20px]`}
            >
              Solutions
            </Link>
            <Link
              to="/company"
              className={`${myClass} mr-5 hover:text-green-900  lg:mx-2 ml-[20px] `}
            >
              Company
            </Link>
            <Link
              to="/career"
              className={`${myClass} mr-5 hover:text-green-900  lg:mx-2 ml-[20px]`}
            >
              Careers
            </Link>
            <Link
              to="https://blog.geogo.in/"
              target="_blank"
              className={` ${myClass} mr-5 hover:text-green-900  lg:mx-2 ml-[20px]`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="no-underline text-black  ml-[20px] text-[20px]"
            >
              <button className="mt-[10px] w-32 px-5 py-2 border border-gray-400 font-medium hover:text-green-900 mr-5 inline-flex items-center focus:outline-none  rounded text-base md:mt-0 ">
                Contact Us
              </button>
            </Link>
          </nav>

          <div className="block sm:hidden">
            <FaBars
              className="w-[30px] h-[30px] ml-[10px]"
              // onClick={handleTab}
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      }
    </header>
  )
}

export default Header
