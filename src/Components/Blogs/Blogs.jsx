import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';
import "./Blogs.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Blogs = (props) => {

    const readTime = props.readTime
    const handleMarkRead = props.handleMarkRead
    const [bookMarked, setBookMarked] = useState([])
  
  
  
    const handleBookmark = (blog) =>{
      
        const exist = bookMarked.find(markedBlog => markedBlog.id === blog.id);
        if(exist){
            toast("You marked it before!")
        }
        let newBookMark = [...bookMarked, blog];
        setBookMarked(newBookMark);
    }


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
                    blogs.map(blog => (<Blog handleBookmark={handleBookmark} handleMarkRead={handleMarkRead} key={blog.id} blog={blog}></Blog>))

                }
            </div>

            <BookMark bookMarked={bookMarked} readTime={readTime}></BookMark>
        </div>
    );
};

export default Blogs;