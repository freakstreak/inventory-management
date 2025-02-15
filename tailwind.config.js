/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          primary: "#C5C5C6",
          secondary: "#363638",
          tertiary: "#212124",
          700: "#3E413C",
          800: "#282B27",
          900: "#161718",
        },
        green: {
          300: "#367B22",
          100: "#7C8945",
          primary: "#243325",
          secondary: "#CBE94F",
        },
        purple: {
          primary: "#C295D1",
        },
        red: {
          primary: "#EA3323",
        },
      },
    },
  },
  plugins: [],
};
