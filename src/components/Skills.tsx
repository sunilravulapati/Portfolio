'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

// Category accent colors
const categoryColors: Record<string, string> = {
  Languages: '#a78bfa',
  'Cloud & Backend': '#34d399',
  Frontend: '#60a5fa',
  Tools: '#fb923c',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14 space-y-2">
        <p className="text-xs tracking-[0.3em] uppercase text-emerald-400 font-mono">What I Work With</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skillCategory, i) => {
          const accent = categoryColors[skillCategory.category] ?? '#3ef2d1';
          return (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 space-y-4 hover:border-white/20 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: accent }}
                />
                <h3
                  className="text-sm font-semibold tracking-wide uppercase"
                  style={{ color: accent }}
                >
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm text-white/70 border border-white/10 bg-white/5 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-150 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}