import { configureStore } from '@reduxjs/toolkit'
import { formSlice } from '../Slice/State/formSlice'

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
})
