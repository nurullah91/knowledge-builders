import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';
import "./Blogs.css"

const Blogs = ({readTime, }) => {

    const [bookMarked, setBookMarked] = useState([])
  
  
  
    const handleBookmark = (name) =>{
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