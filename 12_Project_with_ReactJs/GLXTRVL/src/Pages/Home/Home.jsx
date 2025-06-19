import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service.jsx'   
 import CallToAction from './Components/CallToAction.jsx'
import Faq from './Components/Faq.jsx'
import Footer from '../../Components/Footer/Footer.jsx'


const Home = () => {
   return (
    <div className='bg-black'>
       <Navbar/>
       <Hero/>
       <About/>
       <Service/>
       <CallToAction/>
       <Faq/>
       <Footer/>
      
    </div>
  )
}

export default Home
