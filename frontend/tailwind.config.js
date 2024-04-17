/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    colors: {
      primary: "#00AEEF",
      secondary: "#41B883",
      accent: "#FF7F0F",
      background: "#FFFFFF",
      text: "#333333",
      error: "#FF4136",
      neutral: "#F5F5F5",
      dotsGrey: "#9CA3AF"
    },
    screens: {
      'sm': '200px',
      // => @media (min-width: 200px) { ... }
      'md': '600px',

      'lg': '1024px'
    },
  },
  plugins: [],
};
