/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 5s ease-in-out",
        light: "wiggle 3s linear infinite",
        highlight: "smash 1s ease-in infinite",
      },

      keyframes: {
        fadeOut: {
          "0%": { backgroundColor: "colors.red.300" },
          "100%": { backgroundColor: "colors.transparent" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        smash: {
          "0%": { color: "yellow" },
          // "50%": { transform: "scale(1.25,1.25)", color: "red" },
          "100%": { transform: "scale(1.5,1.5)", color: "violet" },
        },
        changecolor: {
          "0%": { color: "red" },
          "25%": { color: "yellow" },
          "50%": { color: "orange" },
          "75%": { color: "blue" },
          "100%": { color: "green" },
        },
        shake: {
          from: {
            color: "white",
          },
          to: {
            color: "red",
          },
          "0%": {
            transform: "translate(1px, 1px) rotate(0deg)",
          },
          "10%": {
            transform: "translate(-1px, -2px) rotate(-1deg)",
          },
          "20%": {
            transform: "translate(-3px, 0px) rotate(1deg)",
          },
          "30%": {
            transform: "translate(3px, 2px) rotate(0deg)",
          },
          "40%": {
            transform: "translate(1px, -1px) rotate(1deg)",
          },
          "50%": {
            transform: "translate(-1px, 2px) rotate(-1deg)",
          },
          "60%": {
            transform: "translate(-3px, 1px) rotate(0deg)",
          },
          "70%": {
            transform: "translate(3px, 1px) rotate(-1deg)",
          },
          "80%": {
            transform: "translate(-1px, -1px) rotate(1deg)",
          },
          "90%": {
            transform: "translate(1px, 2px) rotate(0deg)",
          },
          "100%": {
            transform: "translate(1px, -2px) rotate(-1deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
