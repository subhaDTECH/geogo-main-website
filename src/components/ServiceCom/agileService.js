import * as React from "react"
import "../hero.css"

const AgileServiceCom = () => (
  <div className="Digital-product-Section">
    <div className="container  w-[90%] md:w-[90%] p-5 mx-auto my-10">
      <h1 className="text-5xl font-semibold leading-[70px] ml-[30px]">
        Agile Service <br></br> Management
      </h1>

      <div className="container flex flex-col md:flex-row justify-center py-5 my-10">
        <div className="w-full md:w-1/2 p-5">
          <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
            Built to maximize the speed of doing business and out-perform others
            every single time
          </h3>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-[18px]">
            The speed at which business is done today at blinking speed. The
            software industry is the forerunner on this front. The release cycle
            of softwares has been reduced to days from years.
          </p>
          <p className="text-[18px]">
            {" "}
            On the other end, software applications are moving away from desktop
            to Cloud. Being Cloud native is becoming a norm and not a choice.
          </p>

          <p className="text-[18px]">
            All these shifts is prompting to change every activity of a software
            life cycle starting from designing, development, testing, release
            and all way to deployment & maintenance.
          </p>
          <p className="text-[18px]">
            Where Continuous Integration / Continuous Deployment is the
            buzzword, lot of business though willing to adopt the path finds a
            challenge to adopt it. Finding adequate time, right skill on the job
            and getting a clear ROI are top 3 reason cited by Business Leaders
            as the major hindrance for taking a step towards this Change of
            getting Agile, employ CI/CD in their process and finally becoming
            Cloud native.
          </p>
          <p className="text-[18px]">
            Cloud and Devops exists mutually. Once you adopt Cloud, right DevOps
            strategy followed by careful implementation will reap in multi edge
            benefits, namely
          </p>

          <ul>
            <li>Increased Developer productivity</li>
            <li>Faster time to market</li>
            <li>Automate mundane repetitive tasks</li>
            <li>Eliminate downtimes</li>
            <li>
              Scale your business – start small and ramp up your infrastructure
              and you scale up. Avoid upfront CAPEX.
            </li>
          </ul>
          <p className="text-[18px]">
            Cloud, DevOps, Agile – Lets crack the puzzle together.
          </p>
        </div>
      </div>

      <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
        <div className="w-full md:w-1/2 p-5 my-5">
          <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
            Cloud native
          </h3>
          <p className="text-[18px] p-4">
            Cloud native is about speed and agility. Business systems are
            evolving from enabling business capabilities to being weapons of
            strategic transformation that accelerate business velocity and
            growth.
          </p>
          <p className="text-[18px] p-4">
            Cloud native applications deliver faster time to market, higher
            scalability, simpler management and reduce cost through
            containerization, microservices, automation and DevOps practices.
          </p>
          <p className="text-[18px] p-4">
            For Cloud implementation, Agile principles serve as a driver, as
            there are shorter release cycles and automation to deliver fast and
            achieve the deadlines. We consult to model and setup Cloud for your
            team/organisation.
          </p>
        </div>
        <div className="w-full md:w-1/2 my-12 p-10">
          <p className="text-xl mt-10 py-4 font-semibold">EXPERTISE</p>
          <div className="row grid grid-cols-2 gap-1">
            <p className="text-[18px]">DigitalOcean</p>
            <p className="text-[18px]">Google Cloud</p>
            <p className="text-[18px]">Netlify</p>
            <p className="text-[18px]">AWS</p>
            <p className="text-[18px]">Azure</p>
          </div>
        </div>
      </div>

      <div className="container shadow-lg border border-gray-200 flex flex-col md:flex-row justify-center py-5 my-8">
        <div className="w-full md:w-1/2 p-5 my-5">
          <h3 className="text-4xl font-semibold mt-10 p-4 leading-[50px]">
            DevOps & CI-CD
          </h3>
          <p className="text-[18px] p-4">
            We, at GEOGO, both as a practitioner and consultant understand the
            inertia arounds DevOps & CI/CD. We continuously strive and work with
            our Clients & Partners to make the DevOps adoption easy and smooth.
          </p>
          <ul>
            <li>
              We do analysis & assessment of your current process to understand
              the need and the maturity levels.
            </li>
            <li>
              We help you design and restructure your processes which are Agile
              and fit organically.
            </li>
            <li>
              We can set up the CI/CD pipeline for you identifying the right set
              of tools based on your requirement & financial criteria.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 my-12 p-10">
          <p className="text-xl mt-10 py-4 font-semibold">EXPERTISE</p>
          <div className="row grid grid-cols-2 gap-1">
            <p className="text-[18px]">DigitalOcean</p>
            <p className="text-[18px]">Google Cloud</p>
            <p className="text-[18px]">Kubernetes</p>
            <p className="text-[18px]">Docker</p>
            <p className="text-[18px]">Ansible</p>
            <p className="text-[18px]">AWS</p>

            <p className="text-[18px]">Netlify</p>
            <p className="text-[18px]">Azure</p>
            <p className="text-[18px]">Gitlab Pipeline</p>
            <p className="text-[18px]">Jenkins</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AgileServiceCom
