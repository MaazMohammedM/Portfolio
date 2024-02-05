import React from "react";

const ExpText = ({companyName,duration,desc,highlight,tech,conclusion,className})=>{
    return(
        <section className={`border-l-2 sm:border-l-4 border-secondary-200 pl-2 sm:pl-12 w-4/5 sm:w-3/4 ${className}`}>
            <h3 className="text-accent-100 text-xs sm:text-2xl font-bold font-accent mb-2">{companyName}</h3>
            <p className="mb-4 sm:mb-6 text-accent-200 text-xs sm:text-base">{duration}</p>
            <p className="mb-2 sm:mb-4 text-neutral-50 text-xs  sm:text-sm font-normal font-primary leading-[175%] sm:leading-7">{desc}</p>
            <h4 className="mb-2 sm:mb-4 text-xs sm:text-lg text-accent-200 font-medium font-accent leading-normal">My Work Highlights:
            <span className=" text-neutral-50 text-xs sm:text-sm font-normal font-primary leading-[175%] sm:leading-7 pl-2">{highlight}</span>
            </h4>
            <h4 className="mb-2 sm:mb-4 text-xs sm:text-lg text-accent-200 font-medium font-accent leading-normal">Tech Stack Worked On: <span className="text-neutral-50 text-xs sm:text-sm font-normal font-primary leading-[175%] sm:leading-7 pl-1 sm:pl-2">{tech}</span></h4>
            <h4 className="text-xs sm:text-lg text-accent-200 font-medium font-accent leading-normal">Conclusion: <span className="text-neutral-50 text-xs sm:text-sm font-normal font-primary leading-[175%] sm:leading-7 pl-1 sm:pl-2">{conclusion}</span></h4>
        </section>
    )
}

export default ExpText;