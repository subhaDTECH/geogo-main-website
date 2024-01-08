import React from "react"
import FooterImg1 from "../../images/footer-logo1.png"
import FooterImg2 from "../../images/footer-logo2.png"
import TabDialog from "./Tab"

const ContactCom = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // ;<TabDialog
  //   open={open}
  //   handleClickOpen={handleClickOpen}
  //   handleClose={handleClose}
  // />
  //sevice_category
  //belongs to many
  //services

  return (
    <>
      {open && (
        <TabDialog
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
      (
      <div className=" h-[100%] w-[90%] mx-auto flex flex-col justify-between lg:flex-row my-10">
        <div className="right-box row  w-full my-5    text-black">
          <div className="mx-4 p-4 my-2">
            <h2 className="px-4 text-black text-2xl sm:text-5xl">
              Let's have a talk <span className="text-green-500">.</span>
            </h2>
            <p className="px-4 text-[18px]">
              Just tell us what you want from us.
            </p>
          </div>

          <div className="right-box-context  flex justify-between flex-col lg:flex-row flex-row mx-10 gap-2">
            <div className="btn-box-container w-full  flex flex-col items-center justify-center">
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
            <div className="content-box m-3  flex  flex-col  justify-center">
              <div className="flex flex-row justify-center">
                <div className="footer-img-container  w-[80px] h-[80px] md:w-[50px] md:h-[50px]">
                  <img
                    alt="img"
                    className="w-[100%] h-[100%] object-contain"
                    src={FooterImg1}
                  />
                </div>
                <div className="p-2 m-2">
                  <h3 className="text-lg">Confidentiality Assured!</h3>
                  <p className="text-sm">
                    We are assuring you, your words will stay within us. If you
                    are willing to share any confidential information or idea
                    with us, we are always committed to protect that.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center">
                <div className="footer-img-container w-[80px] h-[80px] md:w-[50px] md:h[50px] ">
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
      )
    </>
  )
}

export default ContactCom
