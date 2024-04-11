import React, { useState } from 'react'
import {
    CDropdown,
    CDropdownToggle,
    CDropdownItem,
    CDropdownMenu,
  } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const searchIcon = "https://i.imgur.com/RPM49ka.png";
  const [bruno,setBruno] = useState('')
  const [call,setCall] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/makecall', {
        number : bruno
      });
      console.log('you just clicked submit');
  
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const brokoIcon = "https://i.imgur.com/mt1T3vj.png";

  return (
    <div className="flex py-3 px-[30px]">
        <div className="flex gap-[71px]">
          <div className="flex items-center justify-center gap-1">
            <img
              className="h-5 w-auto object-cover"
              src={searchIcon}
              alt="search"
            />
            <input
              className="w-[15.063rem] p-2 focus:border-blue-600 transition-all duration-150 border-white rounded-sm border-solid border-[1px] outline-none relative text-[0.875rem] font-inter text-[#9A9A9A] text-left inline-block"
              type="text"
              placeholder="Search Address, City, Neighborhood"
            />
          </div>

          <div className="flex h-[2.175rem] gap-[9px] ">
            {/* price dropdown */}
            <CDropdown className="rounded w-[107px]   text-left text-[0.75rem] text-black font-inter">
              <CDropdownToggle color="secondary">Price</CDropdownToggle>
              <CDropdownMenu className=" ">
                <CDropdownItem href="#">10 Lakh+</CDropdownItem>
                <CDropdownItem href="#">20 Lakh+</CDropdownItem>
                <CDropdownItem href="#">50 Lakh+</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            {/* bhk dropdown */}
            <CDropdown className="rounded w-[73px]   text-left text-[0.75rem] text-black font-inter">
              <CDropdownToggle color="secondary">BHK</CDropdownToggle>
              <CDropdownMenu className=" ">
                <CDropdownItem href="#">1 BHK</CDropdownItem>
                <CDropdownItem href="#">2 BHK</CDropdownItem>
                <CDropdownItem href="#">3 BHK</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div>
        </div>

        <div className="flex gap-5 w-full flex-row-reverse">
        <div onClick={()=>{
            navigate('/trans')
          }} className="w-[112px] relative rounded bg-[#EBEBEB] h-[2.25rem] overflow-hidden text-left text-[0.75rem] text-black font-inter">
            <div className="absolute top-[0.688rem] left-[0.5rem] inline-block w-[6.375rem]">
              Transaction History
            </div>
          </div>
          <div onClick={()=>{
            navigate('/profile')
          }} className="w-[36px] relative flex items-center justify-center   rounded bg-[#EBEBEB] h-[2.25rem] overflow-hidden">
            <img
              className="w-[24px] object-cover"
              src="https://i.imgur.com/g9hkARJ.png"
              alt=""
            />
          </div>

          <div onClick={()=>{
            navigate('/list')
          }} className="w-[112px] cursor-pointer relative rounded bg-[#EBEBEB] h-[2.25rem] overflow-hidden text-left text-[0.75rem] text-black font-inter">
            <div className="absolute top-[0.688rem] left-[0.5rem] inline-block w-[6.375rem]">
              List Your Property
            </div>
          </div>

          <div onClick={()=>{setCall((prev)=>{
                return !prev;
            })}} className="w-[107px] cursor-pointer relative rounded [background:linear-gradient(-82.52deg,_#1983ff,_#5cffe7_38.4%,_#1cfa8f_62.4%,_#63f3ae)] h-[2.25rem] overflow-hidden text-left text-[0.75rem] text-black font-inter">
            <img
              className="absolute top-[0.563rem] left-[0.375rem] w-[1.125rem] h-[1.125rem] overflow-hidden"
              alt=""
              src={brokoIcon}
            />
            <div  className="absolute top-[0.688rem] left-[1.75rem] font-medium">
              Ask Estate.AI
            </div>
          </div>
            <div className={`absolute p-5 flex flex-col gap-4 bg-blue-300 rounded-xl z-20 w-[400px] ${call ? 'block' : 'hidden'} `}>
            <label htmlFor="">Enter your Number:</label>
            <input value={bruno} onChange={(e)=>{
              
              setBruno(e.target.value)
            }} type="text" />

            <button className='' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
      </div>
  )
}

export default Navbar
