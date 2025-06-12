import React, { useContext } from "react";
import { MultiStepFormContext } from "../context/multiStepFormContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

const formSummary = () => {
  const { userData } = useContext(MultiStepFormContext);
  const id = useParams().id;
  console.log(userData);
  const Navigate = useNavigate();
  return (
    <div>
      
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Form Summary</h2>

          <div className="mb-4">
            <p className="font-semibold">Full Name:</p>
            <p>{userData[0].fname || "Not Provided"}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Contact:</p>
            <p>{userData[0].contact || "Not Provided"}</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Age:</p>
            <p>{userData[0].age || "Not Provided"}</p>
          </div>
          <hr />
          <div className="mb-4">
            <p className="font-semibold">Exprience :</p>
            <p>{userData[1].exp || "Not Provided"}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">skills:</p>
            <p>{userData[1].skills || "Not Provided"}</p>
          </div>
          <hr />
          <div className="mb-4">
            <p className="font-semibold">Notice :</p>
            <p>{userData[2].notice || "Not Provided"}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Sign:</p>
            <p>{userData[2].sign || "Not Provided"}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Job ID:</p>
            <p>{id}</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            className="w-full mt-4"
            onClick={() => {
              Navigate(`/thankyou/${id}`);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default formSummary;
