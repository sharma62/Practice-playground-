import { createSlice } from '@reduxjs/toolkit' // step-1 import createSlice from redux toolkit

const initialState = { // step-2 create initail state
    count: 0
}
export const countSlice = createSlice({ // step-3 create slice 
    name: 'count', //part - 1  
    initialState, // part - 2
    reducers: {   // part - 3
        increment: (state, actions) => {
            state.count += 1
        },
        decrement: (state, actions) => {
            state.count -= 1
        },
        reset: (state, actions) => {
            state.count = 0
        }
    }
})

export const { increment, decrement, reset } = countSlice.actions // used in App.js or any other component
export default countSlice.reducer // used in store.js

// note: 