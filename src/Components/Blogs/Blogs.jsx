import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';
import "./Blogs.css"

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className='main-container'>

           <div>
           {
                blogs.map(blog => (<Blog key={blog.id} blog={blog}></Blog>))

            }
           </div>

            <BookMark></BookMark>
        </div>
    );
};

export default Blogs;