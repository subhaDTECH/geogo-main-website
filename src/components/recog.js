import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";

const RecogCom = () => (
    <div className="Career-Section">
        <div className="container h-full mx-auto w-[95%]  m-3 my-10 p-10">
            <h1 className="text-5xl mb-2 font-medium md:mx-5 leading-tight  p-5">Recognition</h1>
            <section class="body-font mx-4">
                <div class="md:container shadow-lg mx-auto flex px-5 py-10 md:flex-row flex-col justify-center items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="https://www.geogo.in/static/af42901d7c0dc992332db18900624871/startupIndia3.jpg"/>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
                          <h4 className="text-orange-400 py-3 text-4xl">#startupind<span className="text-blue-500">i</span>a</h4>
                          <p className="text-lg my-3">We've got recognised by Department of Promotion of Industry and Internal Trade, Govt. of India as our startup is working in <strong>IT Services industry and Application Development</strong> sector.</p>
                       
                    </div>
                </div>
            </section>


        </div>
    </div>

)

export default  RecogCom;
