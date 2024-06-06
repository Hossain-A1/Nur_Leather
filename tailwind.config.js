/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: "#333333",
        light: "#FFFFFF",
        blue: "#5356FF",
        green: "#10AD2E",
        danger: "#E72929",
        orange: "#FF7A3D",
        red: "#E62E04",
      },
    },
  },
  plugins: [],
};
