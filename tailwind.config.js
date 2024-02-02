/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'dark-navy': '#020c1b',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2,12,27,0.7)',
        'dark-slate': '#495670',
        'slate': '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'white': '#e6f1ff',
        'green': '#a2a6a8',
        'green-tint': 'rgba(100,255,218,0.1)',
        'pink': '#f57dff',
        'blue': '#57cbff',
      }
    },
  },
  plugins: [],
}

