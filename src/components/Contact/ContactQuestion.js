import React, { useState, useEffect } from "react"
import Typography from "@mui/material/Typography"

import { Button } from "@mui/material"
// import { IoCloseSharp } from "react-icons/io5"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ContactQuestion = ({
  data,
  index,
  total,
  activeIndex,
  setActiveIndex,
  inputDataHandler,
  isSubmit,
  submitContactForm,
  requesting,
}) => {
  const [value, setValue] = useState({})
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  console.log(value, "value")
  console.log(isError, "iserror")
  console.log(errorMessage, "error message")

  useEffect(() => {
    // Update the document title using the browser API
    document.getElementById("1").focus()
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }, [errorMessage, isError, index])

  const onEnterHandler = (event, index, isSubmit, isRequired) => {
    console.log("enter event ", event)
    console.log("enter index", index)
    console.log("enter submit", isSubmit)
    console.log("enter required", isRequired)

    if (!isSubmit && event.key === "Enter") {
      if (isRequired && event.target.value === "") {
        setIsError(true)
        setErrorMessage("It's a required field")
      } else {
        setIsError(false)
        setErrorMessage("")
        setActiveIndex(activeIndex + 1)
        var element = document.getElementById(index + 1)
        element.focus()
      }
    } else if (isSubmit && event.key === "Enter") {
      if (isRequired && event.target.value === "") {
        setIsError(true)
        setErrorMessage("It's a required field")
      } else {
        setIsError(false)
        setErrorMessage("")

        //submit form
        submitContactForm()
      }
    }
  }

  const onClickHandler = (index, field, isRequired) => {
    const fValue = value[`${field}`]
    if ((typeof fValue === "undefined" || fValue === "") && isRequired) {
      setIsError(true)
      setErrorMessage("It's a required field")
    } else {
      setActiveIndex(activeIndex + 1)
      var element = document.getElementById(index + 1)
      element.focus()
    }
  }

  const onSubmitHandler = (field, isRequired) => {
    const fValue = value[`${field}`]
    if ((typeof fValue === "undefined" || fValue === "") && isRequired) {
      setIsError(true)
      setErrorMessage("It's a required field")
    } else {
      submitContactForm()
    }
  }

  const inputHandler = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
    inputDataHandler(e.target.name, e.target.value)
  }

  return (
    <div
      className={` my-[50px] mx-[20px]  w-[100%]   ${
        activeIndex === index ? "block my-10" : "hidden  my-10"
      }`}
    >
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Question {index} of {total}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {data.title}
      </Typography>
      <div className="w-[100%]">
        <input
          id={index}
          name={data.field}
          type={data.fieldType}
          className="my-4 border border-black w-full
         focus:border-green-500
         block w-full  p-2.5 
        
        text-sm rounded-lg w-full p-2.5"
          required={data.required}
          placeholder={data.placeholder}
          multiline={data.multiline}
          error={isError}
          helperText={errorMessage}
          onKeyDown={e => onEnterHandler(e, index, isSubmit, data.required)}
          onChange={inputHandler}
        />
      </div>

      {isSubmit ? (
        <div className="">
          <Button
            className="bg-[#006838]"
            size="large"
            variant="contained"
            color="success"
            // endIcon={<IoCloseSharp />}
            onClick={() => onSubmitHandler(data.field, data.required)}
            disabled={requesting}
          >
            {requesting ? "PLEASE WAIT" : "SUBMIT"}
          </Button>
        </div>
      ) : (
        <div className="flex items-center ">
          <Button
            className="bg-[#006838]"
            size="large"
            variant="contained"
            color="success"
            // color="sucess"
            // endIcon={<IoCloseSharp />}
            onClick={() => onClickHandler(index, data.field, data.required)}
          >
            OK
          </Button>
          &nbsp; &nbsp;
          <Typography variant="body2" color="textSecondary" gutterBottom>
            press Enter ↵
          </Typography>
        </div>
      )}
    </div>
  )
}

export default ContactQuestion
