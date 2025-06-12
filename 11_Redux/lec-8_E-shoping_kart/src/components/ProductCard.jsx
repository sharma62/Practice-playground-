import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slice/State/productSliec";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleCart = () => {
    console.log("add to cart function");
    dispatch(addToCart(product));

  }
   return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg ">
      <div className="relative">
        <img className="w-full" src={product.image} />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{(product.title).slice(0, 50)}</h3>
        <p className="text-gray-600 text-sm mb-4">{(product.description).slice(0, 100)}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">Rs {product.price} /-</span>
          <div className="flex space-x-2">
            <Button title="Add To Cart" onClick={handleCart}/>
            <Link to={`/p_details/${product.id}`} >
              <Button title="Details" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
