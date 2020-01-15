import * as serviceWorker from './serviceWorker';
import App from './App';
import HttpsRedirect from 'react-https-redirect';
import Post from './post';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { blog } from './resources/blog_posts.json';

const routing = (
    <HttpsRedirect disabled={process.env.NODE_ENV !== 'production'}>
        <Router>
            <div>
                <Route exact path="/" component={ props => <App {...props} blog={blog} /> } />
                <Route exact path="/post/:id" render={ props => <Post {...props} post={blog.posts.find(post => post.id === props.match.params.id)} /> } />
            </div>
        </Router>
    </HttpsRedirect>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
