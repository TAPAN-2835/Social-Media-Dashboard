// Mock user data
export const mockUsers = [
  {
    id: 1,
    name: "Aarav Sharma",
    username: "@aarav_codes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav&backgroundColor=c0aede",
    bio: "Frontend Developer 🇮🇳 | React & Next.js Enthusiast ⚛️ | Building scalable web apps",
    followers: 1234,
    following: 567,
    posts: 89,
    verified: true
  },
  {
    id: 2,
    name: "Riya Patel",
    username: "@riya_designs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Riya&backgroundColor=b6e3f4",
    bio: "UI/UX Designer 🎨 | Creating empathy-driven digital experiences | Figma Wizard",
    followers: 2456,
    following: 432,
    posts: 156,
    verified: true
  },
  {
    id: 3,
    name: "Aditya Singh",
    username: "@adk_singh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya&backgroundColor=ffdfbf",
    bio: "Full Stack Engineer | Python & Django 🐍 | Open Source Contributor",
    followers: 987,
    following: 234,
    posts: 67,
    verified: false
  },
  {
    id: 4,
    name: "Priya Verma",
    username: "@priya_v",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffdfbf",
    bio: "Product Manager @ TechStart | Strategy & Growth 📈 | Coffee Lover ☕",
    followers: 5432,
    following: 890,
    posts: 234,
    verified: true
  },
  {
    id: 5,
    name: "Kunal Mehta",
    username: "@kunal_m",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal&backgroundColor=c0aede",
    bio: "AI/ML Researcher 🤖 | Exploring Deep Learning & NLP | Student at IIT",
    followers: 3456,
    following: 567,
    posts: 123,
    verified: true
  }
];

// Mock posts data
export const mockPosts = [
  {
    id: 1,
    author: mockUsers[0], // Aarav
    content: "Just shipped my first project using the MERN stack! 🚀 It's a task management dashboard. Learned so much about state management and API integration. #WebDev #React #MongoDB",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    likes: 234,
    comments: 45,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    liked: false
  },
  {
    id: 2,
    author: mockUsers[1], // Riya
    content: "Design tip: Always prioritize accessibility. High contrast ratios and proper spacing make a huge difference! 🎨✨ Here is a sneak peek of my latest UI kit.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&w=1200&q=80",
    likes: 567,
    comments: 89,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    liked: false
  },
  {
    id: 3,
    author: mockUsers[4], // Kunal
    content: "Attending the AI Summit in Bengaluru this weekend! Super excited to learn about the latest in Generative AI. Who else is going? 🤖🇮🇳",
    image: null,
    likes: 892,
    comments: 134,
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    liked: true
  },
  {
    id: 4,
    author: mockUsers[3], // Priya
    content: "Hiring Alert! 📢 We are looking for a Junior Frontend Developer to join our team. If you love keyframes and components, this is for you! DM me for details.",
    image: null,
    likes: 456,
    comments: 78,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
    liked: false
  },
  {
    id: 5,
    author: mockUsers[2], // Aditya
    content: "Finally solved that bug in my Django backend! 😅 Feels good to see all tests passing. Time for a chai break! ☕",
    image: null,
    likes: 123,
    comments: 23,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    liked: false
  },
  {
    id: 6,
    author: mockUsers[0], // Aarav
    content: "Started learing Next.js 14 today. Server Actions are a game changer! ⚛️",
    image: null,
    likes: 345,
    comments: 56,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    liked: true
  }
];

// Mock notifications data
export const mockNotifications = [
  {
    id: 1,
    type: "like",
    user: mockUsers[1], // Riya
    content: "liked your post",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 mins ago
    read: false,
    postId: 1
  },
  {
    id: 2,
    type: "comment",
    user: mockUsers[4], // Kunal
    content: "commented: 'Great work! Keep it up 🔥'",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    read: false,
    postId: 1
  },
  {
    id: 3,
    type: "follow",
    user: mockUsers[2], // Aditya
    content: "started following you",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    read: true
  },
  {
    id: 4,
    type: "like",
    user: mockUsers[3], // Priya
    content: "liked your post",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    read: true,
    postId: 6
  },
  {
    id: 5,
    type: "mention",
    user: mockUsers[1], // Riya
    content: "mentioned you in a comment",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    read: true
  }
];

// Mock messages data
export const mockMessages = [
  {
    id: 1,
    user: mockUsers[1], // Riya
    lastMessage: "Hey Aarav! loved your latest project.",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 mins ago
    unread: true
  },
  {
    id: 2,
    user: mockUsers[4], // Kunal
    lastMessage: "Are you going to the hackathon this weekend?",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    unread: true
  },
  {
    id: 3,
    user: mockUsers[2], // Aditya
    lastMessage: "Can you help me with this React hook issue?",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    unread: false
  },
  {
    id: 4,
    user: mockUsers[3], // Priya
    lastMessage: "Let's connect next week for the interview prep.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    unread: false
  }
];

// Get current user (mocked as the first user)
export const currentUser = mockUsers[0];
