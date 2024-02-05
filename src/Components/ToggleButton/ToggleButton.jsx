import React, { useState } from "react";
import classNames from "classnames";

export default function ToggleBtn() {
  const [isSelected,setIsSelected] = useState(false);
 

  return (
    <div
      onClick={()=>setIsSelected(!isSelected)}
      className={classNames("w-10 h-5 p-0.5 rounded-full outline-accent-100 transition-all duration-1000 border flex items-center justify-start",
      {
        'justify-end':isSelected,
      })}
    >
      <div
        
        className={classNames("rounded-full w-4 h-4  bg-neutral-50 flex items-center justify-center  transition-all duration-1000 hover:cursor-pointer bg-moon bg-no-repeat bg-contain bg-center",
        
        {
          'bg-sun':isSelected,
        })}

      >
        
      </div>
    </div>
  );
}
