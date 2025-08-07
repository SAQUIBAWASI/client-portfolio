/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          dark: '#1D4ED8',    // blue-700
          light: '#93C5FD',   // blue-300
        },
        secondary: {
          DEFAULT: '#10B981', // emerald-500
          dark: '#059669',    // emerald-600
          light: '#6EE7B7',   // emerald-300
        },
        dark: {
          DEFAULT: '#111827', // gray-900
          light: '#1F2937',   // gray-800
          lighter: '#374151', // gray-700
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}