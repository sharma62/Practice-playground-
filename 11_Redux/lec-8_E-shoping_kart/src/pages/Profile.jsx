import React, { useContext } from 'react';
import Nav from '../components/Nav';
import { UserContext } from '../context/userContext';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(UserContext)
  console.log(user)
  return (
    <div>
      <Nav />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
          <div className="flex flex-col items-center">
            <img
              className="w-32 h-32 rounded-full object-cover shadow-md"
              src={user.img}
              alt="Profile"
            />
            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-gray-700 text-sm">
              Passionate developer with experience in React, Node.js, and Tailwind CSS.
              I love creating intuitive and responsive user interfaces.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Email:</span>
              <p>{user.email}</p>
            </div>
            <div>
              <span className="font-semibold">Phone:</span>
              <p>{user.phone}</p>
            </div>
            <div>
              <span className="font-semibold">Location:</span>
              <p>{user.adds}</p>
            </div>
            <div>
              <span className="font-semibold">Website:</span>
              <p>www.amit.dev</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/profile/edit">
              <Button title=" Edit Profile" />
            </Link>


          </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
