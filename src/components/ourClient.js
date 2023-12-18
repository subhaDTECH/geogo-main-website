import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import "./ourClient.css";
const OurClient = () => (
    <div className="OurClient-Section">
        <div className="container h-full mx-auto w-[95%] p-5  my-10 p-10">
                 <h3 className="title my-10">Our Clients and their words about us</h3>
              <div className=" row grid grid-cols-2 mx-auto lg:grid-cols-6 gap-5 m-2">
                      <div className="Img-box-client">
                         <img className="client-Img" src="https://www.geogo.in/static/58d9e595f9d4bb74e7c8bab59c7c08c9/500-fortune-1.png" />
                      </div>
                      <div className="Img-box-client">
                         <img className="client-Img" src="https://www.geogo.in/static/329d55c1013486607529d570be5e64a1/logo.jpeg" />
                      </div>
                      <div className="Img-box-client">
                         <img className="client-Img" src="https://www.geogo.in/static/4a2c4636b6d455e1a2a4b25e92780bc4/TCS_Logo-removebg-preview-min.png" />
                      </div>
                      <div className="Img-box-client">
                         <img className="client-Img" src="https://www.geogo.in/static/3a0b417d80d858390ac69ce5da6981ac/parxsys-1.png" />
                      </div>
                      <div className="Img-box-client">
                         <img className="client-Img" src="https://www.geogo.in/static/2ebfb4055f9b6a44bca3d36b9682870f/logo-1.png" />
                      </div>
                      <div className="Img-box-client">
                         <img className="client-Img" src="https://www.geogo.in/static/034ecf4304f507eb718b7481b1b814d9/logo-white.png" />
                      </div>
                  
              </div>

        </div>
    </div>

)

export default OurClient;
