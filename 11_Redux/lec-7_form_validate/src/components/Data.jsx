import React from 'react';
import { useSelector } from 'react-redux';


const Data = () => {
    const users = useSelector((state) => state.form.users)
    console.log(users)
    return (
        <div>
            <table>
                <thead>
                    <th>s.no</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Data;
