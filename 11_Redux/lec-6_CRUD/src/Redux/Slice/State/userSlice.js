import { combineSlices, createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    password: '',
    id: null, // Adding an id property to the user object to identify the user
  },
  users: []
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
         state.user = { ...state.user, ...action.payload } // Updating the user state with the payload data
    },
    setUsers: (state, action) => {
    
      state.users = [...state.users ,action.payload ]// Adding the new user to the users array
      state.user = { name: '', email: '', phone: '', password: '', id: null } // Resetting the user state after adding the new user
    },
    setDel: (state, action) => {
      state.users = action.payload
    },
    setEdit : (state,action)=>{
       state.user = action.payload // Setting the user state to the selected user for editing
      state.users = state.users.filter((item) => item.id !== action.payload.id) // Removing the selected user from the users array for editing
    },
     
  },
})

export const { setUser, setUsers,setDel,setEdit } = userSlice.actions  // Exporting the actions to be used in the components
export default userSlice.reducer // Exporting the reducer to be used in the store