import React from 'react'
import PostText from './post_text'
import './post.css';

class Post extends React.Component {
    render() {
        return (
            <div>
                <div className='post-header'>
                    <h1>{this.props.post.title}</h1>
                </div>
                <div className='post-body'>
                    {this.props.post.body.map((blog_item, index) => <PostText {...blog_item} key={this.props.post.title + index} />)}
                </div>
            </div>
        )
    }
}

export default Post