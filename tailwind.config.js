/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fe5b5f',
        secondary: "#b0b0b1",
        background: "#fefeff",
        primaryText: "#352f3b",
        secondaryText: "#b0b0b1",
      },
    },
  },
  plugins: [],
}

