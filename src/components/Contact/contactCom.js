import React from "react"
import FooterImg1 from "../../images/footer-logo1.png"
import FooterImg2 from "../../images/footer-logo2.png"
import TabDialog from "./Tab"
import { useOpenState } from "../OpenStateProvider"

const ContactCom = () => {
  // const [open, setOpen] = React.useState(false)
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
      <div className="  w-[90%] mx-auto flex flex-col justify-between lg:flex-row my-3 sm:my-[28px] lg:my-10">
        <div className="right-box row  w-full my-5  sm:mt-[60px] lg:mt-[20px]  text-black">
          <div className="lg:mx-4 lg:p-4 my-2">
            <h1 className="lg:px-4 text-black text-[36px] sm:text-5xl ">
              Let's have a talk <span className="text-green-500">.</span>
            </h1>
            <p className="lg:px-4 text-[18px]">
              Just tell us what you want from us.
            </p>
          </div>

          <div className="right-box-context  flex justify-between flex-col lg:flex-row flex-row lg:mx-10 gap-2">
            <div className="btn-box-container lg:w-1/2 w-full  flex flex-col items-center justify-center">
              <button
                type="button"
                data-hs-overlay="#hs-full-screen-modal"
                className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={handleClickOpen}
              >
                Get our Service
              </button>
              <button
                type="button"
                onClick={handleClickOpen}
                data-hs-overlay="#hs-full-screen-modal"
                className=" text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Become Our Patner
              </button>
              <button
                onClick={handleClickOpen}
                data-hs-overlay="#hs-full-screen-modal"
                className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Join Our Team
              </button>
              <button
                onClick={handleClickOpen}
                data-hs-overlay="#hs-full-screen-modal"
                className="text-start w-full border border-gray-500 px-3 py-2 m-3  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Discuss about something else
              </button>
            </div>
            <div className="content-box m-3  flex  flex-col  justify-center sm:mx-3">
              <div className="flex flex-row justify-center sm:mx-3">
                <div className="footer-img-container  w-[100px] h-[100px] lg:w-[70px] lg:h-[70px] ">
                  <img
                    alt="img"
                    className="w-[100%] h-[100%] object-contain"
                    src={FooterImg1}
                  />
                </div>
                <div className="p-2 m-2 lg:mx-3">
                  <h3 className="text-lg">Confidentiality Assured!</h3>
                  <p className="text-sm">
                    We are assuring you, your words will stay within us. If you
                    are willing to share any confidential information or idea
                    with us, we are always committed to protect that.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center sm:mx-3 sm:mx-0">
                <div className="footer-img-container w-[100px] h-[100px] lg:w-[70px] lg:h-[70px] ">
                  <img
                    alt="img"
                    className="w-[100%] h-[100%] object-contain"
                    src={FooterImg2}
                  />
                </div>
                <div className="p-2 m-2">
                  <h3 className="text-lg">Same Day Response is Guaranteed!</h3>
                  <p className="text-sm">
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

export default ContactCom
