import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import "../components/hero.css";
const Hero = () => (
    <div className="Hero-Section">
        <div className="container w-[90%]  p-5 m-3 flex mx-auto grid grid-cols-1 md:grid-cols-2 px-5 flex-col md:flex-row items-center">
            <div className="HeroTextContainer w-full  m-4 p-4">
                <h2 className="Herotitle">We are on a mission to simplify digital technology adoption with a human touch.
                </h2>
                <p className="">Digital Transformation, Business process automation, Microservices,
                    Cloud native, DevOps, Agile - Does these words sound complex or
                    impossible for your business?</p>
                <p>We have a 3-step process to make it simple for you.</p>
                <button className="Hero-btn my-5 hover:animate-bounce">LETS TALK</button>
            </div>
            <div className="HeroImgContainer m-4 p-4">
                <img className="HeroImg" src="https://www.geogo.in/static/91800ab9bfa948db1e554a5ddde56bdf/pottery-bg-1024x930-min.png" />
            </div>

        </div>
    </div>

)

export default Hero;
