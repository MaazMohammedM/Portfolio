import React from "react";
import Logo from "../Components/Logo";

const Footer = ()=>{
    return(
        <footer className="w-full bg-gradient-to-r from-neutral-900 to-accent-900 px-16 py-2 text-neutral-50 h-full">
            <div className="container max-w-[90rem] flex flex-col gap-2 sm:flex-row justify-center sm:justify-between items-center">
                <Logo/>
                <p className="font-accent text-center sm:text-left text-[0.5rem] sm:text-xs">Copyright &copy; 2024 All Rights Reserved. This Website is Designed & Developed By Suaz Design & Development. </p>
            </div>
            
        </footer>
    )
}

export default Footer;