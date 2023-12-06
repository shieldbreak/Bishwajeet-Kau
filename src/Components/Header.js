
import React, { useContext, useEffect, useState } from "react";
import logo from './../assets/Images/logo.png'
import logo2 from './../assets/Images/logo2.png'
import { HiOutlineMagnifyingGlass,HiMoon,HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(true);
  const {theme,setTheme}=useContext(ThemeContext)
  useEffect(()=>{
    console.log("Theme",theme)
  },[])
  return (
    <div className='flex items-center justify-between bg-slate-100 mb-2 dark:bg-[#121212]'>
      <img src={logo2} width={60} hieght={60}/>
      <div className='flex bg-slate-200 p-[4px] h-10 mb-2 mr-2 ml-10 mt-4 w-full rounded-[21px]'>
      <HiOutlineMagnifyingGlass className='mt-[8px] mr-1' />
        <input type="text" placeholder="Search Games" className='px-2 bg-transparent outline-none'/>
      </div>

      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[35px] bg-slate-200
           text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme('dark')}}
          />
        ) : (
          <HiSun
            onClick={() => {setTheme('light')}}
            className="text-[35px] bg-slate-200
           text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>

    </div>
  )
}

export default Header
