import React from "react";

const Button =({children,className,style,link,onclick})=>{
    return(
        <button onClick={onclick} className={` font-primary text-neutral-900 text-xs md:text-base transition-all font-medium leading-7 hover:cursor-pointer rounded-lg ${className}`} 
        style={{
            padding: '0.5em 1em', // Adjust padding ratio as needed
            fontSize: style?.fontSize || '1rem',
            ...style,
          }}>
            <a className="outline-none text-xs md:text-base text-inherit" href={link}>{children}</a>
        </button>
    )
}

export default Button;