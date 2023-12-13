import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png" ;
import {headerConatiner , logoImg, myClass, logoContainer} from "./header.module.css";
const Header = ({ siteTitle }) => (
<header className="body-font shadow-lg top-0 left-0 sticky">
  <div className="container flex flex-wrap px-5 flex-col md:flex-row items-center">
       <div className={logoContainer}>
              <img className={logoImg} src={GeogoLogo}/>
        </div>
      <nav className="w-1/2  md:ml-auto flex  flex-wrap items-center text-base justify-evenly mx-5">
      <Link  to="/service" className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Services</Link>
      <Link to="/solution" className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Solutions</Link>
      <Link to="/company"  className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Company</Link>
      <Link to="/career"   className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Careers</Link>
      <Link to="/career"   className={` ${myClass} mr-5 hover:text-green-900 m-3 mx-2`}>Blog</Link>
      <button className=" w-24 mr-4 inline-flex items-center bg-gray-100 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact
      </button>
    </nav>
   
  </div>
</header>
  
)

export default Header
