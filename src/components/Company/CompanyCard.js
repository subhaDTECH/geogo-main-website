import * as React from "react"
import "./CompanyCard.css"
const CompanyCard = ({ imageUrl, title, subtitle1, subtitle2, subtitle3 }) => (
  <div className="w-[100%] md:w-[92%] mx-auto my-10">
    <div className="container w-[90%] h-auto lg:h-[340px]    mx-auto">
      <div className=" w-full flex-1 h-full overflow-hidden border border-gray-300 flex-col flex lg:flex-row  ">
        <div className=" w-full lg:w-[35%] h-full ">
          <img
            alt="img"
            className="w-[100%] h-[100%] object-cover"
            src={imageUrl}
          />
        </div>
        <div className="card-content flex-1 text-justify  flex  md:justify-center flex-col mx-4 px-5 py-2">
          <h3 className="text-2xl mx-4">{title}</h3>
          {subtitle1 && <p className="mx-4 text-sm  md:text-xl">{subtitle1}</p>}
          {subtitle2 && <p className="mx-4 text-sm md:text-xl">{subtitle2}</p>}
          {subtitle3 && <p className="mx-4 text-sm md:text-xl">{subtitle3}</p>}
        </div>
      </div>
    </div>
  </div>
)

export default CompanyCard
