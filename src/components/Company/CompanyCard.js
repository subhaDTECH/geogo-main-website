import * as React from "react"
import "./CompanyCard.css"
const CompanyCard = ({ imageUrl, title, subtitle1, subtitle2, subtitle3 }) => (
  <div className="w-[100%] lg:w-[92%] mx-auto my-10">
    <div className="lg:container w-[90%] h-auto lg:h-[340px]    mx-auto">
      <div className=" w-full flex flex-col  sm:flex-row border h-full">
        <div className="h-[200px] lg:w-[35%] lg:h-full bg-blue">
          <img
            alt="img"
            className="w-[100%] h-[100%] object-cover"
            src={imageUrl}
          />
        </div>
        <div className="card-content  flex-1 text-justify  flex  lg:justify-center flex-col mx-4 sm:px-5 py-2">
          <h3 className="text-2xl sm:mx-4">{title}</h3>
          {subtitle1 && (
            <p className="sm:mx-4 text-[23px]  md:text-xl  text-[#000000DE]">
              {subtitle1}
            </p>
          )}
          {subtitle2 && (
            <p className="sm:mx-4 text-[23px] md:text-xl text-[#000000DE]">
              {subtitle2}
            </p>
          )}
          {subtitle3 && (
            <p className="sm:mx-4 text-[23px] md:text-xl text-[#000000DE]">
              {subtitle3}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default CompanyCard
