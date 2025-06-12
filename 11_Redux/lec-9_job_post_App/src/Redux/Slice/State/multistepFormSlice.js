import {createSlice} from '@reduxjs/toolkit';


const initialState = {
        form1: {
            fullName: 'amit kumar',
            email: 'ak@123',
            phone: '11223344556',
            address: '12,ggfl, kkkh , patna ,abc road, 801103',
        },
        form2: {
            jobTitle: 'SDE',
            experience: '2',
            location: 'Bihta',
            skills: 'c, c++',
        },
        form3: {
             onbordingDate: '22-10-2025',
        },
}

export const multistepFormSlice = createSlice({
    name:'multistepForm',
    initialState,
    reducers:{
        setForm1:(state,action)=>{
            console.log('form1',action.payload)
        },
        setForm2:(state,action)=>{
            console.log('form2',action.payload)
        },
        setForm3:(state,action)=>{
            console.log('form3',action.payload)
        }
    }
})

export const {setForm1,setForm2,setForm3}= multistepFormSlice.actions
export default multistepFormSlice.reducer