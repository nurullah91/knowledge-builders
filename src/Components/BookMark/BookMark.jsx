import React from 'react';
import "./BookMark.css"

const BookMark = (props) => {
const bookMarked = props.bookMarked;

    return (
      <div>
          <div className='bookMarked-container'>
           <div className='spent-time'>
            <h3>Spent time on read: {props.readTime} min</h3>

           </div>
           <div className='bookMark-blogs'>
            <h2>Bookmarked Blogs: {bookMarked.length}</h2>

            <div>
                {
                    bookMarked.map(markedBlog => <h5 key={markedBlog.id} className='marked-blog'>{markedBlog.title}</h5>)
                }
            </div>
           </div>
           
        </div>
      </div>
    );
};

export default BookMark;