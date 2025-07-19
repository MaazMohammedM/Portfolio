import React from "react";
import Logo from "../Components/Logo";
import data from "../Data/socialIconData.json";
import { Icon } from "@iconify/react";

const Footer = ()=>{
    return(
        <footer className="w-full bg-gray-900 px-16 py-2 text-neutral-50 h-full">
            <div className="container max-w-[90rem] flex flex-col gap-2 sm:flex-row justify-center sm:justify-between items-center">
                <div className="flex gap-2">
                <Logo/>
                {data.map((item)=>{
                        return <div key={item.id} className="mx-auto transition-all hover:scale-105">
                            <a target="_blank"  href={item.link}><Icon icon={item.name} width="16" height="16" className="w-8 sm:w-12" /></a>
                        </div>
                    })}
                </div>
                <p className="font-accent text-center sm:text-left text-[0.5rem] sm:text-xs">Copyright &copy; 2025 All Rights Reserved. This Website is Designed & Developed By MMM Design & Development. </p>
            </div>
            
        </footer>
    )
}

export default Footer;