/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scans all React source files
  ],
  theme: {
    extend: {
      colors: {
        highviewBlue: {
          DEFAULT: '#1E40AF',  // main blue (like Tailwind's blue-800)
          light: '#3B82F6',    // lighter blue for hover states or accents
          dark: '#1E3A8A',     // darker blue for text or backgrounds
        },
        highviewGray: {
          light: '#F3F4F6',    // light gray backgrounds
          DEFAULT: '#6B7280',  // medium gray text
          dark: '#374151',     // dark gray for headers
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // ensure Inter is used consistently
      },
    },
  },
  plugins: [],
}