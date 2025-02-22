import React, { useState } from 'react'
import editSvg from '../assets/edit-246.svg'


const ToDoItem = (props) => {
  let date = new Date()
  const [isEditing, setIsEditing] = useState(true)
  const [editedTask, setEditedTask] = useState(props.task.text)
  let handleRemoveBtn = () => {
    const updatedTaskList = props.taskList.filter(task => task.id !== props.task.id);

    // Update state
    props.setTaskList(updatedTaskList);
  }
  let handleEditBtn = () => {
    console.log('Edit : ' + props.task.id)
    if (isEditing == true)
      setIsEditing(false)
    else {
      setIsEditing(true)
    }
  }

  return (

    <>
      <div className='todoitem'>
        <div className='details' >
          <h2><input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} disabled={isEditing} /></h2>
          <span>Deadline : 5 days</span>
          <small>Creation time : {date.toLocaleDateString()} </small>
        </div>
        <div className='operation'>
          <button onClick={handleRemoveBtn}>X</button>
          <button onClick={handleEditBtn}>
            {isEditing &&<img src={editSvg} alt="edit" width={'10px'}  /> || "update"} 
          </button>
        </div>
      </div>
    </>
  )
}

export default ToDoItem