import React from 'react'
import video from './../../../assets/giphy.gif'

const About = () => {
  return (
   <>
   <h1 className='text-center p-5 text-4xl font-semibold text-white'>About</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 p-5 gap-5 '>
    <div className='item-certer flex justify-center'>
     <img src={video} alt="gif" className='w-full rounded-2xl'/>
     </div>
    <div className='flex flex-col gap-4 justify-center items-baseline text-white p-5'>
      <h2 className='text-2xl'>Lorem, ipsum dolor.</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus unde delectus nam laudantium quae necessitatibus sit voluptate laborum odit voluptates.</p>
      <small>Date: 1st of june 2025</small>
    </div>
   </div>
   </>
  )
}

export default About
