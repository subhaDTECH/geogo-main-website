import * as React from "react"
import AboutImg from "../../images/about-img.jpg"

const CompanyHero = () => (
  <div className="Company-Section my-[40px] sm:my-[200px]">
    <div className="container  w-[95%] md:w-[90%]  p-5 m-3 flex flex-col mx-auto grid grid-cols-1 md:grid-cols-2 px-5 md:flex-col md:flex-row ">
      <div className="HeroTextContainer  m-4 p-4 order-2">
        <h2 className="Herotitle">
          About Us<span className="text-green-500">.</span>
        </h2>
        <p className="mt-5 pt-5">
          We are an Agile digital technology solutions company. Our mission is
          to simplify digital technology adoption for businesses.
        </p>
        <p>
          We are Team of Champions - we collaborate, support & defend our
          mission. We wish to translate our passion and energy into extra
          ordinary results that will deliver high values to our customers and
          society at large. And, we as business, we expect to derive profit and
          growth from our endeavours..
        </p>
        <p>
          Our emblem signifies agility, we are always on the GO. But we wish to
          stay grounded always to our core values, ethics and to our roots. We
          are GeoGO !!
        </p>
      </div>
      <div className="HeroImgContainer m-4 p-4 order-2">
        <img
          alt="Img"
          className="w-[100%] h-[100%] object-contain"
          src={AboutImg}
        />
      </div>
    </div>
  </div>
)

export default CompanyHero
