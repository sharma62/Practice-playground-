import React,{useEffect} from "react";
import ProductCard from "../components/ProductCard";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Slice/State/productSliec";


const Product = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    const products = useSelector((state => state.productSlice.products))
    const searchList = useSelector((state => state.productSlice.searchProducts))
    const displayList = searchList.length > 0 ? searchList : products.products
    console.log(displayList)



    return (
        <>

            <Nav />
            {
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 ">
                    {
                        displayList && displayList.map((item, idx) => {
                            return (
                                <ProductCard key={idx} product={item} />
                            )
                        })

                    }
                </div>
            }

        </>
    )
}

export default Product;