export const aboutContent = {
  introText: {
    notice: {
      id: "intro-notice",
      text: "Welcome to my demo blog platform! This project serves as a showcase of modern web development practices and technologies. It's designed to demonstrate a fully functional blogging system with user authentication, real-time updates, and responsive design.",
    },
    paragraphs: [
      {
        id: "intro-1",
        text: "This demo allows you to experience the full functionality of a modern blog platform. You can sign up using your Google account or email, create and manage posts, and interact with the platform's features in real-time.",
      },
      {
        id: "intro-2",
        text: "The application is built with React and implements industry best practices for state management, form handling, and backend integration. It features a clean, modern UI with smooth animations and a responsive design that works seamlessly across all devices.",
      },
    ],
  },
  technologies: [
    {
      id: "tech-core",
      title: "Core Technologies",
      items: [
        { id: "core-1", text: "React 18 with Hooks" },
        { id: "core-2", text: "Vite for fast development" },
        { id: "core-3", text: "React Router DOM v6 for routing" },
        { id: "core-4", text: "TanStack Query v5 for data fetching" },
        { id: "core-5", text: "Zustand for state management" },
      ],
    },
    {
      id: "tech-backend",
      title: "Backend & Authentication",
      items: [
        { id: "backend-1", text: "Firebase v11 Authentication" },
        { id: "backend-2", text: "Firestore Database" },
        { id: "backend-3", text: "Google Sign-in Integration" },
        { id: "backend-4", text: "Email/Password Authentication" },
        { id: "backend-5", text: "Protected Routes" },
      ],
    },
    {
      id: "tech-form",
      title: "Form Management & Validation",
      items: [
        { id: "form-1", text: "React Hook Form v7" },
        { id: "form-2", text: "Yup Schema Validation" },
        { id: "form-3", text: "Custom Form Hooks" },
        { id: "form-4", text: "Real-time Validation" },
        { id: "form-5", text: "Error Handling" },
      ],
    },
    {
      id: "tech-ui",
      title: "UI/UX Features",
      items: [
        { id: "ui-1", text: "Custom CSS Animations" },
        { id: "ui-2", text: "Responsive Design" },
        { id: "ui-3", text: "CSS Modules" },
        { id: "ui-4", text: "Modal System" },
        { id: "ui-5", text: "Toast Notifications" },
        { id: "ui-6", text: "Custom Icons" },
        { id: "ui-7", text: "Responsive Layout" },
      ],
    },
    {
      id: "tech-dev",
      title: "Development Tools",
      items: [
        { id: "dev-1", text: "Environment Variables" },
        { id: "dev-2", text: "Custom Hooks" },
        { id: "dev-3", text: "Component Organization" },
        { id: "dev-4", text: "Code Splitting" },
      ],
    },
  ],
};

export const contactInputs = [
  {
    type: "text",
    placeholder: "Full Name",
    name: "fullName",
    autoComplete: "name",
  },
  {
    type: "email",
    placeholder: "Email Address",
    name: "email",
    autoComplete: "email",
  },
  {
    type: "textarea",
    placeholder: "Your Message",
    name: "message",
  },
];
