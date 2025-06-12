import React from 'react';
import { TodoContextProvider } from './context/TodoContext'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';
function App() {

  return (
    <>
     
      <TodoContextProvider>
        <TodoInput />
        <TodoList />
      </TodoContextProvider>



    </>
  );
}

export default App;
