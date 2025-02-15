import React from 'react'
import Btn from '../btn'

const Hero = () => {
    return (
        <div className='flex justify-center gap-x-8 p-3 text-left pt-10' >
            <div className='flex flex-col gap-y-10 w-[800px]'>
                <div>
                    <h1 className='text-3xl sm:text-5xl md:text-7xl uppercase'>your feet deserve the best</h1>
                </div>
                <div className='uppercase text-sm sm:text-2xl'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores ipsam fugit quod dolore voluptates incidunt minus veniam consequatur sint!</p>
                </div>
                <div className='text-white gap-3 flex'>
                    <Btn title={"Shop now"} theme="bg-red-600"/>
                    <Btn title={"category"} theme="bg-white text-black"/>
                </div>
                <div className=' text-left p-5'>
                    <p>Also availble on </p>
                    <div className='flex gap-x-4 py-4'>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png" alt="" className='w-20' />
                        <img src="https://www.northcountycoalitionforthearts.org/wp-content/uploads/2018/07/Amazon-A-Logo.jpg" alt="" className='w-29'/>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/81WPTLU2GXL._SX695_.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Hero