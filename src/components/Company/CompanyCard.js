import * as React from "react"
import "./CompanyCard.css"
const CompanyCard = ({ imageUrl, title, subtitle1, subtitle2, subtitle3 }) => (
  <div className="CompanyHero-Section w-full my-10">
    <div className="container w-[90%] h-[auto] lg:h-[340px]    mx-auto">
      <div className="company-card w-full  overflow-hidden border border-gray-300 flex flex-row flex-wrap items-center">
        <div className="card-img-box w-full lg:w-[30%] h-[100%] ">
          <img
            alt="img"
            className="w-[100%] h-[120%] object-contain"
            src={imageUrl}
          />
        </div>
        <div className="card-content flex-1 text-justify  flex  md:justify-center flex-col mx-4 px-5 py-2">
          <h3 className="text-3xl mx-4">{title}</h3>
          {subtitle1 && <p className="mx-4 text-sm  md:text-xl">{subtitle1}</p>}
          {subtitle2 && <p className="mx-4 text-sm md:text-xl">{subtitle2}</p>}
          {subtitle3 && <p className="mx-4 text-sm md:text-xl">{subtitle3}</p>}
        </div>
      </div>
    </div>
  </div>
)

export default CompanyCard
