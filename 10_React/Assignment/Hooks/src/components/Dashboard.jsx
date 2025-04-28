import React, { useContext } from 'react';
import UserContext from '../context/userContext';


const Dashboard = () => {
    const user = useContext(UserContext)
    return (
        <>
            <h1> Dashboard {user}</h1>
        </>
    );
}

export default Dashboard; 
