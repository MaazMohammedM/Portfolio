import React from "react";
import ExpText from "../Components/ExpText/ExpTextComp";
import data from '../Data/companyData.json'

const WorkExp =()=>{
    return(
        <section className="w-full bg-gradient-to-r from-neutral-900 to-accent-900 px-2 sm:px-16 py-16  sm:py-[5rem] text-neutral-50 h-full">
            <div className="container  max-w-[90rem] mx-auto flex flex-col items-start">
            <h2 className=" text-secondary-100 text-sm  sm:text-[1.5rem] font-bold font-accent leading-10 mb-4 sm:mb-12">&#60;My Work Experience&#62;</h2>
                <div className="flex flex-col gap-10">
                {data.map((value)=>{
                    return  <ExpText key={value.id} className={'mx-auto'} companyName={value.companyName} duration={value.duration}
                    desc={value.desc} highlight={value.highlight} tech={value.tech} conclusion={value.conclusion}/>
                })}
                </div>
               
            </div>
        </section>
    )
}

export default WorkExp;