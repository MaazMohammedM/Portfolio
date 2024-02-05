import React from "react";
import Herotext from "../Components/HeroText/HeroText";
import Button from "../Components/Buttons/Buttons";
import profile from "../Images/profilePhoto.png";
import gameTheme from "../Videos/gameTheme.mp4";
import clsx from "clsx";

const Hero = () => {
    return (
        <section className="max-h-full md:h-[90svh] hero bg-accent-900/75 px-2 py-[7.5rem] md:py-0  md:px-16 w-full relative z-auto flex items-center justify-center
        
        ">
            <video
                src={gameTheme}
                loop
                autoPlay
                muted
                className="absolute top-0 bottom-0 right-0 w-full z-[-1] left-0 filter object-cover"
            ></video>
            <section className="container mx-auto max-w-[90rem] flex items-center justify-between z-auto h-full
            flex-col md:flex-row gap-6 md:gap-0
            ">
                <div className="container flex flex-col gap-12 w-full items-center md:items-start md:w-[60%]">
                    <Herotext />
                    <section className="inline-flex items-center gap-2 md:gap-6">
                        <Button
                            className={clsx('bg-accent-100',
                            //hover
                            'hover:bg-accent-200',
                            //focus
                            'outline-none',
                            'ring-accent-200/70 ring-offset-2',
                            'focus-visible:ring-2 focus:scale-[0.98]',
                            //disabled
                           // 'disabled:bg-accent-100/50 disabled:cursor-not-allowed'
                            
                            )}
                            children={`Download CV`}
                        />
                        <Button
                            className={clsx('bg-primary-400',
                            //hover
                            'hover:bg-primary-600',
                            //focus
                            'outline-none',
                            'ring-primary-400/70 ring-offset-2',
                            'focus-visible:ring-2 focus:scale-[0.98]',
                            
                            )}
                            children={`Let's Talk`}
                        />
                    </section>
                </div>
                <div className="w-full md:w-[40%] flex items-center justify-center h-full">
                    <div className="rounded-[50%] relative z-[1] overflow-hidden w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] flex items-center justify-center ">
                        <div className="rounded-[50%] absolute bottom-0 z-[-1] w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] bg-accent-900/75"></div>
                        <img
                            className="w-full  h-[100%] absolute object-contain"
                            src={profile}
                            alt="Owner of the Blog Standing"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Hero;
