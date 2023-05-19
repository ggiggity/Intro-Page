/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        window: "#008080",
        icon: "#010081",
      },
    },
  },
  plugins: [],
};
