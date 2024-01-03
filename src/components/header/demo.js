import * as React from "react"
import { Link } from "gatsby"
// import GeogoLogo from "../../images/geogo-logo-1.png"
// import { FaBars } from "react-icons/fa"
//import GeogoLogo from "../../src/images/geogo-logo-1.png";
import { logoImg, myClass, logoContainer } from "./header.module.css"
const Demo = () => {
  return (
    <div className="sm:block w-[100vw] h-[100vh] bg-gray-200">
      <nav
        className={` md:ml-auto flex flex-col  flex-wrap items-center text-base justify-center md:justify-end `}
      >
        <Link
          to="/service"
          className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-3xl`}
        >
          Services
        </Link>
        <Link
          to="/solution"
          className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-3xl`}
        >
          Solutions
        </Link>
        <Link
          to="/company"
          className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-3xl`}
        >
          Company
        </Link>
        <Link
          to="/career"
          className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-3xl`}
        >
          Careers
        </Link>
        <Link
          to="https://blog.geogo.in/"
          target="_blank"
          className={` ${myClass} mr-5 hover:text-green-900 m-3 my-3 mx-2 text-3xl`}
        >
          Blog
        </Link>
        <Link to="/contact" className="no-underline text-black m-3 mt-3 ">
          <button className="mt-2 w-32 px-5 py-2 border border-gray-400 font-medium hover:text-green-900 mr-5 inline-flex items-center focus:outline-none  rounded text-base mt-4 md:mt-0">
            Contact Us
          </button>
        </Link>
      </nav>
    </div>
  )
}

export default Demo
