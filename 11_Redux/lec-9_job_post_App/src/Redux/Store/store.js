import { configureStore } from "@reduxjs/toolkit";
 import { jobSearchSlice }  from "../Slice/State/JobSearchSlice";

export  const store = configureStore({
    reducer:{
        jobSearchSlice: jobSearchSlice.reducer,
    }
})
