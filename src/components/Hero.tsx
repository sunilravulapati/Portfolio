'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center text-white relative px-6">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hey, I’m{' '}
          <span style={{ color: '#3ef2d1' }}>
            <Typewriter
              words={['Sunil Ravulapati']}
              cursor
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <span className="sr-only">Sunil Ravulapati</span>
          </span>
        </h1>

        <p className="text-xl max-w-2xl mx-auto">
          Full-Stack Developer | AI & Frontend Specialist  <br />
          Building intelligent, scalable solutions with clean UIs and strong problem-solving.

        </p>
      </div>
    </section>
  );
}
