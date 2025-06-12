import React,{  createContext, useState } from "react";

export const MultiStepFormContext = createContext();

export const MultiStepFormContextProvider =({children})=>{
    const [currentStep,setCurrentStep]=useState(1)
    const [userData,setUserData]=useState([]);
     return(
        <MultiStepFormContext.Provider value={{currentStep,setCurrentStep,userData,setUserData}} >
            {children}
        </MultiStepFormContext.Provider>
    )
}