import React from 'react'

class PostPart extends React.Component {
    render() {
        return ({
            text: <p className="post-text">{this.props.content}</p>,
            youtube: <iframe className="post-video" {...this.props} src={"https://www.youtube.com/embed/" + this.props.embed} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }[this.props.type])
    }
}

export default PostPart