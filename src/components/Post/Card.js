// import { Link } from "gatsby"
// import GeogoLogo from "../../src/images/geogo-logo-1.png";
// import OurClient from "./ourClient";
// import Review from "./review";
// import Technology from "./Technology";
// import Post from "./post";

import * as React from "react"

const Card = ({ post }) => (
  <div className="flex px-3py-3 items-center justify-center">
    <div className="max-w-lg rounded cursor-pointer overflow-hidden shadow-lg transition transform duration-300 hover:translate-y-12 ease-in-out">
      <div className="w-full h-[300px]">
        <img
          className="w-full h-full"
          src={post?.post_image?.localFile?.url}
          alt="Img-Post"
        />
      </div>
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{post?.title}</div>
        <p className="text-gray-700 text-base">{post?.description}</p>
      </div>
      <div className="p-5 bg-white">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-3"
            src={post?.author_image?.localFile?.url}
            alt="author_image"
          />
          <div className="text-sm">
            <a
              href="#"
              className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
            >
              {post?.author_name}
            </a>
            <p className="text-sm">{post?.author_subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
