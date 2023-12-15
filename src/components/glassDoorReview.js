import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";

const GlassDoorReview = () => (
    <div className="Career-Section my-10 py-5">
        <div className="container h-full shadow-lg mx-auto w-[95%] p-5 m-3 my-10 p-10 mx-5">
            <img src= "https://www.glassdoor.co.in/api/widget/verticalStarRating.htm?e=5413808"/>
     {/* first row start  */}
           <div className="row container flex grid grid-cols-1 md:grid-cols-3">
              <div className="box h-[360px] w-full flex flex-row  justify-center md:order-none">
              <div class="border  w-[14px] bg-green-500 h-1/2"></div>
                   <p className="text-lg px-4 ">The founding members are extremely employee-friendly. They provide ample opportunities to learn and grow. As a fresher one will be 
                   allowed to experience working in different areas to find what best suits them.</p>
            </div>
       
     {/* first row end  */}

     {/* second review box start  */}
       
     
              <div className="box h-[360px] w-full flex flex-row  justify-center md:order-none">
              <div class="border  w-[14px] bg-green-500 h-1/2"></div>
                   <p className="text-lg px-4 ">The coolest company I've joined. Friendly and healthy work
                    environment, mentors are very supportive they always helped to grow the overall skill of the employee.</p>
              </div>
       
      {/* second review end  */}

      {/* 3rd review start  */}
     
              <div className="box h-[360px] w-full flex flex-row  justify-center md:order-none">
              <div class="border  w-[14px] bg-green-500 h-1/2"></div>
                   <p className="text-lg px-4 ">I joined Geogo as a fresher and the team are like a family to me. 
                   They made me feel welcomed and provided me with a gradual learn to improve and develop my skills..</p>
              </div>
      

      {/* 3rd review end  */}
      </div>
     

      {/* first row start  */}
      <div className="row container  flex grid grid-cols-1 md:grid-cols-3">
              <div className="box h-[360px] w-full flex flex-row  justify-center md:order-none">
              <div class="border  w-[14px] bg-green-500 h-1/2"></div>
                   <p className="text-lg px-4 ">The founding members are extremely employee-friendly. They provide ample opportunities to learn and grow. As a fresher one will be 
                   allowed to experience working in different areas to find what best suits them.</p>
            </div>
       
     {/* first row end  */}

     {/* second review box start  */}
       
     
              <div className="box h-[360px] w-full flex flex-row  justify-center md:order-none">
              <div class="border  w-[14px] bg-green-500 h-1/2"></div>
                   <p className="text-lg px-4 ">The coolest company I've joined. Friendly and healthy work
                    environment, mentors are very supportive they always helped to grow the overall skill of the employee.</p>
              </div>
       
      {/* second review end  */}

      {/* 3rd review start  */}
     
              <div className="box h-[360px] w-full flex flex-row  justify-center md:order-none">
              <div class="border  w-[14px] bg-green-500 h-1/2"></div>
                   <p className="text-lg px-4 ">I joined Geogo as a fresher and the team are like a family to me. 
                   They made me feel welcomed and provided me with a gradual learn to improve and develop my skills..</p>
              </div>
      

      {/* 3rd review end  */}
      </div>
     </div>
    </div>

)

export default GlassDoorReview;
