import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Api = () => {
    const [posts, setPost] = useState([]);
    const URL = 'https://jsonplaceholder.typicode.com/posts';

   
    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setPost(response.data)
            })
            .catch((error) => {
                console.log(error)
            }) 
    }, [])
    return (
        <div>
            <h1>Posts List fetch via API</h1>
            <ol>
                {
                    posts.map((post) => {

                        return (
                            <li key={post.id}>{post.title}</li>
                        )

                    })
                }
            </ol>
        </div>
    );
}

export default Api;
