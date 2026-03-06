'use client';

import Reveal from './Reveal';

const highlights = [
  { icon: '🏆', label: 'Amazon ML Challenge', value: 'Top 1.3%', sub: 'out of 82,794 teams' },
  { icon: '☁️', label: 'AWS Certified', value: 'Cloud Foundations', sub: 'Academy Graduate' },
  { icon: '💻', label: 'Competitive Programming', value: '1160+ Problems', sub: 'CodeChef + LeetCode' },
  { icon: '⭐', label: 'DSA Elite 25', value: 'Top 25', sub: 'Suntek DSA Evaluation' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <Reveal>
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
          {/* Glass background */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0" />

          <div className="relative z-10 p-8 md:p-12 space-y-10 text-white">
            {/* Header */}
            <div className="space-y-2">
              <p className="text-xs tracking-[0.3em] uppercase text-emerald-400 font-mono">About Me</p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Building at the intersection of{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3ef2d1, #4a90e2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  code & creativity
                </span>
              </h2>
            </div>

            {/* Bio */}
            <div className="grid md:grid-cols-2 gap-8 text-white/70 text-base leading-relaxed">
              <p>
                I'm <strong className="text-white">Sunil Ravulapati</strong>, a Computer Science student at Anurag University (CGPA: 9.19) with a passion for building full-stack applications that are fast, intelligent, and beautifully designed.
              </p>
              <p>
                My interests span <strong className="text-white">AI & ML</strong>, <strong className="text-white">Cybersecurity</strong>, and <strong className="text-white">Data Science</strong>. I've interned virtually at <strong className="text-white">Walmart Global Tech</strong> and <strong className="text-white">J.P. Morgan Chase</strong>, shipping real features in both.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map(({ icon, label, value, sub }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-1 hover:border-emerald-400/40 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="text-2xl">{icon}</div>
                  <div className="text-white font-bold text-sm">{value}</div>
                  <div className="text-white/40 text-xs leading-tight">{sub}</div>
                  <div className="text-white/30 text-xs">{label}</div>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'LinkedIn', href: '#' },
                { label: 'GitHub', href: '#' },
                { label: 'Resume', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-all duration-150"
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}