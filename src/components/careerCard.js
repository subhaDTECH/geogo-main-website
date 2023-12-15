import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";

const CareerCard = () => (
    <div className="Career-Section my-10 py-5">
        <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
            {/* first row start  */}
           <div className="row  shadow-lg flex grid grid-cols-1 md:grid-cols-4">
              <div className="box h-[360px] w-full flex flex-col justify-center order-2 md:order-none">
                   <h4 className="text-2xl lg:text-3xl px-4 p-4">Core Values</h4>
                   <p className="text-sm px-4">We will be AGILE in doing what we do.</p>
              </div>
              <div className="box h-[360px] w-full md:order-none">
                   <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_640.jpg"/>
              </div>
              <div className="box h-[360px] w-full flex flex-col  justify-center md:order-none">
                   <h4 className="text-2xl md:text-3xl px-4 p-4">Craft</h4>
                   <p className="text-sm px-4">Our culture promotes makers who are passionately curious about their craft.
                     We aim for excellence and that compels us to reach a new level every single time.</p>
              </div>
              <div className="box h-[360px] w-full md:order-none">
                  <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_640.jpg" />
              </div>
           </div>
     {/* first row end  */}

     {/* 2nd row start  */}
     <div className="row  shadow-lg flex grid grid-cols-1 md:grid-cols-4">
            <div className="box h-[360px] w-full ">
              <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_640.jpg"/>
            </div>
              <div className="box h-[360px] w-full flex flex-col justify-center">
                   <h4 className="text-2xl md:text-3xl px-4 p-4">Open Discussions</h4>
                   <p className="text-sm px-4">We respect voice of our team members. We always seek for the best idea, no matter from where it's coming.</p>
              </div>
             
              <div className="box h-[360px] w-full">
                  <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_640.jpg" />
              </div>
              <div className="box h-[360px] w-full flex flex-col  justify-center">
                   <h4 className="text-2xl md:text-3xl px-4 p-4">Ownership</h4>
                   <p className="text-sm px-4">Our team members have a strong sense of individual responsibility. We do our work with integrity to delight our customers on every chance we get.</p>
              </div>
             
           </div>

     {/* second row end  */}

     {/* 3rd row start  */}
     <div className="row  shadow-lg flex grid grid-cols-1 md:grid-cols-4">
              <div className="box h-[360px] w-full flex flex-col justify-center order-2 md:md:order-none">
                   <h4 className="text-2xl lg:text-3xl px-4 p-4">Teamwork</h4>
                   <p className="text-sm px-4">We work as a team of champions. We collaborate to excel and surpass our rivals. We value every individual and always support & defend our team..</p>
              </div>
              <div className="box h-[360px] w-full order-1 md:md:order-none">
                   <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_640.jpg"/>
              </div>
              <div className="box h-[360px] w-full flex flex-col  justify-center order-4 md:md:order-none">
                   <h4 className="text-2xl md:text-3xl px-4 p-4">& Life</h4>
                   <p className="text-sm px-4">We promote and mentor the AND life. Where our achievements and inner fulfilments will be high enough to enjoy a real holistic life..</p>
              </div>
              <div className="box h-[360px] w-full order-3 md:md:order-none">
                  <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_640.jpg" />
              </div>
           </div>

     {/* 3rd row end  */}


        </div>
    </div>

)

export default CareerCard;