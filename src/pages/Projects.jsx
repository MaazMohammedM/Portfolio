import React from "react";
import ProjectCard from "../Components/Cards/ProjectCard";
import projectData from '../Data/ProjectDataJson.json';
// import clsx from "clsx";

const Projects =()=>{

    return(
        <section className="w-full bg-dark-100 px-2 sm:px-16 py-12 sm:py-[5rem]  text-neutral-50 h-full">
            <div className="container max-w-[90rem] flex flex-col mx-auto">
            <h2 className=" text-secondary-100 text-sm  sm:text-[1.5rem] font-bold font-accent leading-10 mb-6 sm:mb-12">&#60;Projects I Have Done&#62;</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-6 justify-items-center  mx-auto w-4/5 xl:w-3/4 mb-12">
                {projectData.map((i)=>{
                    return <ProjectCard key={i.id} backgroundImage={i.image} heading={i.heading} para={i.paragraph}/>
                })}
            </div>
            {/* <a className={clsx('bg-accent-100 font-primary px-2 py-2 text-neutral-900 text-xs sm:text-base transition-all font-medium leading-7 self-center rounded-lg',
                            //hover
                            'hover:bg-accent-200',
                            //focus
                            'outline-none',
                            'ring-accent-200/70 ring-offset-2',
                            'focus-visible:ring-2 focus:scale-[0.98]',
                            )}
            type="button" href="http://www.google.com">View All Projects &#62;</a> */}
                </div>
        </section>
    )
}

export default Projects;