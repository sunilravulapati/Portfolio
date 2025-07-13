import { Github, Linkedin } from 'lucide-react';
import { FaCode } from 'react-icons/fa'; // Optional: for LeetCode icon

export default function Footer() {
  return (
    <footer className="py-6 text-center border-t mt-10">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://github.com/sunilravulapati" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://linkedin.com/in/sunil-ravulapati-9b328a314/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://leetcode.com/u/sunilravulapati/" target="_blank" rel="noopener noreferrer">
          <FaCode className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sunil Ravulapati. Built with ❤️ using Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
