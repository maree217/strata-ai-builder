/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#1e3a5f',
          teal: '#00a3a6',
          tealDark: '#008587',
          amber: '#f59e0b',
          red: '#dc2626',
          green: '#16a34a',
          text: '#0b0c0c',
          secondary: '#505a5f',
          border: '#b1b4b6',
          light: '#f3f2f1'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
