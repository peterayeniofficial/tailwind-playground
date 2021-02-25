module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#211d4f",
          secondary: "#f2ab27",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
