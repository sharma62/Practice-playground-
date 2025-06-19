import React from 'react'
import video from './../../../assets/video.mp4'
import { Link } from 'react-router-dom'

const Hero = () => {
    
  return (
    <div className='relative -top-17 w-full overflow-hidden '>
       <video src={video} autoPlay muted loop ></video>
       <div className='flex flex-col gap-5 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 md:-translate-y-1/2 text-center text-white capitalize '>
         <h1 className='text-5xl'>travel. galaxies</h1>  
          <p className='sm:block hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ratione vero pariatur eligendi et voluptate fugiat itaque non quae quidem.</p>
          <div className='flex justify-center gap-5 mt-4'>
            <Link to='/training' className='border px-3 py-2 ' >Training</Link>
            <Link to='/contact' className='border px-3 py-2 ' >Contact</Link>
          </div>
       </div>
      
    </div>
  )
}

export default Hero
