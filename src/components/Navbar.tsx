'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300"
        >
          Sunil Ravulapati
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 py-4 shadow-lg backdrop-blur-md">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-200 hover:text-blue-400 text-lg font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
