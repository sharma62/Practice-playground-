import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 py-3">
            <div className='w-50'><img src="https://th.bing.com/th/id/OIP.Q2f-9mD4HkeSj0QIqTrJWAHaE7?rs=1&pid=ImgDetMain" alt="" /></div>
            <div className='flex flex-row gap-3 justify-center items-center'>
                <div><Link to="/" >Home</Link></div>
                <div><Link to="/about-us" >About us</Link></div>
                <div><Link to="/contact" >Contact</Link></div>
                <div><Link to="/help" >Help</Link></div>
              
            </div>
        </div>
        
    </>
  );
}

export default Home;
