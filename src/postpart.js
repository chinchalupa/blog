import React from 'react'

class PostPart extends React.Component {
    render() {
        return ({
            text: <p className="post-text">{this.props.content}</p>,
            youtube: <iframe className="post-video" {...this.props} title={this.props.embed} src={"https://www.youtube.com/embed/" + this.props.embed} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        }[this.props.type])
    }
}

export default PostPart