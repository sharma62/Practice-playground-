import React, { useContext, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { MultiStepFormContext } from "../../context/multiStepFormContext";
import { validateStepOneSchema } from "../../validation/validateSchema";

const Form1 = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(MultiStepFormContext);
  const [formData, setFormData] = useState({ ...userData[currentStep - 1] });
  const [err,setErr]=useState({})

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // setFormData((prev) => ({ ...prev, [name]: value }));
    setFormData((prev)=>({...prev,[name]:value}))
    
  };
  const handleFormSaveNext = async (e) => {
    console.log("save clicked");
    setUserData((prev) => [...prev, { ...formData }]);
    try {
      await validateStepOneSchema.validate(formData, { abortEarly: false });
      setErr({})
    } catch (err) {
      console.log(err)
    }

    setCurrentStep(currentStep + 1);
  };

  console.log(userData);
  return (
    <>
      <div className="container p-4">
        <form action="">
          <div className="flex flex-col justify-center  items-start capitalize w-full pt-10">
            <TextField
              name="fname"
              onChange={handleOnChange}
              value={formData.fname}
              label="full Name"
              margin="normal"
              variant="outlined"
              color="primary"
              className="w-full"
            />
            <TextField
              name="contact"
              onChange={handleOnChange}
              value={formData.contact}
              label="contact"
              margin="normal"
              variant="outlined"
              color="primary"
              className="w-full"
            />
            <TextField
              name="age"
              onChange={handleOnChange}
              value={formData.age}
              label="age"
              margin="normal"
              variant="outlined"
              color="primary"
              className="w-full"
            />
            <div className="flex flex-row justify-start items-center gap-4">
              <Button
                variant="contained"
                onClick={handleFormSaveNext}
                sx={{ marginTop: "20px" }}
                className="hover:bg-blue-400 px-4 py-3 rounded cursor-pointer shadow-2xl border-none transition-all  duration-300"
              >
                Save & Next
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form1;
