import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../images/geogo-logo-1.png"
import { FaBars } from "react-icons/fa"
//import GeogoLogo from "../../src/images/geogo-logo-1.png";
import { logoImg, myClass, logoContainer } from "./header.module.css"
// import Demo from "./demo"
import { IoCloseSharp } from "react-icons/io5"
const Header = ({ siteTitle }) => {
  const [open, setOpen] = React.useState(false)

  const handleTab = () => {
    setOpen(!open)
  }

  return (
    <header className=" h-[14vh] w-[100vw]  body-font shadow-lg  fixed top-0 z-10 bg-white">
      {open ? (
        <div className="header-mobile w-[100%] bg-white  h-[100vh]   ease-in-out duration-300">
          <div className="container  flex flex-wrap px-5 my-5 flex-row items-center justify-between  mx-auto">
            <div className={logoContainer}>
              <Link onClick={handleTab} to="/">
                <img alt="Img" className={logoImg} src={GeogoLogo} />
              </Link>
            </div>

            <div className="p-1">
              <IoCloseSharp
                // className="w-[30px] h-[30px]"
                size={"35px"}
                onClick={handleTab}
              />
            </div>
            <nav
              className={`my-5  w-full flex-col    mr-5 md:ml-auto flex  flex-wrap items-center text-base justify-center md:justify-end mx-5`}
            >
              <Link
                onClick={handleTab}
                to="/service"
                className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-xl`}
              >
                Services
              </Link>
              <Link
                onClick={handleTab}
                to="/solution"
                className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-xl`}
              >
                Solutions
              </Link>
              <Link
                onClick={handleTab}
                to="/company"
                className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-xl`}
              >
                Company
              </Link>
              <Link
                onClick={handleTab}
                to="/career"
                className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2 my-3 text-xl`}
              >
                Careers
              </Link>
              <Link
                to="https://blog.geogo.in/"
                className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-xl`}
              >
                Blog
              </Link>
              <Link
                onClick={handleTab}
                to="/contact"
                className="no-underline text-black m-3 my-3  "
              >
                <button className="mt-2 w-32 px-5 py-2 border border-gray-400 font-medium hover:text-green-900 mr-5 inline-flex items-center focus:outline-none  rounded text-base mt-4 md:mt-0">
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>
        </div>
      ) : (
        <div className="w-[100%]  h-[14vh]   flex  px-5  flex-row items-center justify-between  mx-auto">
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
            <FaBars className="w-[30px] h-[30px]" onClick={handleTab} />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
