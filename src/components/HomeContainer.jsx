import React, { useState } from "react";
import Menusrollbar from "./Menusrollbar";
import MenuContainer from "./MenuContainer";

const HomeContainer = () => {

  return (
<>
    <div className="relative w-full ">

      <div className="relative bg-yellow-50">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">Your favorite dishes, right at your door</h1>
              <form action="" className="w-full mt-12">
                <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2 max-h-min">
                  <select className="hidden p-3 rounded-full bg-transparent md:block md:p-4" name="domain" id="domain">
                    <option value="design">FastFood</option>
                    <option value="development">Restaurant</option>
                    <option value="marketing">Marketing</option>
                  </select>
                  <input placeholder="Your favorite food" className="w-full p-4 rounded-full" type="text" />
                  <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12 flex">
                    <span className="hidden text-yellow-900 font-semibold sm:block">
                      Search
                    </span>
                 
                  </button>
                </div>
              </form>
              <p className="mt-8 text-gray-700 lg:w-10/12">Sit amet consectetur adipisicing elit. <a href="#" className="text-yellow-700">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-5/12">
              <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative" alt="food illustration" loading="lazy" />
            </div>
          </div>
        </div>
      </div>


    </div>

<Menusrollbar></Menusrollbar>
<MenuContainer></MenuContainer>

    </>

  );
};

export default HomeContainer;
