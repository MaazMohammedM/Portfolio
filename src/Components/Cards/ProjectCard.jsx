import React from "react";

const ProjectCard =({backgroundImage,heading,para,link})=>{

    const truncateText =(text,limit)=>{
        return text.length > limit ? `${text.slice(0,limit)}...`: text;
    }

    const TruncateHeading = truncateText(heading,50);
    const TruncatePara = truncateText(para,132);

    const cardBg = {
        backgroundImage: `url(${backgroundImage})`,
      };



    return(
        <section className="max-w-60 sm:max-w-80 min-w-[15rem] bg-neutral-50 rounded-2xl hover:scale-105 transition-all">
            <div className={`w-full h-40 bg-center bg-no-repeat bg-cover rounded-tl-xl rounded-tr-xl mb-2`} style={cardBg}></div>
            <h5 className="px-2 mb-2 text-secondary-900 text-sm sm:text-base font-bold w-full font-accent leading-normal">{TruncateHeading}</h5>
            <p className="text-secondary-900 mb-4 w-full text-xs sm:text-sm font-normal font-primary leading-normal px-2">{TruncatePara}</p>
            <a type="button" className="text-accent-700 mx-2 text-xs sm:text-sm mb-2 w-[100%-0.5rem] text-center rounded-lg py-1 block hover:text-accent-400"  target="_blank" href={link}>View Project &#62;</a>
        </section>
    )
}

export default ProjectCard;