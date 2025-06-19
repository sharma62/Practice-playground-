import React from "react";

const Card = ({planName ,price}) => {
  return (
    <>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-75 mx-auto  flex flex-col items-center cursor-pointer hover:scale-110 transition-all duration-300 hover:border ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl">{planName} </h1>
          <h2 className="text-2xl font-bold mb-4">Travel Package</h2>
          <h2>Rs : {price} only</h2>
          <p className="text-lg mb-4">
            Explore the world with our exclusive travel packages.
          </p>
        </div>
        <ul className="list-disc pl-5 mb-4">
          <li>Flight Booking</li>
          <li>Hotel Accommodation</li>
          <li>Guided Tours</li>
          <li>Airport Transfers</li>
        </ul>
        <button className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer itemc">
          Book Now
        </button>
      </div>
    </>
  );
};

export default Card;
