import React from 'react'
import { render } from '@testing-library/react'
import Blog from './blog'
import { BrowserRouter as Router } from 'react-router-dom'

const blog = {
    name: 'test-name',
    description: 'test-description',
    posts: [{
        "id": "test-id",
        "title": "test-title",
        "timestamp": "1/1/2020",
    }]
}

test('renders blog name', () => {
    const { getByText } = render(<Router>
            <Blog blog={blog} />
    </Router>)
    const linkElement = getByText(/test-name/i)

    expect(linkElement).toBeInTheDocument()
});

test('renders blog description', () => {
    const { getByText } = render(<Router>
            <Blog blog={blog} />
    </Router>)
    const linkElement = getByText(/test-description/i)

    expect(linkElement).toBeInTheDocument()
});

test('renders blog post title', () => {
    const { getByText } = render(<Router>
            <Blog blog={blog} />
    </Router>)
    const linkElement = getByText(/test-title/i)

    expect(linkElement).toBeInTheDocument()
});

test('renders blog post timestamp', () => {
    const { getByText } = render(<Router>
            <Blog blog={blog} />
    </Router>)
    const linkElement = getByText(/test-title/i)

    expect(linkElement).toBeInTheDocument()
});