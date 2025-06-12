import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
 const Home = () => {
 
  return (
    <>
      <Nav />
      <div className="container-fluid mx-auto flex flex-col items-center justify-center h-150 bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1742407795182-144225af8ebe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="E-commerce Banner"
          className="w-full h-96 object-cover mb-6 rounded-lg shadow-lg" />

        <h1 className="text-4xl font-bold mb-4">Welcome to Our E-commerce Store</h1>
        <p className="text-lg mb-8">Discover amazing products and deals!</p>
        <Link to="/product" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Start Shopping
        </Link>
      </div>

    </>
  );
}

export default Home;
