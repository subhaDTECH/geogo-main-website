import * as React from "react"
import { useState, useCallback } from "react"
// import "../service.css"

import "./technology.css"

//import graphql

const Technology = ({ tools }) => {
  // const [toolsData,setToolsData]=useState(tools);
  const [showTools, setTools] = useState(tools)

  // const handleClick = type => {
  //   console.log(type, "type")
  //   const newData = tools.filter(tool => {
  //     return tool.type === type
  //   })

  //   setTools(newData)
  // }

  const handleClick = useCallback(
    type => {
      const newData = tools.filter(tool => tool.type === type)
      setTools(newData)
    },
    [tools]
  )

  const resetTools = useCallback(() => {
    setTools(tools)
  }, [tools])

  return (
    <div className="Technology-Section">
      <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
        <h3 className="title">
          Ensuring quality and performance using these{" "}
          <span className="text-green-500">Tools</span> and{" "}
          <span className="text-green-500">Technologies</span>.
        </h3>
        <div className="btn-container flex items-center justify-start  flex-wrap my-5">
          <button
            onClick={() => setTools(tools)}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            All
          </button>
          <button
            onClick={() => handleClick("Plan")}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            Plan
          </button>
          <button
            onClick={() => handleClick("Code")}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            Code
          </button>
          <button
            onClick={() => handleClick("Build")}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            Build
          </button>
          <button
            onClick={() => handleClick("Release")}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            Release
          </button>
          <button
            onClick={() => handleClick("Test")}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            Test
          </button>
          <button
            onClick={() => handleClick("Deploy")}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            Deploy
          </button>
          <button
            onClick={() => handleClick("Monitor")}
            className="w-[120px] transition transform duration-300 ease-in-out  technology-btn bg-green-500 text-white hover:bg-[#013220]  text-center py-2 px-5 mx-3 my-3 rounded-full "
          >
            Monitor
          </button>
        </div>
        <div className="row my-5 flex mx-auto justify-center items-center mt-4 grid grid-cols-2 lg:grid-cols-6 gap-3">
          {showTools &&
            showTools?.map((tool, index) => (
              <div
                key={index}
                className="Img-container  flex items-center justify-center  m-2 md:m-2"
              >
                <img alt="Img" src={tool?.image?.localFile?.url} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Technology
