import React from 'react';
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart, setCart, setCartPrice, setCartItemCount } from '../Redux/Slice/State/productSliec';

const Cart = () => {
  const cartItem = useSelector((state) => state.productSlice.cart)
  const cartItemPrice = useSelector((state) => state.productSlice.cartItemPrice)
  const cartItemCount = useSelector((state) => state.productSlice.cartItemCount)
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    const index = cartItem.findIndex((item) => item.id === id)
    if (index !== -1) {
      const item = cartItem[index]
      dispatch(setCartItemCount(cartItemCount - item.quantity)) // cart item count ko update kro
      const updatedCart = cartItem.filter((item) => item.id !== id) // filter out the item to be removed
      dispatch(setCart(updatedCart)) // cart ko update kro
      const updatedPrice = cartItemPrice - (item.price * item.quantity) // calculate the new price
      dispatch(setCartPrice(updatedPrice)) // price ko update kro
    }
  }

  const handleQuentityIncrement = (id) => {
    const existItem = cartItem.find((item) => item.id === id)//Item ko cart me dhundhna
    if (existItem !== undefined) {//Agar item mil gaya to uski quantity badhao
      const updatedItem = { ...existItem, quantity: existItem.quantity + 1 }// Ek naya updated item banao
      const updatedCart = cartItem.map((item) => (item.id === id ? updatedItem : item)) //puran cart ko updateditem se replace karo
      dispatch(setCart(updatedCart)) // cart ko update kro
      dispatch(setCartPrice(cartItemPrice + existItem.price)) // price ko update kro
      // console.log('updated cart', updatedCart)
      dispatch(setCartItemCount(cartItemCount + 1)) // cart item count ko update kro

    }


  }
  const handleQuentityDecrement = (id) => {
    const existItem = cartItem.find((item) => item.id === id)
    if (existItem !== undefined) {
      const updatedItem = { ...existItem, quantity: existItem.quantity - 1 }
      const updatedCart = cartItem.map((item) => (item.id === id ? updatedItem : item))
      dispatch(setCart(updatedCart))
      dispatch(setCartPrice(cartItemPrice - existItem.price))
      // console.log('updated cart', updatedCart)
      dispatch(setCartItemCount(cartItemCount - 1)) // cart item count ko update kro
      if (existItem.quantity === 1) {
        handleRemoveItem(id)
      }
    }
  }

  // console.log(cartItem.length)
  return (
    <>
      <Nav />
      <div className='grid grid-cols-1 md:grid-cols-1 p-5 '>
        <table className='table-auto border-collapse border border-gray-300 w-full capitalize  '>
          <thead >
            <tr className='bg-gray-200 text-gray-600 font-bold text-lg'>
              <th>sno.</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Model No </th>
              <th>Price per Item</th>
              <th>Vol</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItem && cartItem.length == 0 ? <tr><td colSpan={7}>empty cart . . . </td></tr> :
                cartItem && cartItem.map((item, idx) => {
                  return (
                    <>
                      <tr key={idx} className='flex-flex-row justify-between items-center cursor-pointer hover:shadow-lg' style={{ textAlign: 'center' }}    >
                        <td>{idx + 1}</td>
                        <td><img src={item.image} className="img-fluid rounded-top w-[100px]  cursor-pointer" alt="image" /></td>
                        <td>{(item.title).slice(0, 50)}</td>
                        <td>{item.model}</td>
                        <td>{item.price}/-</td>
                        <td>
                          <Button title={'-'} bgColor={'blue'} onClick={() => { handleQuentityDecrement(item.id) }} />
                          <span className='mx-2'>{item.quantity}</span>
                          <Button title={'+'} bgColor={'blue'} onClick={() => { handleQuentityIncrement(item.id) }} />
                        </td>
                        <td><Button title={'X'} bgColor={'red'} onClick={() => { handleRemoveItem(item.id) }} /></td>
                      </tr>
                    </>
                  )
                })
            }
          </tbody>
        </table>
        <div className='border-t-2 border-gray-300 flex justify-end mt-6'>
          <div className='flex flex-row p-4 gap-3'>
            <h1 className='text-2xl font-bold'>Total Amount: {cartItemPrice} /-</h1>
            {cartItem && cartItem.length == 0 ? "" : 
            <>
            <Link to={'/checkout'}>
              <Button title={'Proceed To Checkout'} bgColor={'blue'} />
            </Link>
            <Button title={'Clear Cart'} bgColor={'red'} onClick={() => { dispatch(setCart([])); dispatch(setCartPrice(0)); dispatch(setCartItemCount(0)) }} />
            </>
            }
            <Link to="/product">
              <Button title={'Continue Shopping'} bgColor={'blue'} />
            </Link>
          </div>
        </div >

      </div>

    </>
  );
}

export default Cart;
