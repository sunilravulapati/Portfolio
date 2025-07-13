'use client';

import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  stack: string[];
  demo: string;
  code: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-xl border bg-white/90 dark:bg-gray-900 p-6 shadow-md hover:shadow-lg transition-all"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Live
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Code
        </a>
      </div>
    </motion.div>
  );
}
