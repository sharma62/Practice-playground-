import React,{useContext,useState} from 'react'
import { MultiStepFormContext } from '../../context/multiStepFormContext'
import { TextField,Button } from '@mui/material'
const Form2 = () => {
  const {currentStep,setCurrentStep,userData,setUserData}=useContext(MultiStepFormContext)
  const [formData,setFormData]=useState({...userData[currentStep-1]})
  const handleOnChange=(e)=>{
    const {name,value}= e.target
     setFormData((prev)=>({...prev,[name]:value}))
  }
  
  const handleFormBack = ()=>{
    setCurrentStep(currentStep-1)
  }
  const handleFormSaveNext = ()=>{
    console.log("form 2 saved")
     setUserData((prev)=>([...prev,{...formData}]))
     setCurrentStep(currentStep+1)
   }
  // console.log(userData)
  return (
  <div className='container p-4'>
      <div className='flex flex-col justify-center  items-start capitalize w-full pt-10'>
       <TextField name='exp' onChange={handleOnChange} value={formData.exp}  label="Experience" margin='normal' variant='outlined' color='primary' className='w-full'/>
       <TextField name='skills' onChange={handleOnChange}  value={formData.skills} label="Skills" margin='normal' variant='outlined' color='primary' className='w-full'/>  
       <div className='flex flex-row justify-start items-start capitalize w-full pt-10 gap-4'>
          <Button variant='contained' onClick={handleFormBack} color='primary' sx={{marginTop:'20px'}}>Back</Button>
          <Button variant='contained' onClick={handleFormSaveNext} color='primary' sx={{marginTop:'20px'}}>Save & Next</Button>
       </div>
    </div>
  </div>
  )
}

export default Form2
