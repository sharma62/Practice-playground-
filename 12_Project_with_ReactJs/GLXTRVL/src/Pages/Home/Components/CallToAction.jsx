import React, { useState } from "react";
import Model from "./Model";

const CallToAction = () => {
    const[model,setModel]=useState(false)
    const handleClick = ()=>{
        setModel(!model) // Toggle the model state
    }
  return (
    <div>
      <div className="bg-gray-950 text-white p-10 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl md:text-4xl text-center font-semibold">Hurry up Book your Tickect !</h1>
        <button className="p-4  my-4 border cursor-pointer" onClick={handleClick}>Book Now </button>
      </div>
      {
        model && <Model handleClick={handleClick}/>
      }
    </div>
  );
};

export default CallToAction;
