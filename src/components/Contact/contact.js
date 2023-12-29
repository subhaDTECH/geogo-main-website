import * as React from "react"


const Contact = () => (
    <section class="text-gray-600 body-font relative   py-8">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <p for="name" class="leading-7 text-sm text-gray-600">Name</p>
              <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <p for="email" class="leading-7 text-sm text-gray-600">Email</p>
              <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <p for="message" class="leading-7 text-sm text-gray-600">Message</p>
              <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#013220] focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-[#013220] border-0 py-2 px-8 focus:outline-none hover:bg-[#043927] rounded text-lg">Button</button>
          </div>
          </div>
      </div>
    </div>
  </section>
)

export default Contact;
