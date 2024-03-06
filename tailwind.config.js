/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      // #161824
      colors: {
        primary: "",
        secondary: "#7F886A",
        tertiary: "#978876",
        "black-100": "#242740",
        "black-200": "#B095B9",
        "white-100": "#F5CB8A",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #5E4B3A",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/LinenBackground.png')",
      },
    },
  },
  plugins: [],
};