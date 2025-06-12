import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ThankYou = () => {
  const id = useParams().id
  const Navigate = useNavigate()
  setTimeout(() => {
    Navigate('/')
  }, 5*1000);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img className="w-50" src="https://png.pngtree.com/png-clipart/20230122/original/pngtree-d-green-check-mark-icon-in-round-isolated-transparent-background-tick-png-image_8926830.png" alt="" />
      <h1>Thank You</h1>
      <p>Your application for job ID {id} has been submitted successfully!</p>
      <p>We will get back to you soon.</p>
    </div>
  );
};

export default ThankYou;
