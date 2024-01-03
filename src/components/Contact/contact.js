import * as React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  // const isBrowser = typeof window !== "undefined"

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!formData.name || !formData.message || !formData.email) {
      toast.success("All field require !", {
        position: toast.POSITION.TOP_RIGHT,
      })
      //alert("please all the field ")

      return
    }
    try {
      const response = await fetch(
        `${process.env.STRAPI_API_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              // Replace these with your form field values
              name: formData.name,
              email: formData.email,
              message: formData.message,
              // Add other fields as needed based on your Strapi collection schema
            },
          }),
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
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        // Handle errors if any
        toast.error("Error sending data ", {
          position: toast.POSITION.TOP_RIGHT,
        })
        console.error("Error sending data")
      }
    } catch (error) {
      toast.error("Error sending data ", {
        position: toast.POSITION.TOP_RIGHT,
      })
      console.error("Error:", error)
    }
  }

  return (
    <section class="text-gray-600 body-font relative py-[100px] md:py-[100px]">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us<span className="text-green-500">.</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <p for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </p>
                  <input
                    autoComplete="off"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <p for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </p>
                  <input
                    autoComplete="off"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <p for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </p>
                  <textarea
                    autoComplete="off"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  type="submit"
                  class="flex mx-auto text-white bg-[#013220] border-0 py-2 px-8 focus:outline-none hover:bg-[#fff] hover:text-green-500 hover:border hover:border-green-400 rounded text-lg"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
