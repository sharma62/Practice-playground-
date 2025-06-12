import {configureStore} from '@reduxjs/toolkit';
import countReducer from '../features/countSlice';
export const store = configureStore({
    reducer: {
        counter: countReducer
    }
})