import React from "react";
import FormComp from "../Components/Form/FormComp";

const Form = ()=>{
    return(
        <section className="w-full bg-gradient-to-r from-neutral-900 to-accent-900 px-2 sm:px-16 py-12 sm:py-[5rem] text-neutral-50 h-full">
            <section className="container max-w-[90rem]">
            <h2 className=" text-secondary-100 text-sm sm:text-[1.5rem] font-bold font-accent leading-10 mb-6 sm:mb-12">&#60;Connect With Me&#62;</h2>
                <div className="w-4/5 sm:w-3/4 mx-auto">
                    <FormComp/>
                </div>
            </section>
        </section>
    )
}

export default Form;