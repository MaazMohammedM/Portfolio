import React from "react";

const Exp =()=>{

    const data = {
        text: "Hello there! I'm Maaz, a web development enthusiast driven by a profound passion for turning creative concepts into functional and visually stunning websites. With 2 years of hands-on experience in the field, I thrive on the challenges of bringing innovative ideas to the digital realm, blending form and function for a seamless user experience"
    }
    return(
        <section id="about" className="w-full bg-dark-100 text-neutral-50 h-full">
            <div className="container max-w-[90rem] mx-auto flex items-center justify-center py-[2rem]">
                <p className="w-3/4 leading-8 sm:leading-[54px] text-lg sm:text-xl text-center font-accent-about ">{data.text}</p>
            </div>
        </section>
    )
}

export default Exp;