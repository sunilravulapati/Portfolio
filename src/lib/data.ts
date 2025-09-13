import { desc } from "framer-motion/client";

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask', 'Django', 'FastAPI', 'Firebase', 'MongoDB', 'NextAuth.js'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'VS Code', 'Figma'],
  },
];

export const projects = [
  {
    title: 'PrepGenie - Tech Interview Helper',
    description:
      'A web app that generates personalized interview prep material, coding challenges, and progress tracking to help students practice effectively.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'MongoDB'],
    demo: 'https://prep-genie-one.vercel.app/',
    code: 'https://github.com/sunilravulapati/PrepGenie',
  },
  {
    title: 'Urban Ally - Google Maps Submission',
    description:
      'Nominated project for the Google Maps Platform Awards (earlier named NavSecure). Provides optimized routes, nearby services, accessibility features, and real-time navigation with Firebase backend.',
    stack: ['React', 'Vite', 'Firebase', 'Google Maps API'],
    demo: 'https://urban-ally.vercel.app/',
    code: 'https://github.com/sunilravulapati/Urban-Ally',
  },
  {
    title: 'TrendWise - AI Blog Generator',
    description:
      'A full-stack SEO-optimized blog platform using Next.js, OpenAI, and MongoDB. Includes trending topic crawler, blog writer, authentication, and commenting.',
    stack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'OpenAI API', 'NextAuth.js'],
    code: 'https://github.com/sunilravulapati/TrendWise',
  },
  {
    title: 'PostureTrack - Real-Time AI Posture Detection',
    description:
      'A full-stack app using MediaPipe and FastAPI to analyze posture via webcam or video upload with frame-by-frame feedback or AI summary.',
    stack: ['React', 'FastAPI', 'MediaPipe', 'Framer Motion'],
    demo: 'https://new-posture-frontend.onrender.com/',
    code: 'https://github.com/sunilravulapati/Bad-Posture-Detection',
  },
  {
    title: 'FeedScope – Multilingual Feedback Analyzer',
    description:
      'Built an AI-based multilingual feedback analyzer to extract sentiments, issues, and trends from customer reviews without using LLMs. Designed with Streamlit frontend and custom-trained models for language detection and sentiment classification.',
    stack: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    demo: 'https://drive.google.com/file/d/1lcCKkNEA_R4qSRTsx09kvjcfoo9fqgmY/view?usp=sharing',
    code: 'https://github.com/sunilravulapati/Multi-Lingual-Customer-Feedback',
  },
  {
    title: 'AI Flashcard App',
    description:
      'Python-based app that generates flashcards from text using OpenAI and Flask. Includes interactive UI and learning progress tracker.',
    stack: ['Python', 'Flask', 'JavaScript', 'OpenAI'],
    code: 'https://github.com/sunilravulapati/AI-FLASH-CARD',
  },
  {
    title: 'Endurosync - Productivity Tracker',
    description:
      'All-in-one daily productivity tracker with AI assistant, heatmaps, streaks, journal, and motivational tasks.',
    stack: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
    demo: 'https://drive.google.com/file/d/1KS0FeHOF1eeoNxkm_pgTywIWfGB4Y2ig/view?usp=sharing',
    code: 'https://github.com/sunilravulapati/Endurosync',
  },
];
