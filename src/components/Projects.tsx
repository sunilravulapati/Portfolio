import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
