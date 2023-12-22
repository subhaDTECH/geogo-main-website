import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import {  logoImg, myClass, logoContainer } from "./header.module.css";
const Header = ({ siteTitle }) => (
  <header className="body-font shadow-lg  sticky z-10 bg-white">
    <div className="container flex flex-wrap px-5 flex-col md:flex-row items-center">
      <div className={logoContainer}>
        <Link to="/">
          <img alt="Img" className={logoImg} src={GeogoLogo} />
        </Link>
      </div>
      <nav className="w-1/2 mr-5 md:ml-auto flex  flex-wrap items-center text-base justify-center md:justify-end mx-5">
        <Link to="/service" className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Services</Link>
        <Link to="/solution" className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Solutions</Link>
        <Link to="/company" className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Company</Link>
        <Link to="/career" className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Careers</Link>
        <Link to="https://blog.geogo.in/" target="_blank" className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Blog</Link>
        <button className="w-32 px-5 py-2 border border-gray-400 font-medium hover:text-green-900 mr-5 inline-flex items-center focus:outline-none  rounded text-base mt-4 md:mt-0">Contact Us</button>
      </nav>

    </div>
  </header>

)

export default Header
