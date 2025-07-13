'use client';

import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category}>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillCategory.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full text-sm shadow-sm hover:scale-105 transition-transform"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
