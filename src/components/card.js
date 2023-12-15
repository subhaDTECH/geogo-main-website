import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";
import "./service.css";
import OurClient from "./ourClient";
import Review from "./review";
import Technology from "./Technology";
import Post from "./post";

const Card = () => (
    <div class="flex px-3 py-3 items-center justify-center">
    <div class="max-w-lg rounded cursor-pointer overflow-hidden shadow-lg transition transform duration-300 hover:translate-y-12 ease-in-out">
        <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        
    </div>
</div>
)

export default Card;
