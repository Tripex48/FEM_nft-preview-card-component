/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      softblue: "#8bacda",
      cyan: "#00fff7",

      darkbluemain: "#0d192b",
      dardkbluecard: "#14253d",
      darkblueline: "#2f415b",
      white: "#ffffff",
      blue: "#3e52a3",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
