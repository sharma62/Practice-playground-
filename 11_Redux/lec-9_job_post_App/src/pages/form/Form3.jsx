import React,{use, useContext, useState} from "react";
import { MultiStepFormContext } from "../../context/multiStepFormContext";
import { TextField ,Button } from "@mui/material";
import {  useNavigate, useParams } from "react-router-dom";


const Form3 = () => {
      const {currentStep,setCurrentStep,userData,setUserData}=useContext(MultiStepFormContext)
      const [formData,setFormData]=useState({...userData[currentStep-1]})
      const url =useParams()
      const {id}=url
      const Navigate = useNavigate()
 
const handleOnChange =(e)=>{
      const {name,value}= e.target
      console.log(name,value)
      setFormData((prev)=>({
      ...prev,[name]:value
    }))
   }
const handleFormBack =()=>{
      setCurrentStep(currentStep-1)
   }
const handleFormSaveSubmit =()=>{
      console.log("final submition  successfully") 
      setUserData((prev)=>([...prev,{...userData}]))
      Navigate(`/formSummary/${id}`)
   }
console.log(userData) 
  return( 
     <> 
       <div className="container p-4">
        <div className='flex flex-col justify-center  items-start capitalize w-full pt-10'>
            <TextField name="notice" onChange={handleOnChange} value={formData.notice} label="Notice period" margin='normal' variant='outlined' color='primary' className='w-full'/>
            <TextField name="sign" onChange={handleOnChange} value={formData.sign} label="signature {full Name)" margin='normal' variant='outlined' color='primary' className='w-full'/>
            <div className="flex flex-row justify-start items-start capitalize w-full pt-10 gap-4">
                <Button variant='contained' onClick={handleFormBack} color='primary' sx={{marginTop:'20px'}}>Back</Button>
                <Button variant='contained' onClick={handleFormSaveSubmit} color='primary' sx={{marginTop:'20px'}}>Save & Submit</Button>
            +</div>
        </div>
       </div>
     </>
  );  
}; 

export default Form3;
