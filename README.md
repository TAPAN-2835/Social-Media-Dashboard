# Social Media Dashboard

A modern, responsive, and fully functional social media dashboard built with React.js using Vite. This project demonstrates professional frontend development practices including component-based architecture, state management, routing, and proper file structure.

<img width="1366" height="643" alt="image" src="https://github.com/user-attachments/assets/af2271b2-e4e2-4235-8ce9-e5689bb5f49d" />

<img width="1365" height="646" alt="image" src="https://github.com/user-attachments/assets/df7988e8-d488-4cbc-9454-a48699ba8781" />

## 🚀 Features

- **Component-Based Architecture**: Modular and reusable components (Buttons, Cards, Modals).
- **Responsive Design**: Fully responsive layout optimized for Desktop, Tablet, and Mobile.
- **Theme Support**: Real-time Light/Dark mode toggle with local storage persistence.
- **Interactions**: Like posts, simulated navigation, and comment UI.
- **Routing**: Client-side routing with React Router v6.
- **Mock API**: Simulated asynchronous data fetching for realistic loading states.
- **Clean Code**: CSS Modules for scoped styling and clean project structure.

## 🛠️ Tech Stack

- **React.js (Vite)**: Fast frontend tooling.
- **React Router DOM**: Client-side navigation.
- **CSS Modules**: Scoped and maintainable CSS.
- **Vitest & React Testing Library**: Component testing.

## 📂 Folder Structure

```
social-media-dashboard/
│── src/
│   ├── components/
│   │   ├── common/       # Reusable UI components (Button, Card, etc.)
│   │   ├── Header/       # App Header & Navigation
│   │   ├── Sidebar/      # App Sidebar
│   │   ├── Post/         # Post Item Component
│   │   ├── Profile/      # User Profile Component
│   │   ├── Notification/ # Notification Item
│   │   └── ...
│   ├── pages/            # Page components (Home, Profile, etc.)
│   ├── hooks/            # Custom Hooks (useLocalStorage)
│   ├── utils/            # Helpers and Mock Data
│   ├── styles/           # Global styles and variables
│   ├── App.jsx           # Main App Component
│   └── main.jsx          # Entry Point
│── tests/                # Unit Tests
└── public/               # Static Assets
```

## 📦 Installation

1. **Clone the repository** (or navigate to project folder):
   ```bash
   cd social-media-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Run tests**:
   ```bash
   npm run test
   ```

## 📸 Screenshots

- **Home Feed**: View posts from users.
- **Profile**: User stats and personal posts.
- **Dark Mode**: Toggle theme for better viewing experience.

## 🧠 Learning Outcomes

- Mastery of React Hooks (`useState`, `useEffect`).
- Implementing complex UI layouts with CSS Grid/Flexbox.
- Handling client-side routing and navigation state.
- Component testing strategies.

---

Built for Internship Task Assessment.

### 🎨 UI & UX Enhancements

This project has been upgraded with a premium, professional design system while strictly adhering to the internship requirements (No external UI libraries, no structure changes).

**Key Improvements:**
- **Design Philosophy**: Adopted a clean, content-first approach with a refined "Slate & Indigo" color palette, aiming for a modern dashboard aesthetic that feels trustworthy and expensive.
- **Glassmorphism Header**: Implemented a sticky header with backdrop-filter blur for a contemporary feel.
- **Micro-Interactions**: Added subtle scale effects on cards, smooth button hover states, and heart animations for likes to delight users.
- **Typography Hierarchy**: Switched to a robust scaling system using standardized font-sizes variables, ensuring excellent readability and visual balance.
- **CSS Architecture**: Refactored to a strict variable-based token system (CSS Custom Properties) for all colors, spacing, and shadows, ensuring consistency and easy theming (Dark Mode ready).
- **Responsive Layout**: Fine-tuned grid layouts for the sidebar and feed, ensuring the dashboard looks perfect on mobile, tablet, and desktop.
