// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {}, // <--- This tells PostCSS to use Tailwind
    autoprefixer: {}, // <--- This adds browser prefixes for compatibility
  },
};