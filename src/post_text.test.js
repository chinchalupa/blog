import React from 'react'
import { render } from '@testing-library/react'
import PostText from './post_text'

const content = "test-content"

test('renders post title', () => {
    const { getByText } = render(<PostText content={content} />)
    const linkElement = getByText(/test-content/i)

    expect(linkElement).toBeInTheDocument()
});