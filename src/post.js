import React from 'react'
import PostText from './post_text'

class Post extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.post.title}</h1>
                <div>
                    {this.props.post.body.map((blog_item, index) => <PostText {...blog_item} key={this.props.post.title + index} />)}
                </div>
            </div>
        )
    }
}

export default Post