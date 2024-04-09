/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        light: "wiggle 3s linear infinite",
        highlight: "smash 1s ease-in infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        smash: {
          "0%": { color: "yellow" },
          // "50%": { transform: "scale(1.25,1.25)", color: "red" },
          "100%": { transform: "scale(1.5,1.5)", color: "violet" },
        },
      },
    },
  },
  plugins: [],
};
