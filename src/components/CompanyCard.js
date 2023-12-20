import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
 import "../components/companyCard.css"
const CompanyCard = ({imageUrl , title , subtitle1 , subtitle2 , subtitle3}) => (
    <div className="CompanyHero-Section my-16">
        <div className="container mx-5 w-[80%]  mx-auto">
             <div className="company-card w-full flex flex-row flex-wrap items-center">
                 <div className="card-img-box w-[360px] h-[300px] ">
                      <img className="company-card-img " src={imageUrl} />
                 </div>
                <div className="card-content flex-1 text-justify  flex  md:justify-center flex-col mx-4 px-5 py-2">
                     <h3 className="text-3xl mx-4">{title}</h3>
                     {
                         subtitle1 && <p className="mx-4 text-sm  md:text-xl">{subtitle1}</p>
                        
                     }
                     {
                          subtitle2 && <p className="mx-4 text-sm md:text-xl">{subtitle2}</p>
                     }
                     {
                          subtitle3 && <p className="mx-4 text-sm md:text-xl">{subtitle3}</p>
                     }
                </div>
             </div>       
      
        </div>
    </div>

)

export default CompanyCard;
