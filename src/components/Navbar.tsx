'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Shrink navbar on scroll + track active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is in view
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(8, 11, 16, 0.85)'
          : 'rgba(8, 11, 16, 0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-white tracking-tight text-lg hover:opacity-80 transition-opacity duration-150"
          style={{ fontFamily: 'SF Mono, Fira Code, monospace' }}
        >
          SR<span style={{ color: '#3ef2d1' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150"
                style={{
                  color: isActive ? '#3ef2d1' : 'rgba(255,255,255,0.55)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.9)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
                }}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(62,242,209,0.08)' }}
                  />
                )}
                <span className="relative">{link.name}</span>
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#3ef2d1' }}
                  />
                )}
              </Link>
            );
          })}

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 hover:scale-105"
            style={{
              border: '1px solid rgba(62,242,209,0.4)',
              color: '#3ef2d1',
              background: 'rgba(62,242,209,0.07)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(62,242,209,0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(62,242,209,0.07)';
            }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg focus:outline-none"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          aria-label="Toggle menu"
        >
          <span
            className="block h-px w-5 rounded-full transition-all duration-300 origin-center"
            style={{
              background: 'rgba(255,255,255,0.8)',
              transform: isMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
            }}
          />
          <span
            className="block h-px w-5 rounded-full transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.8)',
              opacity: isMenuOpen ? 0 : 1,
              transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            className="block h-px w-5 rounded-full transition-all duration-300 origin-center"
            style={{
              background: 'rgba(255,255,255,0.8)',
              transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isMenuOpen ? '320px' : '0px',
          borderTop: isMenuOpen ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1" style={{ background: 'rgba(8,11,16,0.95)' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150"
                style={{
                  color: isActive ? '#3ef2d1' : 'rgba(255,255,255,0.6)',
                  background: isActive ? 'rgba(62,242,209,0.08)' : 'transparent',
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center"
            style={{
              border: '1px solid rgba(62,242,209,0.3)',
              color: '#3ef2d1',
              background: 'rgba(62,242,209,0.06)',
            }}
          >
            Download Resume ↗
          </a>
        </div>
      </div>
    </nav>
  );
}