import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { taskObj, setTaskObj } = useContext(TodoContext);
  const [isEdit, setIsEdit] = useState(false)
  const [editTask, setEditTask] = useState('')

  const handleEditBtn = (task) => {
    //save the edited task
    if (isEdit && editTask.id === task.id) { // 2. jab save btn click karnge toh check hoga ki edit mode enable hai ya nahi aur editTask.id === task.id hai ya nahi(jo btn pe click hua hai wahi task edit hoga)
      setTaskObj(taskObj.map((currTask) =>// 3. taskObj ko traverse karke editTask.id === task.id wala task ko update karenge
        currTask.id === task.id ? { ...currTask, task: editTask.task } : currTask
      ));
      setIsEdit(false);//4. edit mode disable ho jayega
    } else {
      //enable edit mode
      setEditTask({ id: task.id, task: task.task }); // 1. jab edit button pe click karenge toh editTask me task ki value set ho jayegi aur edit mode enable ho jayega
      setIsEdit(true);
    }
  };

  const handleDelBtn = (taskId) => {
    setTaskObj(taskObj.filter((task) => task.id !== taskId));
  }
  return (
    <div className='p-3'>
      <h1 className='text-3xl text-center py-4 capitalize'>task List</h1>
      {
        taskObj.map((currTask) => {
          return (
            <div key={currTask.id} className='flex justify-between max-w-2xl m-auto gap-1 my-2 '>
              <input

                type="text"
                value={isEdit && currTask.id === editTask.id ? editTask.task : currTask.task}
                onChange={(e) => setEditTask({ ...editTask, task: e.target.value })}
                disabled={!isEdit || (editTask && currTask.id !== editTask.id)}
                className={`capitalize w-[600px] p-2 rounded ${isEdit && currTask.id === editTask.id ? 'focus:outline-blue-400 bg-gray-50 outline-1' : 'bg-gray-300'}`}
                ref={input => {
                  if (input && isEdit && currTask.id === editTask.id) {
                  input.focus();
                  }
                }}
              />
              <span className='flex flex-row gap-2 '>
                <button className='bg-blue-400 rounded my-1 cursor-pointer p-2 capitalize hover:bg-blue-300 text-white' onClick={() => handleEditBtn(currTask)}>{isEdit && editTask.id === currTask.id ? 'save' : 'edit'} </button>
                <button className='bg-blue-400 rounded my-1 cursor-pointer p-2 capitalize hover:bg-blue-300 text-white' onClick={() => handleDelBtn(currTask.id)}>del</button>
              </span>
            </div>
          )
        })
      }
    </div>
  );
}

export default TodoList;
