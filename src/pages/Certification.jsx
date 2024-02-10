import React from "react";
import data from '../Data/certificationData.json';
import CertificationCard from "../Components/Cards/CertificateCard";
// import clsx from "clsx";

const Certification =()=>{
    return(
        <section className="w-full bg-dark-100 px-2 sm:px-16 py-12 sm:py-[5rem] h-full">
            <div className="container max-w-[90rem] flex flex-col mx-auto">
            <h2 className=" text-secondary-100 text-sm  sm:text-[1.5rem] font-bold font-accent leading-10 mb-6 sm:mb-12">&#60;Certifications&#62;</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 sm:w-1/2 justify-items-center  mx-auto gap-6 mb-12">
                {
                    data.map((item)=>{
                       return < CertificationCard key={item.id} heading={item.name} backgroundImage={item.image} link={item.link}/>
                    })
                }
                
                </div>
            </div>
        </section>
    )
}

export default Certification;