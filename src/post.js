import React from 'react'
import PostPart from './post_part'
import './post.css';

class Post extends React.Component {
    render() {
        return (
            <div>
                <div className='post-header'>
                    <div className='post-header-text'>
                        <h1>{this.props.post.title}</h1>
                    </div>
                </div>
                <div className='post-body'>
                    {this.props.post.body.map((post_part, index) => <PostPart {...post_part} key={this.props.post.title + index} />)}
                </div>
            </div>
        )
    }
}

export default Post