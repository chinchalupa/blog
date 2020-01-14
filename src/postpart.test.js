import React from 'react'
import { render } from '@testing-library/react'
import PostPart from './postpart'

test('renders the text', () => {
    const part = {
        type: "text",
        content: "test-content"
    }
    const { getByText } = render(<PostPart {...part}/>)
    const linkElement = getByText(/test-content/i)

    expect(linkElement).toBeInTheDocument()
});

test('renders youtube', () => {
    const part = {
        type: "youtube",
        embed: "test-embed"
    }
    const { getByTitle } = render(<PostPart {...part}/>)
    const linkElement = getByTitle(/test-embed/i)

    expect(linkElement).toBeInTheDocument()
});