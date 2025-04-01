/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerText: "rgba(0, 0, 0, 0.37)",
        switcher: "rgba(120, 120, 128, 0.16)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        onest: ["Onest"]
      }
    },
  },
  plugins: [],
}

