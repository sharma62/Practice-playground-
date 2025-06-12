import {configureStore} from '@reduxjs/toolkit'
import { productSlice } from '../Slice/State/productSliec'

export const store = configureStore({
    reducer: {
        productSlice: productSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // devTools: process.env.NODE_ENV !== 'production',
})