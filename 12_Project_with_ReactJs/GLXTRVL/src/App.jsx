import Reac,{ useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import  Training from './Pages/Training/Training'
import Pricing from './pages/Pricing/Pricing'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='training'element={<Training/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
