import { Link } from "gatsby"
// import GeogoLogo from "../../images/geogo-logo-1.png";
import MainHeroImg from "../../images/main-page-img.png"
import * as React from "react"
import "./heroHome.css"
// import "../components/hero.css";
//  <div className="md:container w-full md:w-[90%]   p-5 m-3 flex mx-auto grid grid-cols-1 md:grid-cols-2 px-5 flex-col md:flex-row items-center">
//       <div className="HeroTextContainer  mt-[100px]  w-full  m-4 p-4">

const Hero = () => (
  <div className="Hero-Section my-15">
    <div className="lg:ml-[30px] lg:w-[90]  md:w-[95%]   sm:p-5 sm:m-3 flex mx-auto grid grid-cols-1 md:grid-cols-2 sm:px-5 flex-col md:flex-row items-center">
      <div className="HeroTextContainer  mt-[90px] w-full  sm:m-4 p-4">
        <h2 className="Herotitle mt-5 lg:mx-[20px]">
          We are on a mission to simplify digital technology adoption with a
          human touch.
        </h2>
        <p className="lg:mx-[20px]">
          Digital Transformation, Business process automation, Microservices,
          Cloud native, DevOps, Agile - Does these words sound complex or
          impossible for your business?
        </p>
        <p className="lg:mx-[20px]">
          We have a 3-step process to make it simple for you.
        </p>
        <Link to="/contact">
          <button className="Hero-btn my-5 lg:mx-[20px]">LETS TALK</button>
        </Link>
      </div>
      <div className="HeroImgContainer m-4 p-4">
        <img alt="Img" className="HeroImg" src={MainHeroImg} />
      </div>
    </div>
  </div>
)

export default Hero
