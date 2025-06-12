import React, { useState } from 'react';
import { useDispatch } from 'react-redux';  //useDispatch is a hook provided by react-redux to dispatch actions
import { addTodo } from '../features/todo/TodoSlice';
const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (input.trim()){
            dispatch(addTodo({ text: input }))
            setInput('')
        }
    }
    return (
        <>
            <form onSubmit={submitHandler} className='flex justify-center items-center p-6 gap-3 w-[500px] mx-auto'>

                <input 
                    type="text" 
                    placeholder="Add todo" 
                    value={input} onChange={(e) => 
                    setInput(e.target.value)} 
                    className='border rounded p-2'
                    />
                <button type='submit'>Add</button>
            </form>
        </>
    );
}

export default AddTodo;
