/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "touch-device": {
          raw: "(hover: none) and (pointer: coarse)",
        },
      },
      fontFamily: {
        niccone: ['"Niconne"', "Gill Sans"],
      },
      width: {
        screen: "100dvw",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
