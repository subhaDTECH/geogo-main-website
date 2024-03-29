// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
import * as React from "react"
import "./ourClient.css"

//import graphql

const OurClient = ({ clients }) => {
  return (
    <div className="OurClient-Section w-full md:w-[96%] lg:w-[90%] mt-[60px]">
      <div className="p-3 md:p-5 ">
        <h3 className="title my-10">Our Clients and their words about us</h3>
        <div className=" row grid grid-cols-2  lg:grid-cols-6 gap-5 mx-3">
          {clients &&
            clients?.map((client, index) => (
              <div key={client?.id} className="Img-box-client">
                <img
                  alt="Img"
                  className="client-Img"
                  src={client?.client_image?.localFile?.url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default OurClient
