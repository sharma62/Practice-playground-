import React, { useContext } from 'react';
import UserContext from '../context/userContext';

const Profile = () => {
  const user = useContext(UserContext)
  return (
    <div>
       <h1>profile</h1>
       <p>Hello, {user[0]} </p>
    </div>
  );
}

export default Profile;
