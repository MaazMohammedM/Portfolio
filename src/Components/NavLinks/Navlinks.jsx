import clsx from "clsx";
import React from "react";

export default function Navlinks({className,classNameLink}){
    return(
        <nav className={clsx(`${className}`)}>
            <ul className={clsx(`flex justify-between items-center font-primary ${classNameLink}`)}>
                <li><a className="sm:py-4 sm:px-6 text-sm px-0 py-4 block text-neutral-50 hover:text-neutral-400 transition-all duration-150" href="/">Home</a></li>
                <li><a className="sm:py-4 sm:px-6 text-sm px-0 py-4 block text-neutral-50 hover:text-neutral-400 transition-all duration-150" href="#about">About</a></li>
                <li><a className="sm:py-4 sm:px-6 text-sm px-0 py-4 block text-accent-100 sm:text-dark-100 sm:bg-accent-100 sm:hover:bg-accent-800 sm:hover:text-neutral-100 transition-all duration-150" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}