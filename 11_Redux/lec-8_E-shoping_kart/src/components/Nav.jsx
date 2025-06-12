import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import { useSelector, useDispatch } from 'react-redux';
import { searchProducts } from '../Redux/Slice/State/productSliec';
import { UserContext } from '../context/userContext';
 const Nav = () => {
     const { user } = useContext(UserContext)
    const dispatch = useDispatch()
    const productsList = useSelector((state) => state.productSlice.products)
    // console.log(productsList)
    const [keyword, setkeyword] = useState("")
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const fileredProductsList = productsList.products.filter((item) => {
                return item.title.toLowerCase().includes(keyword.toLowerCase())
            })
            // console.log(fileredProductsList)
            dispatch(searchProducts(fileredProductsList))
        }
    }
    const cartItemCount = useSelector((state) => state.productSlice.cartItemCount)


    return (
        <>
            <div className='bg-gray-50 sticky top-0 z-10 '>
                <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm rounded-4xl ">
                    {/* Left Section: Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
                            alt="Shop"
                            className="h-8 cursor-pointer"
                        />
                    </div>

                    {/* Center Section: Search Bar */}
                    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 max-w-lg w-full">
                        <input
                            type="text"
                            placeholder="Brand, Product, Category, Model No.  etc..."
                            className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none px-2"
                            value={keyword}
                            onChange={(e) => setkeyword(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                        <button className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600">
                            <MagnifyingGlassIcon className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm cursor-pointer">
                            <Link to="/cart" >
                                <img src="https://static.vecteezy.com/system/resources/previews/012/791/182/original/solid-shopping-cart-icon-free-vector.jpg" alt="" width={"50px"} />
                                <div className="absolute top-2 right-87 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-xs font-medium">
                                    {cartItemCount}
                                </div>
                            </Link>

                        </span>
                        <span className="text-sm cursor-pointer"><Link to="/" >Home</Link> </span>
                        <span className="text-sm cursor-pointer"><Link to="/product" >Products</Link> </span>
                        {/* <GlobeIcon className="w-5 h-5 cursor-pointer" /> */}
                        <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                            {/* <ShoppingCartIcon className="w-6 h-6 text-gray-600 rounded-full cursor-pointer" /> */}
                            <HamburgerMenuIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
                        </div>
                        <Link to='/profile' className='flex items-center gap-2'>
                            <PersonIcon className="w-6 h-6 text-gray-600 rounded-full cursor-pointer" />
                            <span className='text-green-500 font-semibold '>{user.name}</span>

                        </Link>

                    </div>
                </nav>

            </div>
           
        </>
    );
}

export default Nav;
