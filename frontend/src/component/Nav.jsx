import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { MdLocationSearching } from "react-icons/md";
import { GiHamburgerMenu, GiEgyptianProfile } from "react-icons/gi";
import { MdWhatshot, MdVilla, MdOutlinePool, MdBedroomParent, MdHomeWork } from "react-icons/md";
import { PiFarmLight } from "react-icons/pi";
import { LuSofa } from "react-icons/lu";
import { FcFilingCabinet } from "react-icons/fc";
import { CiShop } from "react-icons/ci";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authDataContext } from '../Context/AuthContext';

function Nav() {
  let [showpopup, setShowpopup] = useState(false)
  const navigate = useNavigate();
  let {serverUrl} = useContext(authDataContext)

  const handleLogout = async()=>{
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout",{withCredentials:true})
      console.log(result);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      {/* NAVBAR */}
      <div className="w-full h-[80px] border-b border-gray-300 px-10 
      flex items-center justify-between bg-white fixed top-0 left-0 z-50">

        {/* Logo */}
        <div>
          <img src={logo} className="h-[100px] w-[135px] mt-[30px] -ml-7" />
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 border rounded-full px-6 py-2 shadow-sm hover:shadow-md transition-all w-[400px] ">
          <input
            type="text"
            className="outline-none text-[15px] w-full"
            placeholder="Anywhere | Any location | Any city"
          />
          <MdLocationSearching className="text-2xl text-violet-500 cursor-pointer" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 relative">
          <span className="cursor-pointer px-4 py-2 rounded-full hover:bg-gray-200 transition-all text-[16px] font-medium hidden md:block">
            List your home
          </span>

          <div className="flex gap-4 text-[26px]">
            <GiHamburgerMenu
              onClick={() => setShowpopup(!showpopup)}
              className="hover:text-violet-500 transition-all hover:scale-110 cursor-pointer"
            />

            <GiEgyptianProfile className="hover:text-violet-500 transition-all hover:scale-110 cursor-pointer" />
          </div>

          {/* Popup */}
          {showpopup && (
            <div className='w-[220px] py-3 absolute bg-white top-[110%] right-[5%] 
            border border-gray-300 shadow-md z-10 rounded-lg animate-fadeIn'>

              <ul className='flex flex-col'>

                <li className='px-5 py-2 text-[15px] font-medium text-gray-700 
                hover:bg-gray-200 cursor-pointer transition-all ' onClick={()=>navigate("/login")}>
                  Login
                </li>

                <li className='px-5 py-2 text-[15px] font-medium text-gray-700 
                hover:bg-gray-200 cursor-pointer transition-all' onClick={handleLogout}  >
                  Logout
                </li>

                <li className='px-5 py-2 text-[15px] font-medium text-gray-700 
                hover:bg-gray-200 cursor-pointer transition-all'>
                  List your home
                </li>

                <li className='px-5 py-2 text-[15px] font-medium text-gray-700 
                hover:bg-gray-200 cursor-pointer transition-all'>
                  My Listing
                </li>

                <li className='px-5 py-2 text-[15px] font-medium text-gray-700 
                hover:bg-gray-200 cursor-pointer transition-all'>
                  Check Booking
                </li>

              </ul>

            </div>
          )}
        </div>
      </div>

      {/* SECOND NAVBAR */}
      <div className="w-full h-[80px] bg-white fixed top-[80px] left-0 z-40 
      flex items-center justify-center gap-10 px-10 overflow-auto">

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <MdWhatshot className="text-[24px]" />
          <h3 className="text-sm">Trending</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <MdVilla className="text-[24px]" />
          <h3 className="text-sm">Villa</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <PiFarmLight className="text-[24px]" />
          <h3 className="text-sm">Farm-House</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <MdOutlinePool className="text-[24px]" />
          <h3 className="text-sm">Pool-House</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <MdBedroomParent className="text-[24px]" />
          <h3 className="text-sm">Rooms</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <MdHomeWork className="text-[24px]" />
          <h3 className="text-sm">Flat</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <LuSofa className="text-[24px]" />
          <h3 className="text-sm">PG</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <FcFilingCabinet className="text-[24px]" />
          <h3 className="text-sm">Cabins</h3>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
          <CiShop className="text-[24px]" />
          <h3 className="text-sm">Shops</h3>
        </div>

      </div>
    </>
  )
}

export default Nav;
