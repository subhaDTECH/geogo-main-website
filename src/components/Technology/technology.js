import * as React from "react"
import { useState, useCallback } from "react"
// import "../service.css"

import "./technology.css"

//import graphql

const Technology = ({ tools }) => {
  const [showTools, setTools] = useState(tools)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = useCallback(
    (type, ind) => {
      setActiveIndex(ind)
      const newData = tools.filter(tool => tool.type === type)
      setTools(newData)
    },
    [tools]
  )

  const resetTools = useCallback(() => {
    setTools(tools)
  }, [tools])

  const handleClickFirst = () => {
    setTools(tools)
    setActiveIndex(0)
  }

  return (
    <div className="Technology-Section">
      <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 mt-[80px]">
        <h3 className="title mt-5">
          Ensuring quality and performance using these{" "}
          <span className="text-green-500">Tools</span> and{" "}
          <span className="text-green-500">Technologies</span>.
        </h3>
        <div className="btn-container flex items-center justify-start  flex-wrap my-5">
          <button
            onClick={() => handleClickFirst()}
            className={`${
              activeIndex === 0
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            All
          </button>
          <button
            onClick={() => handleClick("Plan", 1)}
            className={`${
              activeIndex === 1
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            Plan
          </button>
          <button
            onClick={() => handleClick("Code", 2)}
            className={`${
              activeIndex === 2
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            Code
          </button>
          <button
            onClick={() => handleClick("Build", 3)}
            className={`${
              activeIndex === 3
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            Build
          </button>
          <button
            onClick={() => handleClick("Release", 4)}
            className={`${
              activeIndex === 4
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            Release
          </button>
          <button
            onClick={() => handleClick("Test", 5)}
            className={`${
              activeIndex === 5
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            Test
          </button>
          <button
            onClick={() => handleClick("Deploy", 6)}
            className={`${
              activeIndex === 6
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            Deploy
          </button>
          <button
            onClick={() => handleClick("Monitor", 7)}
            className={`${
              activeIndex === 7
                ? "bg-[#223547] text-white"
                : "bg-[#e0e0e0] text-black"
            } w-[120px] transition transform duration-300 ease-in-out  technology-btn     text-center py-2 px-5 mx-3 my-3 rounded-full `}
          >
            Monitor
          </button>
        </div>
        <div className="row my-5 flex mx-auto justify-center items-center mt-4 grid grid-cols-2 lg:grid-cols-6 gap-3 mx-4">
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
