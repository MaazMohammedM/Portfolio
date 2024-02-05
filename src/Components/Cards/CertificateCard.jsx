import React from "react";

const CertificationCard = ({heading,backgroundImage,link})=>{

    const cardBg = {
        backgroundImage: `url(${backgroundImage})`,
      };
    return(
        <section className="w-[12.5rem] max-w-[15rem] h-[10rem] sm:h-[15rem] rounded-lg relative bg-center bg-no-repeat bg-cover hover:scale-105 transition-all " style={cardBg}>
            <div className="container rounded-sm flex flex-col justify-between py-8 items-center bg-gradient-to-b absolute top-0 bottom-0 left-0 right-0 from-neutral-900 to-neutral-900/50">
            <h5 className="text-neutral-50 text-base sm:text-lg font-semibold font-primary text-center leading-7">{heading}</h5>
            <a type="button" className="px-2 sm:px-3 py-1 sm:py-2 bg-neutral-50 rounded-lg text-secondary-900 transition-all hover:bg-neutral-200" href={link}>View Certification &#62;</a>
            </div>

        </section>
    )
}

export default CertificationCard;