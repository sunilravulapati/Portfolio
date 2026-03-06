'use client';

import { useEffect, useState } from 'react';

const roles = [
  'Full-Stack Developer',
  'AI & ML Enthusiast',
  'Frontend Specialist',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white px-6 overflow-hidden">

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        {/* Eyebrow label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-white/70 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          <span className="block text-white/90">Hey, I'm</span>
          <span
            className="block mt-1"
            style={{
              background: 'linear-gradient(135deg, #3ef2d1 0%, #4a90e2 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Sunil Ravulapati
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-lg md:text-xl text-white/60 font-mono">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-emerald-400 ml-0.5 opacity-100 animate-pulse" />
          </p>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
          B.Tech CS @ Anurag University · CGPA 9.05 · Top 1.3% Amazon ML Challenge
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide text-black transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            style={{ background: 'linear-gradient(135deg, #3ef2d1, #4a90e2)' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 pt-6 text-center">
          {[
            { value: '760+', label: 'CodeChef Problems' },
            { value: '400+', label: 'LeetCode Solved' },
            { value: '9.05', label: 'CGPA' },
          ].map(({ value, label }) => (
            <div key={label} className="space-y-1">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="text-xs text-white/40 tracking-wide uppercase">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs tracking-widest uppercase animate-bounce">
        <span>Scroll</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 1v10M1 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </section>
  );
}