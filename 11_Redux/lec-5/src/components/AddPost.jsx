import React, { useState } from 'react';
import { useAddPostMutation } from '../Redux/slice/api/apiSlice';

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [addPost] = useAddPostMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPost({ title })
        setTitle('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ padding: '15px' }}
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    required
                />
                <button type='submit'>Add post</button>
            </form>
        </div>
    );
}

export default AddPost;
