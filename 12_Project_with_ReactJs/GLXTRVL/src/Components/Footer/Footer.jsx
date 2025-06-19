import React from "react";
import fbIcon from "./../../assets/facebook.png";
import instaIcon from "./../../assets/instagram.png";
import tiwterIcon from "./../../assets/twitter.png";
import moveUp from "./../../assets/moveUp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleMoveUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer className="container mx-auto text-white capitalize flex flex-col   gap-y-10  ">
        <div className="row flex flex-col md:flex-row text-center justify-evenly gap-y-10">
          <div className="p-2">
            <h2 className="text-4xl md:text-6xl font-semibold">GLXTRVL</h2>
          </div>
          <div className="flex flex-col justify-between items-center gap-3">
            <h2>usefull Links</h2>
            <div className="flex flex-row justify-between items-center gap-3 text-sm md:test-lg">
              <Link to="/home" className="hover:text-cyan-300">
                Home
              </Link>
              <Link to="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
              <Link to="/training" className="hover:text-cyan-400">
                Training
              </Link>
              <Link to="/pricing" className="hover:text-cyan-400">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex ml-40 gap-x-3 p-2 w-15 h-15   cursor-pointer ">
            <img
              src={fbIcon}
              alt=""
              className="hover:scale-110 transition-all duration-300"
            />
            <img
              src={instaIcon}
              alt=""
              className="hover:scale-110 transition-all duration-300"
            />
            <img
              src={tiwterIcon}
              alt=""
              className="hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <button className="text-white   cursor-pointer absolute right-10 " onClick={handleMoveUp}>
          <img src={moveUp} alt="" className="w-10" />
        </button>
        <div className="row text-center">
          <p>
            © {new Date().getFullYear()} GLXTRVL. All rights reserved. |
            Designed by{" "}
            <a href="https://github.com/sharma62" className="text-blue-400">
              Sharma62
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
