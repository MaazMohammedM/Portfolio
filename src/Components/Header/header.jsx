import React, { useState } from "react";
import Logo from "../Logo";
import Navlinks from "../NavLinks/Navlinks";
// import ToggleButton from "../ToggleButton/ToggleButton";
import { Icon } from "@iconify/react";

export default function Header(){

    const [open,setOpen] = useState(false);
    return(
       
       <header className="bg-dark-100 w-full px-2  md:px-16 text-neutral-100 z-[10] sticky  top-0 flex items-center justify-center
       py-4 sm:py-0
       ">
            <div className="container  max-w-[90rem] flex justify-between relative  items-center">
                <Logo/>
                {/* <ToggleButton/> */}
                <Icon className="block sm:hidden transition-all duration-500" icon={open?"akar-icons:cross": "game-icons:hamburger-menu"} color="white" width="24" height="24" onClick={()=>{setOpen(!open)}}/>
                <Navlinks className={`sm:block absolute sm:static top-10 right-[-0.5rem] left-[-0.5rem] ${open ? "flex":"hidden"}`} classNameLink={`${open ? "flex-col sm:flex-row bg-dark-100/90 rounded-b-xl sm:bg-transparent w-full":""}`}/>
            </div>
       </header>
    )
}