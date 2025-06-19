import React, { useState } from "react";
import Slider from "./Slider";

const Service = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <h1 className="text-white text-4xl font-semibold text-center p-6 ">
        Service
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-white text-2xl font-semibold mb-4">Service 1</h2>
          <p className="text-gray-400">
            Description of service 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </>
  );
};

export default Service;
