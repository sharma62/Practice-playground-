import { Stepper, Step, FormLabel, Box } from "@mui/material";
import React, { useContext } from "react";
import Form1 from "./form/Form1";
import Form2 from "./form/Form2";
import Form3 from "./form/Form3";
import { MultiStepFormContext } from "../context/multiStepFormContext";

const steps = [
  "Step 1: Personal Information",
  "Step 2: Experience",
  "Step 3: Additional Information",
];

const Apply = () => {
  const { currentStep, finalData } = useContext(MultiStepFormContext);
  console.log("Current Step:", currentStep);
 
  
  


  const  showStep = (step) => {
    switch (step) {
      case 1:
        
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
    }

  };
  return (
    <div className="flex flex-col items-center justify-start  mt-20">
      <Box sx={{ width: "80%" }}>
        <Stepper activeStep={currentStep - 1} orientation="horizontal">
          {steps.map((label, index) => (
            <Step key={label} completed={false}> 
              <FormLabel className={``}>
               
                {label}
                
                </FormLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {showStep(currentStep)}

    </div>
  );
};

export default Apply;
