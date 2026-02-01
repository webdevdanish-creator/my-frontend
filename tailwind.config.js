export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#343E54",   // blue-600
          light: "#343E54",     // blue-500
          dark: "#1e40af",      // blue-800
        },
        secondary: {
          DEFAULT: "#AE703A",   // green-600
          light: "#AE703A",     // green-500
          dark: "#15803d",      // green-700
        },
        accent: {
          DEFAULT: "#AE703A",   // blue-600
          light: "#AE703A",     // blue-500
          dark: "#1e40af",      // blue-800
        },
        secondary: {
          DEFAULT: "#343E54",   // green-600
          light: "#343E54",     // green-500
          dark: "#15803d",      // green-700
        },
        second: {
          DEFAULT: "#827191",   // green-600
          light: "#827191",     // green-500
          dark: "#15803d",      // green-700
        },
      },
    },
  },
  plugins: [],
}
