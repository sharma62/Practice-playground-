import React from "react";

const Model = ({handleClick}) => {
 
  return (
    <>
      <div className="container  mx-auto text-white fixed top-15 left-0 right-0 w-full h-full  bg-opacity-50 flex items-center justify-center transition-all duration-300 ease-in-out ">
        <div className="model w-full h-full bg-gray-800 flex items-center justify-center rounded-lg relative p-10 gap-x-20 z-50 opacity-75">  
          <button className="absolute top-5 right-5 cursor-pointer text-white transition-all duration-300 ease-in-out" onClick={handleClick}>
            X
          </button>
        <div className="text-center md:flex flex-col sm:block hidden">
            <h1 className="text-3xl md:text-6xl">Book Your Ticket, Be Safe Travel <br /> ... </h1>
          <p className="text-lg mt-4">
            Fill in the details below to book your ticket.
            
          </p>
        </div>
          <form action="">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 rounded-md bg-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md bg-gray-700 text-white"
              />
              <input
                type="number"
                placeholder="Enter your phone number"
                className="p-2 rounded-md bg-gray-700 text-white"
              />
              <button className="p-2 bg-blue-500 rounded-md">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            alt="Travel"
            className="absolute top-0 left-0 w-full h-full object-cover  rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Model;
