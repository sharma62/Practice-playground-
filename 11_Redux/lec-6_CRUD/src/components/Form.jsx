import { useState } from 'react'

const Form = () => {
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
        <>
            <div>
                <h2>Basic CURD</h2>
                <h4 style={{ color: "red", textTransform: 'capitalize' }}>{msg}</h4>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name='name' value={user.name} onChange={handleChange} /><br /><br />
                    <input type="email" placeholder='Email' name='email' value={user.email} onChange={handleChange} /><br /><br />
                    <input type="text" placeholder='phone' name='phone' value={user.phone} onChange={handleChange} /><br /><br />
                    <input type="password" placeholder='password' name='password' value={user.password} onChange={handleChange} /><br /><br />
                    <button type='submit'>{user.id ? 'Update' : 'Save '}</button>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>

                            <th>s no.</th>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.password}</td>
                                        <td>
                                            <button onClick={() => { handleEdit(item) }}>edit</button>
                                            <button onClick={() => { handleDelete(item.id) }}>delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Form;
