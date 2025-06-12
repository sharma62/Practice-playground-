import React,{ createContext, useState } from "react";

export const profileContext = createContext();

export const ProfileContextProvider =({children})=>{
    const [profile,setProfile]= useState([  
        {
            id:101,
            name:"John Doe",
            age:25,
            email:"john@123",
            phone:"1234567890",

        },
        {
            id:102,
            name:"Jane Doe",
            age:30,
            email:"jane@123",
            phone:"0987654321",
        },
        {
            id:103,
            name:"Sam Smith",
            age:28,
            email:"sam@123",
            phone:"1122334455",
        },
        {
            id:104,
            name:"Alice Johnson",
            age:22,
            email:"alice@123",
            phone:"5566778899",
        },
        {
            id:105,
            name:"Bob Brown",
            age:35,
            email:"bob@123",
            phone:"9988776655",
        }, 
    ])
 return(
    <profileContext.Provider value={{profile,setProfile}}>
        {children}
    </profileContext.Provider>
 )
}
