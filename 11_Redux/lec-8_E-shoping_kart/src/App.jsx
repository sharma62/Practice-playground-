import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import ProductDetails from './components/ProductDetails'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/store'
import { UserContextProvider } from './context/userContext'
import Update from './pages/Update'

function App() {

  return (
    <>
    <UserContextProvider>
      <Provider store={store}>
           <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<Update/>} />
              <Route path="/p_details/:id" element={<ProductDetails />} />
            </Routes>
          </Router>
       </Provider>
    </UserContextProvider>
    </>
  )
}

export default App
