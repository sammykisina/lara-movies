module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar"),
  ],
};
