/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      primary: "#100A42",
      secondary: "#f8e7eb",
      grey: "#928FAB",
      grey2: "#434343",
      lightGrey: "#DFE1E5",
      darkGreyStroke: "#626262",
      greyStroke: "#B9C2C8",
      gray: "#f4f6f9",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },

    screens: {
      xs: "350px",
      // => @media (min-width: 360px) { ... }

      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
