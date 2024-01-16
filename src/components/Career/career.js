import * as React from "react"
import CareerHeroImg from "../../images/career-img.jpg"
import "./Career.css"
// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
// m-4 lg:mt-[100px] h-[300px] lg:h-[450px] order-2 md:order-1 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto text-center
const CareerHero = () => (
  <div className="Career-Section mt-[150px] lg:mt-[20px]">
    <div className="text-start  mx-auto w-full md:w-[95%] p-5 m-3 sm:my-10 ">
      <h1 className="title-heading text-3xl md:text-5xl mb-4 font-medium mx-5 mt-[100px]  pt-5 sm:p-4">
        Crafting software with a human touch
        <span className="text-green-500">.</span>
      </h1>
      <section className="body-font w-[95%] mx-auto mt-[80px]">
        <div className="grid gird-cols-1 sm:grid-cols-2 gap-3">
          <div className="w-full  lg:w-[80%] h-[400px] order-2 sm:order-1 p-3">
            <img
              className="object-cover object-center rounded my-3 w-[100%] h-[100%]"
              alt="hero"
              src={CareerHeroImg}
            />
          </div>
          <div className=" w-full mx-[0px] lg:mx-[20px] px-4 order-1 sm:order-2">
            <h3 className="text-3xl sm:text-4xl py-3  mb-4 font-medium text-start">
              Why GEOGO?
            </h3>
            <h3 className="text-xl md:text-3xl mb-4">
              We offer a workspace to be yourself.
            </h3>
            <p className="text-[17px] my-4 mr-5">
              At GEOGO, we give shape to ideas — digitally. In 2016, three of us
              began with building mobile and web apps. Today, with over 15
              full-time team members, we have launched more than 25+ apps,
              websites. One of these amazing product applied for Y-Combinator
              and 4 got funded. Not only we develop products that impact
              thousands of users, we design products to touch people’s lives.
            </p>
            <p className="text-[17px] my-3 mr-5">
              GEOGO cultivates a culture of makers who are passionately curious
              about their craft. We hire innovative, growth-minded talent and
              provide them with the freedom to create products people love.
            </p>
            <p className="text-[17px] my-3  mr-5">
              We give more preference to hands-on-skills over academic
              qualifications. We aim to build teams with diverse backgrounds,
              skills, and perspectives to enhance problem solving and foster
              innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default CareerHero
