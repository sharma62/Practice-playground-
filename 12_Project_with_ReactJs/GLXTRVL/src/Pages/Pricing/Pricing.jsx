import React from 'react'
import NavBar from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer/Footer'
import Card from './Components/Card'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className='bg-black text-white min-h-screen '>
      <NavBar/>
      <h1 className='text-4xl text-center py-6 '>Pricing page</h1>
      <div className='max-w-4xl mx-auto p-6 space-y-4 my-10'>
        <p className='text-lg'>We offer competitive pricing for our travel services. Here are our current packages:</p>
        <ul className='list-disc pl-5 space-y-2'>
          <li className='text-lg'>Basic Package: $499 - Includes flight booking and hotel accommodation.</li>
          <li className='text-lg'>Standard Package: $799 - Includes flight booking, hotel accommodation, and guided tours.</li>
          <li className='text-lg'>Premium Package: $1199 - Includes flight booking, luxury hotel accommodation, guided tours, and airport transfers.</li>
        </ul>
        <p className='text-lg'>For custom packages or more information, please contact us.</p>
        <p className='text-lg'>Note: Prices are subject to change based on availability and season.</p>
      </div>
      <div className='max-w-4xl mx-auto p-6 flex justify-around items-center  gap-4 md:gap-8 flex-col md:flex-row  '>
          <Card price={499} planName={"Basic"} />
          <Card price={799} planName={"Standerd"} />
          <Card price={1199} planName={"Premium"} />
      </div>
      <div className='text-center my-10'>
        <Link to={'/contact'} className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer'>
          Contact Us for More Details
        </Link>
      </div>

      <Footer/>
    </div>
  )
}

export default Pricing
