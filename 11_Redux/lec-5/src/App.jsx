import { useState } from 'react'

import './App.css'
import PostList from './components/PostList'
import AddPost from './components/AddPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostList />
      <AddPost/>
    </>
  )
}

export default App
