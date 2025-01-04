/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["Aula/*.html", "Aula/js/*.js",],
  theme: {
    extend: {
      keyframes: {
        "goUp-RG": {
          "0%": { transform: "translate(-50%, 0%)" },
          "50%": { transform: "translate(-50%, -80%)" },
        },
        "goUp-money": {
          "0%": { transform: "translate(-50%, 0%)" },
          "50%": { transform: "translate(-50%, -50%)" },
        },
        "goUp-text": {
          "0%": { transform: "translate(0%, -100%)" },
          "50%": { transform: "translate(0%, -350%)" },
        },
        "goDown-wallet": {
          "0%": { transform: "translate(0%, -25.33%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
      },
    },
    fontFamily: {
      'avenir': ['Avenir', 'sans-serif'],
      'avenir_heavy': ['Avenir Heavy', 'sans-serif'],
    }
  },
  plugins: [],
}

