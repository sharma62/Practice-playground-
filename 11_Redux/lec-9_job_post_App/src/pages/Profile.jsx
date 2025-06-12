import React, { use, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { profileContext } from "../context/ProfileContext";
import { Button } from "@mui/material";

const Profile = () => {
  const userId = useParams().id;
  const user = useContext(profileContext).profile.filter(
    (user) => user.id === parseInt(userId)
  );
const Navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-36 h-34 rounded-full shadow-md"
          />
          <h2 className="text-2xl font-semibold mt-4 capitalize">
            {user[0].name || "No Name"}
          </h2>
        </div>

        {/* User Info */}
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Contact:</span>
            <span>{user[0].email || "N/A" }</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Age:</span>
            <span>{user[0].age + " Years" || "N/A"}</span>
          </div>

          {/* Add more fields if needed */}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end">
          <Button className="hover:bg-blue-600 hover:text-white transition" onClick={()=>Navigate(`/edit/${userId}`)}>
            Edit
          </Button>
         
        </div>
      </div>
    </div>
  );
};

export default Profile;
