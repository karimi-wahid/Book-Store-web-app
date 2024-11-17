/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        triple: 'var(--triple-color)',
        grayLight: 'var(--gray-light)',
        white: 'var(--white-color)', 
      }
    },
  },
  plugins: [],
}
