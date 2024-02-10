import React from "react";
import data from "../Data/socialIconData.json"
import { Icon } from "@iconify/react";

const Connect =()=>{
    return(
        <section className="w-full bg-dark-100 px-2 sm:px-16 py-12 sm:py-[5rem] h-full">
            <div className="container  max-w-[90rem] mx-auto ">
            <h2 className=" text-secondary-100 text-sm  sm:text-[1.5rem] font-bold font-accent leading-10 mb-6 sm:mb-12">&#60;Connect With Me&#62;</h2>
                <div className="grid grid-cols-2 gap-3 sm:gap-0 sm:grid-cols-3 w-4/5 sm:w-3/4 mx-auto">
                    {data.map((item)=>{
                        return <div key={item.id} className="mx-auto transition-all hover:scale-105">
                            <a  href={item.link}><Icon icon={item.name} width="48" height="48" className="w-8 sm:w-12" /></a>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Connect;