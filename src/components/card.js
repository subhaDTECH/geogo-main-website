// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
// import OurClient from "./ourClient";
// import Review from "./review";
// import Technology from "./Technology";
// import Post from "./post";

import * as React from "react"
import "./service.css";

const Card = ({post}) => (
    <div class="flex px-3 py-3 items-center justify-center">
    <div class="max-w-lg rounded cursor-pointer overflow-hidden shadow-lg transition transform duration-300 hover:translate-y-12 ease-in-out">
        <div className="w-full h-[300px]">
             <img class="w-full h-full" src={post?.post_image?.localFile?.url} alt="Img-Post"/>
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{post?.title}</div>
            <p class="text-gray-700 text-base">
               {post?.description}
            </p>
        </div>
    <div class="p-5">
    <div class="flex items-center">
        <img class="w-16 h-16 rounded-full mr-3" src={post?.author_image?.localFile?.url} alt="author_image"/>
        <div class="text-sm">
            <a href="#"
                class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
                {post?.author_name}
            </a>
            <p className="text-sm">{post?.author_subtitle}</p>
        </div>
    </div>
  </div>
</div>
</div>
)

export default Card;
