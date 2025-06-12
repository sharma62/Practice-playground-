import { createContext } from "react"
import { useState } from 'react'

export const FormContext = createContext(null);
export const FormContextProvider = ({ children }) => {
    const [msg, setMsg] = useState('')
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.name !== '' || user.email !== '' || user.phone !== '' || user.password !== '') {
            if (user.id) {
                let updatedUsers = users.map((item) => item.id === user.id ? user : item)
                setUsers(updatedUsers)
            } else {
                setUsers([...users, { ...user, id: new Date().getTime().toString() }])
            }
        } else {
            let msg = '* fill all input mandatory'
            setMsg(msg)
            setTimeout(() => {
                setMsg('')
            }, 5 * 1000);
        }
        setUser({
            name: '',
            email: '',
            phone: '',
            password: '',
        })
    }



    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleDelete = (id) => {
        const newUsers = users.filter((currUser) => currUser.id !== id)
        setUsers(newUsers)

    }
    const handleEdit = (item) => {
        console.log(item)
        setUser(item)
    }

    return (
        <FormContext.Provider value={{msg, setMsg, users, setUsers, user, setUser, handleSubmit, handleChange, handleDelete, handleEdit }}>
            {children}
        </FormContext.Provider>
    );
};