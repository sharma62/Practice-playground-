import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = (props) => {
  return (
    <div>
        <ToDoItem task= {props.taskTitle} />        
    </div>
  )
}

export default ToDoList