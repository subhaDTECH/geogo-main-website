import * as React from "react"
import AboutImg from "../../images/about-img.jpg"

const CompanyHero = () => (
  <div className="Company-Section mt-[100px] my-[100px] sm:my-[150px] lg:my-[80px]">
    <div className="w-full   sm:w-[95%]  p-5 m-3   mx-auto grid grid-cols-1 md:grid-cols-2 px-5  ">
      <div className="HeroTextContainer mx-3  sm:m-4 sm:p-4 order-2">
        <h2 className="text-[46px]">
          About Us<span className="text-green-500">.</span>
        </h2>
        <p className="mt-5 pt-5 text-[22px] opacity-0.3">
          We are an Agile digital technology solutions company. Our mission is
          to simplify digital technology adoption for businesses.
        </p>
        <p className="text-[22px]">
          We are Team of Champions - we collaborate, support & defend our
          mission. We wish to translate our passion and energy into extra
          ordinary results that will deliver high values to our customers and
          society at large. And, we as business, we expect to derive profit and
          growth from our endeavours..
        </p>
        <p className="text-[22px]">
          Our emblem signifies <span className="font-semibold">agility</span>,
          we are always on the GO. But we wish to stay{" "}
          <span className="font-semibold"> grounded</span> always to our core
          values, ethics and to our roots. We are GeoGO !!
        </p>
      </div>
      <div className=" h-[300px] md:h-[500px]   lg:p-[30px] w-[80%] sm:m-4 sm:p-4 order-2 mx-3">
        <img
          alt="Img"
          className="w-[100%] h-[100%] object-contain lg:p-[20px]"
          src={AboutImg}
        />
      </div>
    </div>
  </div>
)

export default CompanyHero
