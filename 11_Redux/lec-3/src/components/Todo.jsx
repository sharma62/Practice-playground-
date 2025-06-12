import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo,editTodo } from '../features/todo/TodoSlice';

const Todo = () => {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    console.log(todos)
    return (
        <>
            <ul className='container mx-auto'>

                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id} className='p-5 border mx-auto my-5 flex justify-between items-center rounded'>
                            <h1>{todo.title.text}</h1>
                            <div className='flex flex-row gap-5'>
                                <button className='cursor-pointer' onClick={() => dispatch(editTodo(todo.id))}>Edit</button>
                                <button className='text-rose-600 cursor-pointer' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className='border p-3'>No todos available.</p>
                )}
            </ul    >
        </>
    );
}

export default Todo;