import React from 'react'
import Btn from '../btn'

const Navbar = () => {
    return (
        <>
            <nav className='grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 text-white '>
                <div className='w-40 md:w-50 order-1 absolute md:relative'>
                    <img src="https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png" alt="logo" />
                </div>
                <div className='uppercase md:col-span-3 text-black  hidden md:inline-block order-2  '>
                    <ul className=' flex flex-col md:flex-row gap-y-1 justify-around'>
                        <li>
                            <a href="#" className='hover:text-red-500'>menu</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-500'>location</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-500'>about</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-red-500'>contact</a>
                        </li>

                    </ul>
                </div>
                <div className='flex justify-end md:order-3 order-1'>
                    <Btn title = "login" theme="bg-red-600"/>
                </div>
            </nav>
        </>
    )
}

export default Navbar