import React from 'react';
import "./Blog.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookBookmark, faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Blog = (props) => {
    const { id, title, author_img, author_name, cover, published_date, read_time, } = props.blog
    const handleBookmark = props.handleBookmark;


    return (
        <div className='blog'>
            <img src={cover} alt="Cover image" />

            <div className="blog-info">
                <div className="author-info">
                    <img src={author_img} alt="Author image" />
                    <div>
                        <h4>{author_name}</h4>
                        <span>{published_date}</span>
                    </div>
                </div>

                <div className='read-info'>
                    <span>{read_time} min read </span>
                    <button onClick={() => handleBookmark(title)} className='bookMarkBtn'><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>

            <h2>{title}</h2>

            <span className='tags'>#beginners</span> <span className='tags'>#programming</span>
            <div onClick={() => handleMarkRead(read_time)} className='read-btn'>
                <a href="#">Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;