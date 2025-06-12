import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setUsers } from "../Slice/State/userSlice";
import { dataValidationSchema } from "../../validation/dataValidationSchema";

const Input = () => {
    const [validateArray, setValidateArray] = useState({})
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [msg, setMsg] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch(setUser({ [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (user.name !== '' || user.email !== '' || user.phone !== '' || user.password !== '') {
        //     dispatch(setUsers({ ...user, id: Date.now()  })) // Adding a unique id to the user object
        //  } else {
        //     setMsg(' *  Please fill all the fields')
        //     setTimeout(() => {
        //         setMsg('')
        //     }, 5000);
        // }
        dataValidationSchema
            .validate({ ...user, id: Date.now() }, { abortEarly: false })
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

                setValidateArray(validateArray)
                setTimeout(() => {
                    setValidateArray({})
                }, 8000);

            })

    }

    return (
        <>
            <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h2>CURD using Redux</h2>
                <div>
                    <h4 style={{ color: "green", textTransform: 'capitalize' }}>{msg}</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange} /><br />
                        {validateArray['name'] && <span>{validateArray['name']}</span>}<br /><br />

                        <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} autoComplete="username" /><br />
                        {validateArray['email'] && <span>{validateArray['email']}</span>}<br /><br />

                        <input type="text" placeholder='phone' name='phone' value={user.phone} onChange={handleChange} /><br />
                        {validateArray['phone'] && <span>{validateArray['phone']} </span> }<br /><br />
                        <input type="password" placeholder='password' name='password' value={user.password} onChange={handleChange} autoComplete="New-password" /><br />
                        {validateArray['password'] && <span>{validateArray['password']}</span>}<br /><br />
                        <button type='submit'>{user.id ? 'Update' : 'Save '}</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Input;