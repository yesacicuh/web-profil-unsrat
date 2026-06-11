/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unsrat: {
          maroon: '#800000',
          dark: '#1a0000',
          light: '#b30000',
        },
        tech: {
          dark: '#0f172a',
          card: '#1e293b',
        }
      },
    },
  },
  plugins: [],
}