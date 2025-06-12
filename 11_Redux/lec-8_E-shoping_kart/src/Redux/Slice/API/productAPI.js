import { useSelector,useDispatch } from "react-redux"
import { setProducts } from "../State/productSliec"


const dispatch = useDispatch()
const productsList = useSelector((state) => state.products)

const URL = 'https://fakestoreapi.in/api/products'



fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        dispatch(
            setProducts(data)
        )
        
     }).catch((err) => {
        console.log(err)
    })


