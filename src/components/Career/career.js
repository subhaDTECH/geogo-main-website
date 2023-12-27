import * as React from "react"
import CareerHeroImg from "../../images/career-img.jpg";

// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";

const CareerHero = () => (
    <div className="Career-Section">
        <div className="container-full text-start h-full mx-auto w-full md:w-[95%] p-5 m-3 my-10 p-10">
            <h1 className="text-3xl md:text-5xl mb-4 font-medium mx-5 leading-tight  p-5">Crafting software with a human touch.</h1>
            <section class="body-font mx-4">
                <div class="container mx-auto flex px-5 py-24 flex-row items-center justify-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={CareerHeroImg}/>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h3 class=" sm:text-4xl text-3xl mb-4 font-medium">
                             Why GEOGO? 
                        </h3>
                        <h3 className="sm:text-4xl text-3xl mb-4">We offer a workspace to be yourself.</h3>
                          <p className="text-lg my-4">At GEOGO, we give shape to ideas — digitally. In 2016, three of us began with building mobile and web apps. Today, with over 15 full-time team members, we have launched more than 25+ apps, websites. One of these amazing product applied for
                             Y-Combinator and 4 got funded. Not only we develop products that impact thousands of users, we design products to touch people’s lives.</p>
                          <p className="text-lg my-3">GEOGO cultivates a culture of makers who are passionately curious about their craft. We hire innovative, growth-minded talent and provide them with the freedom to create products people love.</p>
                          <p className="text-lg my-3">We give more preference to hands-on-skills over academic qualifications. We aim to build teams with diverse backgrounds, skills, and perspectives to enhance problem solving and foster innovation.</p>
                       
                    </div>
                </div>
            </section>
       </div>
    </div>

)

export default CareerHero;
