import React from "react";
import skillData from '../Data/Skills.json';
import { Icon } from '@iconify/react';


const Skills =()=>{
    return(
    <section className="w-full bg-gradient-to-r from-neutral-900 to-accent-900 px-2 sm:px-16 py-12 sm:py-[5rem] text-neutral-50 h-full">
        <div className="container max-w-[90rem] ">
        <h2 className=" text-secondary-100 text-sm  sm:text-[1.5rem] font-bold font-accent leading-10 mb-6 sm:mb-12">&#60;My Skills&#62;</h2>
        <div className="w-4/5 sm:w-3/4 grid-cols-1 lg:grid-cols-5 md:grid-cols-3  mx-auto grid gap-6 font-accent">
                {skillData.map((skill)=>{
                   return <div key={skill.id} className="flex justify-center items-center bg-neutral-50/50 transition-all  p-2 rounded-lg hover:scale-105 hover:bg-neutral-50">
                   <Icon icon={skill.name} color={skill.color} width="56" height="56" className="w-3/4 min-w-10 sm:w-full" />
                 </div>
                })}
                </div>
        </div>
    </section>
    )
}

export default Skills;

