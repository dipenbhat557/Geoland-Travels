/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll 10s linear infinite",
        scrolled: "scrolled 10s infinite linear",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 2))" },
        },
        scrolled: {
          "0%": { transform: "translateX(calc(-250px * 2))" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        primary: "#06905E",
      },
    },
  },
  plugins: [],
};
