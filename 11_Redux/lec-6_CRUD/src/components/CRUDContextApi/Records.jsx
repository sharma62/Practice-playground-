import React from 'react';
import { useContext } from 'react';
import { FormContext } from './Context/Context';
const Records = () => {
const { users, handleDelete, handleEdit } = useContext(FormContext)
 
    return (
        <>
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

export default Records;
