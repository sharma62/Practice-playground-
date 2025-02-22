import React, { useState } from 'react';
import { nanoid } from 'nanoid'

const Msg = ({ msg }) => {
  return (<p style={{ color: "red" }}>* {msg}</p>);
};

const ToDoForm = ({ newtask, setNewTask, taskList, setTaskList }) => {
  const [msg, setMsg] = useState('');

  let handleAddBtn = () => {
    if (newtask.trim() !== '') {
      const newTaskObj = { id: nanoid(10), text: newtask, completed: false };
      setTaskList([newTaskObj, ...taskList]);
      setNewTask('');
      setMsg(''); // Clear the error message
    } else {
      setMsg('Wrong Input');
      setTimeout(() => {
        setMsg('');
      }, 5000);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task"
        value={newtask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddBtn}>Add Task</button>
      {msg && <Msg msg={msg} />}
    </div>
  );
};

export default ToDoForm;