import { useState } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'

function ToDoApp() {
  const list = new Array()
  const [taskList, setTaskList] = useState(list) // jab add btn click karte hai tab list main task add ho
  const [newtask, setNewTask] = useState('') // current input handle karega 

  

  return (
    <>
      <h1>To Do App</h1>
      <ToDoForm newtask={newtask} setNewTask={setNewTask} taskList={taskList} setTaskList={setTaskList} />
      {taskList.map((task) => {
        return <ToDoItem key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} />
      })}
    </>
  )
}

export default ToDoApp
