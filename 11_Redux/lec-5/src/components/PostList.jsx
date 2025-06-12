import React from 'react';
import { useGetPostsQuery } from '../Redux/slice/api/apiSlice'

const PostList = () => {
    const { data, error, isLoading } = useGetPostsQuery();
    console.log(data);
    return (
        <>
            <h1>Post list</h1>
            {
                isLoading ? <h1>Loading...</h1> : error ? <h1>Error</h1> : data.map((post) => (
                    <li key={post.id} style={{ textAlign: 'left' }}>
                        <span style={{color:'pink'}}>{post.title}</span>
                        <p>{post.body}</p>
                    </li>
                ))
            }
        </>
    );
}

export default PostList;
