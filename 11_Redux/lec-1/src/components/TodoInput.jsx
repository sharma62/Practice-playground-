import React, { useState,useContext } from 'react';
 import { TodoContext } from '../context/TodoContext';


const TodoInput = () => {
  const [task, setTask] = useState('');
  const { taskObj, setTaskObj } = useContext(TodoContext)
  
  const handleAddTaskBtn = () => {
    const newTaskObj = {
      id: new Date().getTime().toString(),
      task: task
    }
    if (task) {
      setTaskObj([...taskObj, newTaskObj])
    }
    setTask('')
  }
  return (
    <div className='grid grid-cols-1 max-w-4xl m-auto text-center gap-5 p-4'>
      <h1 className='text-4xl'>Task input</h1>
      <input type="text" placeholder="Enter a task" value={task} onChange={(e) => setTask(e.target.value)} className='p-3 outline-1 outline-gray-400 rounded focus:bg-gray-200 *:' />
      <button onClick={handleAddTaskBtn} className='bg-blue-400 text-white p-3 rounded w-25 m-auto my-3.5 cursor-pointer'>Add task</button>
    </div>
  );
}

export default TodoInput;
