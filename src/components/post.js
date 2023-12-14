import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import Card from "./card";

const Post = () => (
    <div className="Post-Section">
        <div className="container h-full mx-auto w-[100%] p-5 m-3 my-10 p-10">
            <h2 className="title py-8">Featured Posts</h2>
            <div className="row flex grid grid-cols-1 lg:grid-cols-3 gap-4">
                  
                 {/* frist post  */}
                 <Card/>
                {/* first post end  */}
                {/* second post start */}
                <Card/>
                {/* second post end  */}


                {/* third post start  */}
                 <Card/>

                {/* third post end  */}

            </div>

        </div>
    </div>

)

export default Post;
