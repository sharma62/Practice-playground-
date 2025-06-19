import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleFaBars = () => {
    setClick(!click);
  };

  return (
    <div className="navbar  bg-gray- 800 text-white px-5 py-3 sticky top-0 z-50 trasparent backdrop-blur-md shadow-md ">
      <nav className="flex flex-row justify-around mx-auto items-center">
        {/* grid-1st */}
        <div>
          <h1 className="text-2xl font-bold mt-3">GLXTRVL</h1>
        </div>
        {/* grid-2st */}

        <div className={`${click ? "block" : "hidden"} md:block  `}>
          <ul className={`flex md:flex-row gap-3 flex-col absolute top-16 right-0 md:relative md:top-0 md:right-10  bg-blue-500   md:bg-transparent  w-full text-center text-white  md:shadow-none shadow-lg rounded-lg transition-all md:transition-all duration-300 ease-in-out opacity-95 `}>
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2">
              <Link to="/training">Training</Link>
            </li>
            <li className="p-2">
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
        {/* grid-2st */}
        <div className="block md:hidden " onClick={handleFaBars}>
          {click ? (
            <FaTimes className="cursor-pointer" />
          ) : (
            <FaBars className="cursor-pointer" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
