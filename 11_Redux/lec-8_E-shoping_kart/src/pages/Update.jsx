import React, { useContext, useState } from 'react';
import Nav from '../components/Nav';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Update = () => {
    const { user, setUser } = useContext(UserContext)
    const [input, setInput] = useState(user)
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ ...input })
        localStorage.setItem('user', JSON.stringify(input))
        alert("Profile updated successfully")
        navigate('/profile')
    }
    return (
        <>
            <Nav />
 
            <div className="flex items-center justify-center min-h-[87vh] bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                    <h1 className='text-center text-4xl font-bold'>Update Profile</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input name="name" value={input.name} onChange={handleOnChange} type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input name="email" value={input.email} onChange={handleOnChange} type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input name="phone" value={input.phone} onChange={handleOnChange} type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="adds" className="block text-sm font-medium text-gray-700">Address</label>
                            <input name="adds" value={input.adds} onChange={handleOnChange} type="tel" id="adds" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your Address number" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer">Update Profile</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Update;
