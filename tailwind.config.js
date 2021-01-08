module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#fcdada",
          900: "#ffa5a5",
        },
        green: "#5c969e",
        blue: {
          100: "E0F2FE",
          500: "#3d7ea6",
        },
      },
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
