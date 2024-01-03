import * as React from "react"
import CareerHeroImg from "../../images/career-img.jpg"
import "./Career.css"
// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";

const CareerHero = () => (
  <div className="Career-Section my-[100px] sm:my-[200px]">
    <div className="container-full text-start h-full mx-auto w-full md:w-[95%] p-5 m-3 my-10 p-10">
      <h1 className="title-heading text-3xl md:text-5xl mb-4 font-medium mx-5   p-5">
        Crafting software with a human touch.
      </h1>
      <section class="body-font mx-4">
        <div class="container flex-col mx-auto flex px-5 py-15 md:py-24 md:flex-row items-center lg:justify-center">
          <div class="order-2 md:order-1 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto text-center">
            <img
              class="object-cover object-center rounded my-3"
              alt="hero"
              src={CareerHeroImg}
            />
          </div>
          <div class=" order-1 md:order-2 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left ">
            <h3 class="text-3xl sm:text-4xl py-3  mb-4 font-medium text-start">
              Why GEOGO?
            </h3>
            <h3 className="text-xl md:text-3xl mb-4">
              We offer a workspace to be yourself.
            </h3>
            <p className="text-lg my-4">
              At GEOGO, we give shape to ideas — digitally. In 2016, three of us
              began with building mobile and web apps. Today, with over 15
              full-time team members, we have launched more than 25+ apps,
              websites. One of these amazing product applied for Y-Combinator
              and 4 got funded. Not only we develop products that impact
              thousands of users, we design products to touch people’s lives.
            </p>
            <p className="text-lg my-3">
              GEOGO cultivates a culture of makers who are passionately curious
              about their craft. We hire innovative, growth-minded talent and
              provide them with the freedom to create products people love.
            </p>
            <p className="text-lg my-3">
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
