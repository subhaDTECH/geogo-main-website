// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png"

import * as React from "react"
import Card from "./card"

const Post = ({posts}) => {
 return (  
   <div className="Post-Section">
   <div className="container h-full mx-auto w-[95%] p-5 m-3 my-10 p-10">
     <h2 className="title py-8">Featured Posts</h2>
     <div className="row flex grid grid-cols-1 lg:grid-cols-3 gap-4">
       {
         posts && posts?.map((post,index)=>{
          return <Card key={index} post={post}/>
         })
      }
      </div>
   </div>
 </div>)


}

export default Post
