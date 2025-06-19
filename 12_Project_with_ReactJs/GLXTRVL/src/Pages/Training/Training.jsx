import React from 'react'
import NavBar from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer/Footer'

const Training = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <NavBar/>
      <h1 className='text-4xl py-8 capitalize text-center'>training page</h1>
      
          <ol className='max-w-4xl mx-auto p-6 space-y-4 my-10'>
            <li className='text-lg'>
              <strong>Step 1:</strong> Choose a training program that suits your needs.
            </li>
            <li className='text-lg'>
              <strong>Step 2:</strong> Register for the program by filling out the online form.
            </li>
            <li className='text-lg'>
              <strong>Step 3:</strong> Attend the training sessions as scheduled.
            </li>
            <li className='text-lg'>
              <strong>Step 4:</strong> Complete any assignments or projects given during the training.
            </li>
            <li className='text-lg'>
              <strong>Step 5:</strong> Receive your certification upon successful completion of the program.
            </li>
          </ol>
      
      <Footer/>
    </div>
  )
}

export default Training
