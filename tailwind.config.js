/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "rgb(7, 24, 58)",
        darkGradientStart: "rgb(13, 31, 66)",
        darkGradientEnd: "rgb(3, 3, 31)",
        darkText: "#fafafa",
        customBlue: "#01cbf4"
      },
      backgroundImage: {
        "dark-gradient":
          "radial-gradient(circle, rgb(13, 31, 66) 0%, rgb(3, 3, 31) 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
