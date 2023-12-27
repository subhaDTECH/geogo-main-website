import * as React from "react"
import "../hero.css"

import HiringImg1 from "../../images/hiring-img1.jpg";
// import HiringImg3 from "../../src/images/hiring-img3.jpg";
import HiringImg4 from "../../images/hiring-img4.jpg";
import MsMeImg1 from "../../images/msme-img1.jpg";
const MsmeSolutionCom = () => (
  <div className="Digital-product-Section">
    <div className="container  w-[90%] md:w-[90%] p-5 mx-auto my-10">
        <h1 className="text-5xl font-semibold leading-[70px] ml-5">Enabling tech for Micro Small & Medium Enterprises</h1>
       

        <div className="container flex flex-col md:flex-row justify-center py-5 my-10">
             <div className="w-full md:w-1/2 p-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">We help MSMEs to adopt technology aligned to their business goals</h3>
             </div>
              <div className="w-full md:w-1/2">
                <p className="text-[18px]">In today’s highly competitive and price sensitive market, to stay in the competition Industries need to constantly upgrade them both in terms of business models and technologies.</p>
                <p className="text-[18px]">MSMEs are backbone of Industry however the rapid change in the business models of large business enterprises will force the eco-system too push the boundaries and to be able to sustain those changes, adopting technology will become a mandate.</p>

                <p className="text-[18px]">We help MSMEs by working around their business goals and help them adopt technology.</p>
                <p className="text-[18px]">Processes in your business already exists. Just setting up a system around that can be quick and provide multitude of benefits.</p>
                
                <p>Break the MYTHS!:</p>
                  <ul>
                    <li>1. Technology is costly.</li>
                    <li>2. To get greater returns you need to invest in costly technologies.</li>
                    <li>3. Need major IT infrastructure and Team to manage.</li>
                    <li>4. We can manage the business with NO Technology.</li>
                </ul>
                  
              </div>
        </div>


        <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
             <div className="w-full md:w-1/2 p-5 my-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">We help you to…</h3>
                <p className="text-[18px] p-4">Understand your business goals.</p>
                <p className="text-[18px] p-4">Understand Your problems & Challenges.</p>
                <p className="text-[18px] p-4">Solutions aligned to your business goals.</p>
                 
             </div>
              <div className="w-full md:w-1/2 my-12 p-10">
                  <img alt="img" src={HiringImg1} />
              </div>
        </div>

        <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
             <div className="w-full md:w-1/2 p-5 my-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Why Us?</h3>
                <p className="text-[18px] p-4">1 . Team comprising of Domain & Technology know-how.</p>
                <p className="text-[18px] px-4">2. Helped numerous SMEs to leverage Technology for their Business Growth.</p>
                <p className="text-[18px] px-4">3 . Consultative Approach .</p> 
                <p className="text-[18px] px-4">4.  Cost Effective Solutions & Services.</p>
                <p className="text-[18px] px-4">5.  Providing Solutions aligned to your business goals.</p>
                <p className="px-4">Our mission – To simplify digital technology adoption for your business. </p>
             </div>
              <div className="w-full md:w-1/2 my-12 p-10">
                  <img alt="img" src={MsMeImg1} />
              </div>
        </div>
         

        <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
             <div className="w-full md:w-1/2 p-5 my-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">FAQs</h3>
                <p className="text-[20px] p-4 font-semibold">Our turnovers are less than 5 cr. Can we adopt technology?.</p>
                <p className="text-[18px] px-4">Yes, you can! It is a myth that technology adoption is costly.</p>
                <p className="text-[20px] px-4 font-semibold">What’s initial requirements we need for technology adoption?</p> 
                <p className="text-[18px] px-4">All what you need to have is a definite plan of technology adoption that matches and can help achieve your business goals.
                 We also help you in setting up these goals. Set up a meeting. (link).</p>
                <p className="text-[20px] px-4 font-semibold">Can the technology adoption be matched to our budgets?</p>
                <p className="text-[18px] px-4">Yes, there is cost involved but when you prioritize and set your technology goals in line with your business goals, it shows the value.
                 Not to forget today there are tools & technologies that will help with easy adoption and helping with lower cost of ownership. </p>

                 <p className="text-[20px] px-4 font-semibold">We are not sure how and where to start?</p>
                    <p className="text-[18px] px-4">Here, GEOGO helps you. We discuss with you to understand your goals, needs, pain areas to arrive at a most suitable solution for your organization. <a target="_black" href="/contact">Set an appointment for FREE</a>. </p>

                <p className="text-[20px] px-4 font-semibold">Once we invest in any technology, is there any further cost involved Year on Year?</p>
                <p className="text-[18px] px-4">In a cloud model where you pay as you use, the cost is very less, and you do not need any additional cost for maintaining an IT infrastructure. This is the best model when you want to opt for technology adoption.  In fact, in cloud model, you need just minimal IT infrastructure. By this way, your overhead cost in maintaining the infrastructure and requirements of people to manage those, comes drastically down. </p>
                <p className="text-[18px] px-4">If you opt for an on-premises mode, you need to also consider cost of the IT infrastructure and year on year maintenance costs. However even in on-premises models you can work out to fit your budgets.</p>

             </div>
              <div className="w-full md:w-1/2 my-12 p-10">
                  <img alt="img" src={HiringImg4} />
              </div>
        </div>
     </div>
  </div>
)

export default MsmeSolutionCom
