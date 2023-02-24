/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/notio/image/upload/v1677221261/zaksartstudio/Hero%20image%20Desktop.png')",
        heroMobile:
          "url('https://res.cloudinary.com/notio/image/upload/v1677221472/zaksartstudio/Hero%20Image%20Mobile.png')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
  ],
};
