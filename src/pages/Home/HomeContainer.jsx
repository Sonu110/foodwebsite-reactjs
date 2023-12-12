import React, { useState } from "react";
import Menusrollbar from "../../components/Menusrollbar";
import MenuContainer from "../../components/MenuContainer";
import Home from '../../img/bugger.jpg'
import Catelock from "../../components/Catelock";
import Loader from "../../components/Loader";
import { Menu } from '../../utils/Products';

const HomeContainer = () => {

  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Extract all menu items' names from the Menu object
  const allMenuItems = Object.values(Menu).flat();
  const menuNames = allMenuItems.map(item => item.name);

  // Filter menu items based on the search input or display nothing if input is empty
  const filteredMenuItems = searchInput
    ? menuNames.filter(item =>
        item.toLowerCase().startsWith(searchInput.toLowerCase())
      )
    : [];


 
<Loader></Loader>
 
 return (
<>
    <div className="relative w-full  ">

      <div className="relative  bg-white " style={{
            backgroundImage: `url(${Home})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
          }}>
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7 h-screen">
          <div className="flex items-center flex-wrap px-2 md:px-0 mt-40">
            <div className="relative lg:w-6/12  ">
              <h1 className="font-bold text-4xl text-white md:text-5xl lg:w-10/12 ">Your favorite dishes, right at your door</h1>
              <form action="" className="w-full mt-10">
                <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2 max-h-min">
                 
                  <input placeholder="Your favorite food" className="w-full p-4 rounded-full" type="text" value={searchInput}
          onChange={handleInputChange} />
                  <button type="button" title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12 flex">
                    <span className="hidden text-yellow-900 font-semibold sm:block">
                      Search
                    </span>
                  </button>
                </div>
                {searchInput && filteredMenuItems.length === 0 && (
          <p className="text-red-500 mt-2  bg-white p-5 rounded-xl absolute left-0 right-0">No match found</p>
        )}
        {searchInput && filteredMenuItems.length > 0 && (
          <ul className=" bg-white p-5 rounded-xl absolute left-0 right-0">
            {filteredMenuItems.map((item, index) => (
              <li key={index} className="mt-1 p-2 rounded-md shadow-sm cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        )}

              </form>
              <p className="mt-8 text-white lg:w-10/12">Sit amet consectetur adipisicing elit. <a href="#" className="text-yellow-700">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
            </div>
           
          </div>
        </div>
      </div>


    </div>

<Menusrollbar></Menusrollbar>
<MenuContainer></MenuContainer>
<Catelock></Catelock>
    </>

  );
};

export default HomeContainer;
