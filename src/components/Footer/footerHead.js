import * as React from "react"
import { Link } from "gatsby"
import FooterImg1 from "../../images/footer-logo1.png"
import FooterImg2 from "../../images/footer-logo2.png"
import { FaArrowRight } from "react-icons/fa"
import { useOpenState } from "../OpenStateProvider.js"
import TabDialog from "../Contact/Tab.js"

const FooterHead = () => {
  const { open, setOpen } = useOpenState()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {open && (
        <TabDialog
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
      <div className=" h-[100%]   w-full flex flex-col lg:flex-row z-20">
        <Link
          to="/solution"
          className="left-box   no-underline cursor-pointer  py-[80px] flex justify-center  flex-col w-full lg:w-1/2 h-auto bg-[#2c6839] text-white "
        >
          <p className="text-lg  sm:mx-5 lg:mx-10 px-3 font-normal">
            Solutions
          </p>
          <h3 className="text-2xl md:text-4xl sm:mx-5 lg:mx-10 px-3 py-3 font-normal">
            Explore Our Offering.
          </h3>
          <div className="mx-[10px] sm:mx-[30px] lg:mx-[55px] animate-bounce my-3">
            <FaArrowRight size={"40px"} />
          </div>
        </Link>
        <div className="right-box  row bg-[#f1ece4]  w-full  p-4  lg:w-1/2  text-black">
          <div className="lg:p-4">
            <h4 className="md:px-5 text-black text-[36px] ">Get in Touch</h4>
            <span className="md:px-5 text-[16px] mx-1  text-[#464646]">
              We’d love to hear from you.
            </span>
            <br></br>
            <span className="md:px-5 text-[16px] mx-1 mb-2  text-[#464646]">
              Just tell us what you want from us.
            </span>
            <br></br>
          </div>
          <div className="right-box-context   lg:mt-[-60px] flex flex-col lg:flex-row  lg:mx-10 gap-2  items-center justify-center">
            <div className="btn-box-container sm:my-5 sm:px-5 lg:px-0 lg:my-0   lg:mt-[-55px] w-[100%] lg:w-[50%] flex flex-col items-center justify-center ">
              <div className="w-full  mt-4 lg:mt-0">
                <span className="text-xl  font-medium mt-[30px]">
                  You want to...
                </span>
                <button
                  onClick={handleClickOpen}
                  className="text-start  text-[#464646] w-full mt-2  hover:bg-gray-100  hover:border-green-500  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  <Link className="no-underline  text-[#464646]">
                    Get our Service
                  </Link>
                </button>
              </div>
              <button
                onClick={handleClickOpen}
                className=" text-start  text-[#464646] w-full  m-2  hover:bg-gray-100  hover:border-green-500  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                <Link className="no-underline  text-[#464646]">
                  Become Our Patner
                </Link>
              </button>
              <button
                onClick={handleClickOpen}
                className="text-start w-full   text-[#464646] m-2  hover:bg-gray-100  hover:border-green-500  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                <Link className="no-underline  text-[#464646]">
                  Join Our Team
                </Link>
              </button>
              <button
                onClick={handleClickOpen}
                className="text-start w-full text-[#464646]  m-2  hover:bg-gray-100 hover:border-green-500  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                <Link className="no-underline  text-[#464646]">
                  Discuss about something else
                </Link>
              </button>
            </div>
            <div className="content-box    py-4  sm:p-5  my-5 mx-3 w-[100%] lg:w-[60%]  flex  flex-col  justify-center">
              <div className="flex  mt-[30px] flex-row justify-center">
                <div className="footer-img-container w-[140px] h-[140px] sm:w-[100px] sm:h-[100px] lg:w-[150px]  lg:h-[150px]">
                  <img
                    alt="img"
                    className="w-[100%] h-[100%] object-contain"
                    src={FooterImg1}
                  />
                </div>
                <div className="p-2 m-2">
                  <h3 className="text-[16px]">Confidentiality Assured!</h3>
                  <p className="text-sm text-[#464646]">
                    We are assuring you, your words will stay within us. If you
                    are willing to share any confidential information or idea
                    with us, we are always committed to protect that.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div className="footer-img-container w-[140px] h-[140px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h[150px] ">
                  <img
                    alt="img"
                    className="w-[100%] h-[100%] object-contain sm:ml-[-10px] lg:ml-[0px]"
                    src={FooterImg2}
                  />
                </div>
                <div className="p-2 m-2">
                  <h3 className="text-[16px]">
                    Same Day Response is Guaranteed!
                  </h3>
                  <p className="text-sm text-[#464646]">
                    We are eagerly waiting to hear from you. Write to us and get
                    guaranteed response within 24hrs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterHead
