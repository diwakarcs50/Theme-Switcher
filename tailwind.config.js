/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: `var(--bgColor)`,
        fontColor: `var(--fontColor)`,
        accent: `var(--accent)`,
        secondary: `var(--secondary)`,
      },
      fontFamily: {
        sans: `var(--font-sans)`,
        serif: `var(--font-serif)`,
        display: `var(--font-display)`,
      },
      spacing: {
        layout: `var(--spacing-layout)`,
      }
    },
  },
  plugins: [],
}