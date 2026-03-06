export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'C'], // Moved Java & C++ up [cite: 43]
  },
  {
    category: 'Frontend',
    items: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'Recharts', 'Three.js'], // Added Recharts [cite: 44]
  },
  {
    category: 'Backend & Security', // Renamed for better impact
    items: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Firebase', 'NextAuth.js', 'Ollama'], // Added Ollama [cite: 45]
  },
  {
    category: 'Cloud & Tools',
    items: ['AWS (Certified Foundations)', 'Git', 'Docker', 'Vercel', 'Postman', 'MediaPipe', 'OpenCV'], // Added AWS
  },
];

export const projects = [
  {
    title: 'Aegis AI - Full-Stack SOC Dashboard',
    description:
      'A comprehensive Security Operations Center (SOC) dashboard designed for real-time threat monitoring and system health visualization using the MERN stack.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    demo: 'https://aegis-ai-sandy.vercel.app/',
    code: 'https://github.com/sunilravulapati/Aegis-AI',
  },
  {
    title: 'ProsperOS - Personal Finance OS',
    description:
      'A privacy-first financial operating system integrating local LLMs (Llama 3) for secure investment strategies, Net Worth tracking, and debt analysis.',
    stack: ['React', 'Recharts', 'Ollama', 'Tailwind CSS', 'Local LLM'],
    demo: 'https://smart-spending-ai.vercel.app/',
    code: 'https://github.com/sunilravulapati/ProsperOS', // Ensure this repo name matches yours [cite: 19]
  },
  {
    title: 'Urban Ally - Google Maps Platform Nominee',
    description:
      'Award-nominated navigation platform focusing on urban accessibility. Built for the Google Maps Platform Challenge to provide real-time, inclusive routing.',
    stack: ['React', 'Firebase', 'Google Maps API', 'Vite'],
    demo: 'https://urban-ally.vercel.app/',
    code: 'https://github.com/sunilravulapati/Urban-Ally',
  },
  {
    title: 'PrepGenie - Tech Interview Platform',
    description:
      'An AI-powered preparation suite that generates custom coding challenges and interview materials based on specific job descriptions.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'MongoDB'],
    demo: 'https://prep-genie-one.vercel.app/',
    code: 'https://github.com/sunilravulapati/PrepGenie',
  },
  {
    title: 'PostureTrack - Real-Time AI Detection',
    description:
      'Advanced computer vision application using MediaPipe and FastAPI to analyze and correct body posture via real-time webcam streaming.',
    stack: ['React', 'FastAPI', 'MediaPipe', 'Framer Motion'],
    demo: 'https://new-posture-frontend.onrender.com/',
    code: 'https://github.com/sunilravulapati/Bad-Posture-Detection',
  },
  {
    title: 'SR Sports - Headless E-Commerce',
    description:
      'Production-ready e-commerce platform for a cricket sports business. Features headless CMS architecture and optimized Core Web Vitals (95+ Lighthouse).',
    stack: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    demo: 'https://sr-sports-official.vercel.app/',
    code: 'https://github.com/sunilravulapati/SR-Sports',
  },
];