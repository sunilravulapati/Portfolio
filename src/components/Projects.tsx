'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

// Map of project titles to accent colors
const accentMap: Record<string, string> = {
  'Aegis AI': '#f87171',       // red — security/SOC vibe
  'ProsperOS': '#34d399',      // green — finance
  'Urban Ally': '#60a5fa',     // blue — maps/navigation
  'SR Sports': '#fb923c',      // orange — sports/commerce
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14 space-y-2">
        <p className="text-xs tracking-[0.3em] uppercase text-emerald-400 font-mono">What I've Built</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => {
          const accent = accentMap[project.title] ?? '#3ef2d1';
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 hover:border-white/25 transition-all duration-300 flex flex-col"
              style={{ '--accent': accent } as React.CSSProperties}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
              />

              {/* Title & recognition badge */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-200">
                  {project.title}
                </h3>
                {project.title === 'Urban Ally' && (
                  <span className="text-xs px-2 py-0.5 rounded-full border border-yellow-400/30 text-yellow-400 bg-yellow-400/10 whitespace-nowrap ml-2">
                    🏆 Google Maps Nominee
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-white/55 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/50 bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
                    style={{ color: accent }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white/70 transition-colors duration-150"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    Source
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}