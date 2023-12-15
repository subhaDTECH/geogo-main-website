import * as React from "react"
import { Link } from "gatsby"
import GeogoLogo from "../../src/images/geogo-logo-1.png";

const Teamcard = () => (
    <div className="Team-Section">
        <div className="container h-full mx-auto w-[95%]  m-3 my-10 p-10">
            <h1 className="text-5xl mb-2 font-medium md:mx-5 leading-tight  p-5">Team</h1>
            <section class="body-font mx-4">
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        {/* start of first row  */}
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                               </div>
                            </div>
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                            </div>
                            </div>
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
                            </div>
                            </div>
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203" />
                               </div>
                            </div>
                        </div>

                        {/* end of first row  */}
                        {/* start of 2nd row  */}
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200" />
                               </div>
                            </div>
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201" />
                            </div>
                            </div>
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202" />
                            </div>
                            </div>
                            <div class="p-4 lg:w-1/4 md:w-1/2">
                                <div class="h-full flex flex-col items-center text-center">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203" />
                               </div>
                            </div>
                        </div>
                        {/* end of start row  */}
                    </div>
                </section>
            </section>


        </div>
    </div>

)

export default Teamcard;
