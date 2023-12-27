import * as React from "react"
import "../hero.css"
import HiringImg1 from "../../images/hiring-img1.jpg";
import HiringImg3 from "../../images/hiring-img3.jpg";
import HiringImg4 from "../../images/hiring-img4.jpg";
import HiringImg5 from "../../images/hiring-img5.jpg";

const RecruitmentTrainingCom = () => (
  <div className="Recruitment-Section">
    <div className="container  w-[90%] md:w-[90%] p-5 mx-auto my-10">
        <h1 className="text-5xl font-semibold leading-[70px] ml-5">recruitment <br></br> and training</h1>
       

        <div className="container flex flex-col md:flex-row justify-center py-5 my-10">
             <div className="w-full md:w-1/2 p-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">We help businesses with Remote Hiring – Assessment – Outsourcing – Trainings</h3>
             </div>
              <div className="w-full md:w-1/2">
                <p className="text-[18px]">At GEOGO we help you take your idea to market. But we don’t stop there. We go beyond it to ensure that reach the next level.</p>
                <p className="text-[18px]">  As part of that commitment, we also help our clients to set up their own Tech Team so that the business becomes self-sufficient and scales by itself.</p>

                
                <p className="text-[18px]">As part of the GEOGO service we offer :</p>

                  <ul>
                    <li>Campus hiring setup and assistance</li>
                    <li>Technical Assessment of candidates for the desired job role</li>
                    <li>Training and Orientation for hired candidates to get started on the job.</li>
                    <li>Hiring and offering Contractual role on GEOGO payroll</li>
                    <li>HR Policy Formation.</li>
                    <li>HR Process Implementation</li>

                  </ul>
                 
              </div>
        </div>


        <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
             <div className="w-full md:w-1/2 p-5 my-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Remote hiring</h3>
                <p className="text-[18px] px-4">Make your hiring process and decision easier and accurate with ScoutLive (our remote hiring platform). From conducting tests to automated video interviews to post offer engagement, our platform connects all dots.</p>
                 <p className="text-[18px] px-4">In post COVID era, where on-campus drives are almost next to impossible, our ecosystem aims to find the right talent for you, remotely.</p>
                  <p className="text-[18px] px-4">Not only that, we even do the post offer engagement to:</p>
                  <ul>
                    <li>Identify ‘ghosting’ earlier</li>
                    <li>Continuous engagement with offered candidates resulting in less drop outs.</li>
                    <li>Self train to make induction process faster</li>
                  </ul>
             </div>
              <div className="w-full md:w-1/2 my-12 p-10">
                 <img src={HiringImg4} alt="img" />
              </div>
        </div>


        <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
             <div className="w-full md:w-1/2 p-5 my-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Assessment</h3>
                <p className="text-[18px] px-4">Measure your candidates on skill, personality & ability. Our ScoutLive ecosystem aims to simplify your hiring process and find the right talent for you.</p>

                  <p className="text-[18px] px-4">We conduct:</p>
                  <ul>
                    <li>Coding tests on C, C++, Java, Python, Ruby, PHP, JavaScript and more to evaluate hands-on technical, analytical and problem solving skills of a candidate.</li>
                    <li>Aptitude tests to measure innate, learned or acquired ability of an individual to perform certain tasks. Aptitude tests inculcate many factors like Numerical reasoning, verbal reasoning, abstract reasoning, speed, accuracy and more.</li>
                    <li>Psychometric tests to evaluate a candidate’s decision making, intelligence and motivation to find his/her psychological compatibility for the intended position.</li>
                  </ul>
             </div>
              <div className="w-full md:w-1/2 my-12 p-10">
                 <img alt="img" src={HiringImg3} />
              </div>
        </div>


        <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
             <div className="w-full md:w-1/2 p-5 my-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Training</h3>
                <p className="text-[18px] px-4">We also offer Training Services based on custom needs. Our team consists of multi domain professionals carrying experience of over 15 years and will help address your needs effectively.</p>

                 
             </div>
              <div className="w-full md:w-1/2 my-12 p-10">
                 <img alt="img" src={HiringImg5} />
              </div>
        </div>


        <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
             <div className="w-full md:w-1/2 p-5 my-5">
                <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">Outsourcing</h3>
                <p className="text-[18px] px-4">We hire and offer contractual role on GEOGO payroll. We also help to form policies guided by your company principles, regulatory norms, which form the guidelines of your organization. Policies don’t work unless Process are set out properly. Setting up HR Process helps in optimum implementation of policies & percolating down to employees. Effective communication of process and policies to employees has resulted in better adherence.</p>

                 
             </div>
              <div className="w-full md:w-1/2 my-12 p-10">
                 <img alt="img" src={HiringImg1} />
              </div>
        </div>
      
        


       




    </div>
  </div>
)

export default RecruitmentTrainingCom
