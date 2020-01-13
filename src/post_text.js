import React from 'react'

class PostText extends React.Component {
    render() {
        return (
            <p className='post-text'>{this.props.content}</p>
        )
    }
}

export default PostText