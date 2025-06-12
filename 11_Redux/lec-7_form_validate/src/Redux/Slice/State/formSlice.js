import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        cnfPassword: '',
     },
    users: [],
}
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setUsers: (state, action) => {
            // state.users = state.users.push(action.payload)
            state.users=[...state.users, action.payload]
            state.user = {
                name: '',
                email: '',
                password: '',
                cnfPassword: '',
                id:null,
            }
            

        }
    }
})

export const { setUser, setUsers } = formSlice.actions
export default formSlice.reducer