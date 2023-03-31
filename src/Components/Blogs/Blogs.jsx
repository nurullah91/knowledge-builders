import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';
import "./Blogs.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Blogs = ({readTime, }) => {

    const [bookMarked, setBookMarked] = useState([])
  
  
  
    const handleBookmark = (name) =>{

        const exist = bookMarked.find(markedTitle => name === markedTitle)
        if(exist){
            toast("You marked it before!")
        }
        let newBookMark = [...bookMarked,name];
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
                    blogs.map(blog => (<Blog handleBookmark={handleBookmark} key={blog.id} blog={blog}></Blog>))

                }
            </div>

            <BookMark bookMarked={bookMarked} readTime={readTime}></BookMark>
        </div>
    );
};

export default Blogs;