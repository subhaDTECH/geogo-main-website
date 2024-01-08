import React, { useState } from "react"
import Dialog from "@mui/material/Dialog"
import List from "@mui/material/List"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import { IoCloseSharp } from "react-icons/io5"
import Slide from "@mui/material/Slide"
import { Button } from "@mui/material"
import ContactQuestion from "./ContactQuestion"

import { Link } from "gatsby"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const questions = [
  {
    title:
      "Thanks for reaching out. Now let's grab your contact details so we can get back to you. First off, what's your name? *",
    placeholder: "Type your name here...",
    required: true,
    multiline: false,
    field: "name",
    fieldType: "text",
  },
  {
    title: "Great. Could you let us know your email address, _____? *",
    placeholder: "Type your Email ID here...",
    required: true,
    multiline: false,
    field: "email",
    fieldType: "email",
  },
  {
    title:
      "Thanks for that. Could you let us know your contact number, _____? (though it's optional, but recommended)",
    placeholder: "Type your mobile number here...",
    field: "contact_no",
    fieldType: "text",
    required: false,
    multiline: false,
  },
  {
    title: "Great. What is your company's name? (it's optional)",
    placeholder: "Type your company's name here (if any)...",
    field: "company",
    fieldType: "text",
    required: false,
    multiline: false,
  },
  {
    title: "And finally, what would you like to say? *",
    placeholder: "Type your message here...",
    field: "message",
    fieldType: "text",
    required: true,
    multiline: true,
  },
]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function TabDialog({ open, handleClickOpen, handleClose }) {
  const [openDialog, setOpenDialog] = useState(false)
  const [qIndex, setQIndex] = useState(1)
  const [sendInBlueList, setSendInBlueList] = useState(null)
  const [formObj, setFormObj] = useState({})
  const [requesting, setRequesting] = useState(false)
  const [requestSuccess, setRequestSuccess] = useState(false)
  const [requestError, setRequestError] = useState(false)
  const [isFormSubmit, setIsformSubmit] = useState(false)

  const handleClickOpenDialog = listId => {
    setOpenDialog(true)
    setQIndex(1)
    setSendInBlueList(listId)
    setRequestSuccess(false)
    setRequestError(false)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setRequestSuccess(false)
    setRequestError(false)
  }

  const inputDataHandler = (name, value) => {
    setFormObj({
      ...formObj,
      [name]: value,
    })
  }

  const submitContactForm = async () => {
    console.log(formObj, "formObj")
    // try {
    //   const res = await axios.post(
    //     `${process.env.STRAPI_API_URL}/api/contacts`,
    //     {
    //       data: formObj,
    //     }
    //   )
    //   const data = res.data
    //   console.log(data, "data coming after submit !!")
    // } catch (err) {
    //   toast.error("Error sending data ", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   })
    //   console.error("Error:", err)
    // }

    // using fetch method

    try {
      const response = await fetch(
        `${process.env.STRAPI_API_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formObj }),
        }
      )

      if (response.ok) {
        // Data sent successfully
        toast.success(" Message sent successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        })
        // alert(" Data sent successfully ")
        console.log("Data sent successfully")

        //set the from again
        setFormObj({})
        setIsformSubmit(true)
      } else {
        // Handle errors if any
        toast.error("Error sending data ", {
          position: toast.POSITION.TOP_RIGHT,
        })
        setIsformSubmit(false)
        console.log(response)
        console.error("Error sending data")
      }
    } catch (error) {
      toast.error("Error sending data ", {
        position: toast.POSITION.TOP_RIGHT,
      })
      setIsformSubmit(false)
      console.log(error, "error")
    }
  }

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#006838" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="#006838"
              onClick={handleClose}
              aria-label="close"
            >
              {/* <CloseIcon /> */}
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, textAlign: "center" }}
              variant="h6"
              component="div"
            >
              Get in touch with us
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <IoCloseSharp size={"30px"} />
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ToastContainer />
          <div className="w-full mx-5 lg:w-[60%] mx-auto my-10 top-[80px] p-5 flex flex-col justify-center items-center">
            {!isFormSubmit &&
              questions.map((q, index) => {
                return (
                  <ContactQuestion
                    key={q.field}
                    data={q}
                    index={index + 1}
                    total={questions.length}
                    activeIndex={qIndex}
                    setActiveIndex={setQIndex}
                    inputDataHandler={inputDataHandler}
                    isSubmit={index === questions.length - 1 ? true : false}
                    submitContactForm={submitContactForm}
                    requesting={requesting}
                  />
                )
              })}
            {isFormSubmit && (
              <div className="text-center  p-4 my-[80px]  sm:my-[100px] lg:my-[80px] flex flex-col items-center justify-center">
                <h3 className="text-2xl my-3">We collected Your Messages !!</h3>
                <button className="w-[120px ] my-3 bg-[#006838] px-[20px] text-white py-[10px] ">
                  <Link to="/" className="no-underline text-white">
                    Visit Home Page
                  </Link>
                </button>
              </div>
            )}
          </div>
        </List>
      </Dialog>
    </React.Fragment>
  )
}
