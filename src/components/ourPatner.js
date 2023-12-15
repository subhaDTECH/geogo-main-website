import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import "./ourPatner.css";
const OurPatner = () => (
    <div className="OurPatner-Section">
        <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
                 <h3 className="title my-10">Our Patners</h3>
              <div className="row grid grid-cols-2  md:grid-cols-4 gap-2">
                   
                   <div className="Img-box m-2 p-4 md:m-3">
                       <img src="https://www.geogo.in/static/44af6a9a3484ab9a5b2d3c4463f8cdee/49aa0a09-06d2-4bba-ad20-4bcbe56ac507_logo.png" />
                   </div>
                   <div className="Img-box m-2 p-4 md:m-3">
                       <img src="https://www.geogo.in/static/a856af8653ac18314e7e2417f08a0738/indish-technology-logo.png" />
                   </div>
                   <div className="Img-box m-2 p-4 md:m-3">
                       <img src="https://www.geogo.in/static/abfc67db6c1ffa7f1002e21319ed45c2/NIFT-logo-1-min.png" />
                   </div>
                   <div className="Img-box m-2 p-4 md:m-3">
                       <img src="https://www.geogo.in/static/3b9728acf05629e023e091785f9d94c8/atoll.jpg" />
                   </div>
            </div>

        </div>
    </div>

)

export default OurPatner;
