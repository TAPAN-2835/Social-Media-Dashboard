import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Post from '../src/components/Post/Post';
import { mockPosts } from '../src/utils/mockData';

describe('Post Component', () => {
    const mockPost = mockPosts[0];

    it('renders post content correctly', () => {
        render(<Post post={mockPost} />);

        expect(screen.getByText(mockPost.author.name)).toBeInTheDocument();
        expect(screen.getByText(mockPost.content)).toBeInTheDocument();
    });

    it('renders like count correctly', () => {
        render(<Post post={mockPost} />);
        // Check if the like count is present (might be inside button)
        expect(screen.getByText(mockPost.likes.toString())).toBeInTheDocument();
    });

    it('toggles like state on click', () => {
        render(<Post post={mockPost} />);

        const likeButton = screen.getByLabelText(/like post/i);
        const initialLikes = mockPost.likes;

        // Click like
        fireEvent.click(likeButton);

        // Expect like count to change (either +1 or -1 depending on initial state)
        // Since mock data logic is handled inside component state
        const newLikes = mockPost.liked ? initialLikes - 1 : initialLikes + 1;
        expect(screen.getByText(newLikes.toString())).toBeInTheDocument();
    });
});
