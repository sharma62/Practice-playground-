import React from 'react';
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import { Link, redirect } from 'react-router-dom';
import Button from '../components/Button';


const Checkout = () => {
  const cartItemCount = useSelector((state) => state.productSlice.cartItemCount)
  if (cartItemCount === 0){
    redirect('/product')
  }
    return (
      <>
        <Nav />
        <div className='grid grid-cols-1 md:grid-cols-1 p-5 '>
          <div className='flex flex-col justify-center items-center'>
            <img className="w-sm" src={'https://th.bing.com/th/id/R.b924398e7c5a91efb9c39740356b6931?rik=%2bWg%2bSrauInehIw&riu=http%3a%2f%2fmedia.istockphoto.com%2fvectors%2fflat-round-check-mark-green-icon-button-tick-symbol-isolated-on-white-vector-id691856234%3fk%3d6%26m%3d691856234%26s%3d612x612%26w%3d0%26h%3dY692VBJL883q4DGPQebbfCOYXZ5x6rVSYPtVEmMmv3Y%3d&ehk=fl%2f5H%2fDiloaPkuE6m6NSwQAwWwq%2fPstjl32s2y0x4vE%3d&risl=&pid=ImgRaw&r=0'} alt="" />
            <h1 className='text-3xl font-bold'>Order has been sucessfully placed!</h1>
            <p className='text-xl pb-6'>Thank you for your order!</p>
            <Link to="/">
              <Button title={'Continue Shopping'} bgColor={'blue'} />
            </Link>
            
          </div>
        </div>
      </>
    );
}

export default Checkout;
