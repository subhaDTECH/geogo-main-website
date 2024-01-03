import * as React from "react"
import ReactMarkdown from "react-markdown"

const TermsCom = ({ data }) => {
  //const privacyData = data.allStrapiTerm.nodes[0]
  console.log(data, "terms")

  return (
    <div className="Technology-Section my-[200px]">
      <div className="container h-full mx-auto w-[80%] md:w-[50%] p-5 m-3 my-10 p-10 ">
        <h2 className="text-3xl  sm:text-4xl font-semibold">
          {/* // {privacyData.title} */}
        </h2>
        <div>
          {/* <ReactMarkdown>{privacyData.content.data.content}</ReactMarkdown> */}
        </div>
      </div>
    </div>
  )
}

export default TermsCom
