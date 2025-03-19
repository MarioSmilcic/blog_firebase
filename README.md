# Firebase Blog App

A modern blog platform built with React and Firebase. Share your thoughts with the world!

![Blog App Screenshot](/src/assets/blogTeaser.png)

## Features

- **User Authentication** - Email/password and Google sign-in
- **Blog Posts** - Create, read, update, and delete your posts
- **Modern UI** - Responsive design with smooth animations
- **Notifications** - Instant feedback for user actions

## Tech Stack

- React 18 with Hooks
- React Router & React Query
- Zustand for state management
- Firebase Authentication & Firestore
- Vite for fast development

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Firebase account

### Installation

1. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/MarioSmilcic/blog_firebase.git
   cd blog_firebase
   npm install
   ```

2. Create a `.env` file with your Firebase config:

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

   **Note:** Need to test the app? Contact me for a demo version with pre-configured Firebase settings!

3. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Setup

If you need to set up your own Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password and Google)
4. Create a Firestore database
5. Register a web app to get your config values

## Main Features

- User registration and login
- Create and manage blog posts
- Protected routes for authenticated users
- Responsive design for all devices
- Real-time updates with Firestore

## Contact

Have questions? Reach out!

- GitHub: [MarioSmilcic](https://github.com/MarioSmilcic)
- LinkedIn: [Mario Smilčić](https://www.linkedin.com/in/mario-smil%C4%8Di%C4%87-7ba32422b/)

---

Made by Mario Smilcic
