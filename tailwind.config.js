/** @type {import('tailwindcss').Config} */
export default {
  // This array tells Tailwind which files to scan for class names.
  // It's essential for generating the correct CSS.
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Here we define all the custom colors used in the component.
      // This allows you to use class names like `bg-dark-blue-primary`.
      colors: {
        'dark-blue-primary': '#010F36',
        'dark-blue-secondary': '#011652',
        'dark-blue-accent': '#002178',
        // Existing colors from the component are added here to ensure they are recognized by Tailwind.
        'teal-400': '#2dd4bf',
        'cyan-400': '#22d3ee',
        'emerald-400': '#34d399',
        'teal-600': '#0d9488',
        'cyan-600': '#0891b2',
        'teal-900': '#042f2e',
        'cyan-800': '#0f4852',
        'emerald-900': '#062f22',
        'teal-800': '#0e5e54',
        'teal-500': '#14b8a6',
        'cyan-300': '#67e8f9',
        'gray-200': '#e5e7eb',
        'teal-200': '#99f6e4',
        'gray-300': '#d1d5db',
        'teal-700': '#0f766e',
        'teal-500/30': 'rgba(20, 184, 166, 0.3)',
      },
    },
  },
  plugins: [],
};
