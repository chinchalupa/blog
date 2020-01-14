import React from 'react'
import { render } from '@testing-library/react'
import Post from './post'
import { BrowserRouter as Router } from 'react-router-dom'

const post = {
    title: 'test-title',
    body: [{
        type: "text",
        content: "test-content"
    }]
}

test('renders post title', () => {
    const { getByText } = render(<Router><Post post={post} /></Router>)
    const linkElement = getByText(/test-title/i)

    expect(linkElement).toBeInTheDocument()
});

test('renders post title', () => {
    const { getByText } = render(<Router><Post post={post} /></Router>)
    const linkElement = getByText(/test-content/i)

    expect(linkElement).toBeInTheDocument()
});