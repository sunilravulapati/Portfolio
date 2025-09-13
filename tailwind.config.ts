// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Tell Tailwind where to look for your CSS classes
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Catches everything in src/
    './app/**/*.{js,ts,jsx,tsx,mdx}', // If you have files directly in app/
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // If you are using the pages router
    './components/**/*.{js,ts,jsx,tsx,mdx}', // If you have components directly in project root
  ],
  darkMode: 'class', // <--- for next-themes
  theme: {
    extend: {
      // Custom text shadows
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.7)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.7)',
        blue: '0 0 8px rgba(0, 170, 255, 0.5)',
      },
    },
  },
  plugins: [
    // Custom text-shadow plugin
    function ({
      addUtilities,
      theme,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        variants?: string[]
      ) => void;
      theme: (path: string) => any;
    }) {
      const newUtilities = {
        '.text-shadow-sm': { textShadow: theme('textShadow.sm') },
        '.text-shadow-md': { textShadow: theme('textShadow.md') },
        '.text-shadow-lg': { textShadow: theme('textShadow.lg') },
        '.text-shadow-blue': { textShadow: theme('textShadow.blue') },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

export default config;
