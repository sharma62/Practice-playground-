import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setKeywords } from "../Redux/Slice/State/JobSearchSlice";
const SearchBox = () => {
  const [key,setKey]= useState('')
  const dispatch = useDispatch();
  const handleonSubmit = (e)=>{
    e.preventDefault()  
    dispatch(setKeywords(key))
  }
  const handleOnchange = (e) => {
    setKey(e.target.value)
  };
  
  return (
    <div className="container mx-auto mt-10 flex justify-center align-items-center sticky top-7  z-100 ">
      <form action="" onSubmit={handleonSubmit}>
        <input
          onChange={handleOnchange}
          type="text"
          name="search"
          id=""
          className="min-w-sm md:min-w-lg p-2 focus:bg-gray-100 rounded-md border-b-2 outline-blue-600 transition-all duration-400"
          placeholder="Jobs Name, Job Id, Apply Id, Catagories . . . etc"
          />
       </form>
    </div>
  );
};

export default SearchBox;
