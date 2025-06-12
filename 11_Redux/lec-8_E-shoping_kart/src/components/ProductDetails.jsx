import React from 'react';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import Button from './Button';

const ProductDetails = () => {
  const products = useSelector((state) => state.productSlice.products)
  const productId = useParams()
  // console.log(productId)
  localStorage.setItem('product', JSON.stringify(products))
  const rememeredProduct = JSON.parse(localStorage.getItem('product'))
  // console.log(rememeredProduct)

  const matchedProduct = rememeredProduct.products.find((item) => item.id == productId.id)
  // console.log(matchedProduct)


  return (
    <div>
      <Nav />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div className='shadow-lg'>
          <img src={matchedProduct.image} alt="" className='' />
        </div>
        <div className='p-4 flex flex-col jusify-center items-start gap-2 '>
          <h1 className='text-3xl font-bold'>{matchedProduct.title}</h1>
          <p className='text-xl font-semibold '>Price:  {matchedProduct.price} <small><strike> 70% off </strike> Spacial Offer</small></p>
          <p className='text-sm font-semibold'>Description: {(matchedProduct.description.slice(0, 210))}</p>
          <p className='text-xl font-semibold capitalize'>Category: {matchedProduct.category}</p>
          <div className='flex gap-2'>
            <Link to={'/checkout/'+ matchedProduct.id}>
              <Button title={'Buy Now'} />    
            </Link>
            <Button title={'Add To Cart'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
