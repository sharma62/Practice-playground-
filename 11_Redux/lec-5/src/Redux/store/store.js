import {configureStore} from '@reduxjs/toolkit';
import { apiSlice } from '../slice/api/apiSlice';

 const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,  //RTK query reducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware), //RTK API middleware
})
export default store;