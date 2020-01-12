import React from 'react'
import { render } from '@testing-library/react'
import Post from './post'

const post = {
    title: 'test-title',
    body: [{
        type: "text",
        content: "test-content"
    }]
}

test('renders post title', () => {
    const { getByText } = render(<Post post={post} />)
    const linkElement = getByText(/test-title/i)

    expect(linkElement).toBeInTheDocument()
});

test('renders post title', () => {
    const { getByText } = render(<Post post={post} />)
    const linkElement = getByText(/test-content/i)

    expect(linkElement).toBeInTheDocument()
});