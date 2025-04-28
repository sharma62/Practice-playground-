import React from 'react'
import UserContext from './context/userContext'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'


function App() {
  const user = ["suraj",25,'techer']
 

  return (
    <>
      <h1>hello</h1>

      <UserContext.Provider value={user}>

        <Dashboard />
        <Profile />
      </UserContext.Provider>



    </>
  )
}

export default App

