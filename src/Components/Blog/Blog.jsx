import React from 'react';
import "./Blog.css"

const Blog = (props) => {
    const {id, title, author_img, author_name, cover, published_date, read_time} = props.blog
    console.log(props.blog);
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

                <span>{read_time} min read</span>
            </div>

            <h2>{title}</h2>
            <a href="#">Mark as read</a>
        </div>
    );
};

export default Blog;