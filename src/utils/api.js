import { mockPosts, mockNotifications, mockMessages, currentUser } from './mockData';

// Simulate API delay
const delay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

// API to fetch posts
export const fetchPosts = async () => {
    try {
        await delay();
        return {
            success: true,
            data: mockPosts
        };
    } catch (error) {
        return {
            success: false,
            error: 'Failed to fetch posts'
        };
    }
};

// API to fetch user profile
export const fetchUserProfile = async (userId) => {
    try {
        await delay(600);
        return {
            success: true,
            data: currentUser
        };
    } catch (error) {
        return {
            success: false,
            error: 'Failed to fetch user profile'
        };
    }
};

// API to fetch notifications
export const fetchNotifications = async () => {
    try {
        await delay(500);
        return {
            success: true,
            data: mockNotifications
        };
    } catch (error) {
        return {
            success: false,
            error: 'Failed to fetch notifications'
        };
    }
};

// API to fetch messages
export const fetchMessages = async () => {
    try {
        await delay(500);
        return {
            success: true,
            data: mockMessages
        };
    } catch (error) {
        return {
            success: false,
            error: 'Failed to fetch messages'
        };
    }
};
