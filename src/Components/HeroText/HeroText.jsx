import React from "react";

const Herotext = ()=>{

    const data = {
        heroText:"Coding With  Passion, Creating with Purpose",
        welcomeText:"Greetings! I'm Maaz, a web enthusiast turning dreams into reality through the art of coding."
    }
    return(
        <section className="w-full flex flex-col gap-4 md:gap-12 z-auto">
             <h1 className=" text-neutral-50 text-center text-2xl md:text-left md:text-5xl lg:text-[3.5rem]  font-bold font-accent leading-loose md:leading-[120%]">{data.heroText}</h1>
             <p className="text-neutral-50 text-center md:text-left text-xs md:text-[1.125rem] font-semibold font-primary leading-normal md:leading-10">{data.welcomeText}</p>
        </section>
    )
};

export default Herotext;