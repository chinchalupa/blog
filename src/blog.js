import React from 'react'
import { Link } from 'react-router-dom';

class Blog extends React.Component {
    render() {
        const { blog } = this.props

        return (
            <div>
                <h1>{blog.name}</h1>
                <p>{blog.description}</p>
                <div>
                    <ul>
                        { blog.posts.map( blogpost => <li key={blogpost.id}>
                                <span>{blogpost.timestamp}</span>
                                <Link to={"/blog/post/" + blogpost.id}>{blogpost.title}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Blog