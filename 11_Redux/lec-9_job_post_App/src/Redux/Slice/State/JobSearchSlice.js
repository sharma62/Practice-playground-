import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keywords:'',
 }

export const jobSearchSlice =createSlice({
    name:"jobSearch",
    initialState,
    reducers:{
        setKeywords:(state,action)=>{
            state.keywords = action.payload
          },
        

    }
})
export const {setKeywords} = jobSearchSlice.actions
export default jobSearchSlice.reducer