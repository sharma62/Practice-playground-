import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setUsers } from '../Redux/Slice/State/formSlice';
import { formValidationSchema } from '../validation/fformValidationSchema';

function Form() {
    const user = useSelector((state) => state.form.user)
    const users = useSelector((state) => state.form.users)
    const dispatch = useDispatch()
    const [errArray, seterrArray] = useState([])
    const [msg,setMsg] = useState('')


    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch(setUser({ ...user, [name]: value }))
        seterrArray({ ...errArray, [name]: '' }) // Clear the error message for the field being changed
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const userWithId = { ...user, id: new Date().getTime() }
      
        formValidationSchema.validate(userWithId, { abortEarly: false })
            .then((data) => {
                dispatch(setUsers(data)) // Adding a unique id to the user object
                setMsg('User added successfully')
                setTimeout(() => {
                    setMsg('')
                }, 5000);
            })
            .catch((err) => {
                const validateArray = err.inner.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                seterrArray(validateArray)

            })
        // console.log(errArray)
        setTimeout(() => {
            seterrArray('')
            
        }, 15 * 1000);
        // console.log(users)
    }
    return (
      <>
            <form onSubmit={handleSubmit}>
         <h2>Form Validation using Yup</h2>
         <p style={{color:'green'}}>{msg}</p>
                <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange} /><br />
                {errArray.name && <><small>{errArray.name}</small></>}<br />

                <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} /><br />
                {errArray.email && <><small> {errArray.email}</small></>}<br />
                <input type="password" placeholder='Password' name='password' value={user.password} onChange={handleChange} /><br />
                {errArray.password && <><small>{errArray.password}</small></>} <br />
                <input type="txt" placeholder='Confirm Passwrod' name='cnfPassword' value={user.cnfPassword} onChange={handleChange} /><br />
                {errArray.cnfPassword && <><small>{errArray.cnfPassword}</small></>} <br /><br />
                <button type='submit'>Submit</button>
            </form>
       </>     
    );
}

export default Form;
