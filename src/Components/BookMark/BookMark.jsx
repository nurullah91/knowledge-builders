import React from 'react';
import "./BookMark.css"

const BookMark = ({readTime}) => {
    return (
        <div>
           <div className='spent-time'>
            <h3>Spent time on read: {readTime? readTime:0} min</h3>

           </div>
           <div className='bookMark-blogs'>
            <h3>Bookmarked Blogs: 0</h3>
           </div>
           
        </div>
    );
};

export default BookMark;