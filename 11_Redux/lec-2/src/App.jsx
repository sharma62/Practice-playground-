import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About_us from './components/About_us';
import Contact from './components/contact';
import Help from './components/Help';
const App = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    console.log(name, value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === '' || user.email === '' || user.phone === '' || user.password === '') {
      alert('Please fill the form')
      return; // return will stop the code execution
    } else {
      console.log(user)
    }
    setUser({
      name: '',
      email: '',
      phone: '',
      password: ''
    })
  }
  return (
    <>
      <div className='container mx-auto'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About_us />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/help' element={<Help />} />
          </Routes>
        </Router>
      </div>
      <div className='container mx-auto'>
        <h1 className='text-center text-2xl py-4'>Form</h1>
        <form className='flex flex-col gap-3'>
          <input type="text" placeholder='Enter your name' className='p-2' name='name' value={user.name} onChange={handleInput} />
          <input type="email" placeholder='Enter your email' className='p-2' name='email' value={user.email} onChange={handleInput} />
          <input type="number" placeholder='Enter your Phone numbe' className='p-2' name='phone' value={user.phone} onChange={handleInput} />
          <input type="password" placeholder='Enter your password' className='p-2' name='password' value={user.password} onChange={handleInput} />
          <button className='bg-blue-500 text-white cursor-pointer p-2' name='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
