import React from 'react'
import { Link } from 'react-router-dom';
import './blog.css';

class Blog extends React.Component {
    render() {
        const { blog } = this.props

        return (
            <div>
                <div className='blog-header'>
                    <div className='blog-name-container'>
                        <h1 className='blog-name'>{blog.name}</h1>
                    </div>
                    <p className='blog-description'>{blog.description}</p>
                </div>
                <div>
                    <ul className='blog-post-list'>
                        { blog.posts.map( blogpost => <li className='blog-post-list-item' key={blogpost.id}>
                                <span className='blog-post-timestamp'>{blogpost.timestamp}</span>
                                <Link to={"/blog/post/" + blogpost.id} className='blog-post-link'>{blogpost.title}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Blog