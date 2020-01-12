import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Blog from './blog';
import Post from './post';
import * as serviceWorker from './serviceWorker';
import { blog } from './resources/blog_posts.json'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/blog" render={ props => <Blog {...props} blog={blog} /> } />
            <Route exact path="/blog/post/:id" render={ props => <Post {...props} post={blog.posts.find(post => post.id === props.match.params.id)} /> } />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
