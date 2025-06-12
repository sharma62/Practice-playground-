import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const state = {
    status:'idle',
    products: [],
    searchProducts: [],
    cart: [],
    cartItemCount: 0,
    cartItemPrice: 0,

}
 export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const URL = 'https://fakestoreapi.in/api/products'
        const response = await fetch(URL)
        const data = await response.json()
        return data
    }   
)


export const productSlice = createSlice({
    name: 'products',
    initialState:state,
    reducers: {
        addToCart: (state, action) => {
             const item = state.cart.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity = item.quantity + 1
                state.cartItemPrice = state.cartItemPrice + action.payload.price
            } else {
              state.cart.push({ ...action.payload, quantity: 1 })
              state.cartItemPrice = state.cartItemPrice + action.payload.price
            }
            state.cartItemCount = state.cartItemCount + 1
           
        },
        searchProducts: (state, action) => {
            state.searchProducts = action.payload
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setCartPrice: (state, action) => {
            state.cartItemPrice = action.payload
        },
        setCartItemCount: (state, action) => {
            state.cartItemCount = action.payload
        },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
         })
        .addCase(fetchProducts.rejected, (state) => {
          state.status = 'failed';
        });
    },
  });
  
export const { addToCart, removeFromCart, searchProducts,setCart,setCartPrice,setCartItemCount } = productSlice.actions
 export default productSlice.reducer
