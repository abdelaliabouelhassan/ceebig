/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4E46E5",
        green: "#06BD86",
        white: "#FFFFFF",
        stroke: "#D3D0FF",
        background: "#090909",
    },
    fontFamily: {
      markpro: ["Mark Pro", "sans-serif"],
      marcellus: ["Marcellus", "sans-serif"],
    }
  },
  },
  plugins: [],
}
