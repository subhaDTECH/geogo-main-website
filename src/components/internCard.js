// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
import * as React from "react"
import "./jobCard.css"
const InternCard = ({programs}) => {
    return (
        <div className="Job-Section my-10 py-5 p-5">
        <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
             <h1 className="  text-2xl md:text-4xl font-bold  p-2 m-2">Intern with us</h1>
             
             {
                programs && programs?.map((program,index)=>{
                    return (
                        <div key={index} className="shadow-lg p-5 row flex flex-col  md:flex-row items-center">
                        <div className="img-box p-5 m-3">
                            <img alt="Img" src={program?.image?.localFile?.url} />
                        </div>
                        <div className="job-content p-4 m-2">
                             <h3 className="text-2xl md:text-3xl font-bold">{program?.title}</h3>
                             <p className="text-lg"><span className="font-semibold">Program Starts on</span> : <span>{program?.program_start_date}</span></p>
                             <p className="text-lg"><span className="font-semibold">Duration :</span> <span>{program?.duration}</span></p>
                             <p className="text-lg"><span className="font-semibold">Last date for Application:</span> <span>{program?.Last_date_toApply}</span></p>
                             <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded">
                              <a className="no-underline text-white" href={program?.link}>Apply Now</a>
                            </button>
                        </div>
                    </div>
                    )
                })
             }

        </div>
    </div>
    )
}

export default InternCard;
