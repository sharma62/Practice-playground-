import React, {  use, useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { profileContext } from "../context/ProfileContext";
import { Button } from "@mui/material";

const Edit = () => {
  const id = useParams().id;
  const AllUsers = useContext(profileContext);
  const { profile, setProfile } = AllUsers;
  const filteredUser = AllUsers.profile.filter(
    (user) => user.id === parseInt(id)
  );

  const [updateData, setUpdateData] = useState(filteredUser[0]);
  const handleOnChange = (e) => {
     const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateData);
    const updateUsers = AllUsers.profile.map((user)=> user.id===id?updateData:user)
    setProfile(updateUsers)
    console.log(updateUsers)
  };
  console.log(profile);
  

  // console.log(id);
  // console.log(AllUsers);
  // console.log(filteredUser);
  // console.log(updateData);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gr ay-100 p-4">
        <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Edit Profile
          </h2>

          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center mb-6">
            <img
              src="/"
              alt="Profile"
              className="w-24 h-24 rounded-full mb-2 shadow"
            />
            <button className="text-sm text-blue-500 hover:underline">
              Change Photo
            </button>
          </div>

          {/* Form Fields */}
          <form className="space-y-4 p-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                onChange={handleOnChange}
                name="name"
                value={updateData.name}
                type="text"
                placeholder="Enter full name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">phone</label>
              <input
                onChange={handleOnChange}
                value={updateData.phone}
                type="text"
                name="phone"
                placeholder="Enter contact"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <input
                value={updateData.age}
                onChange={handleOnChange}
                type="number"
                placeholder="Enter age"
                name="age"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <Button
                type="button"
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="hover:text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
