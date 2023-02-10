const { primary } = require("daisyui/src/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#0061EB",
          secondary: "#007CEF",
          accent: "#00BBF9",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#0061EB",
          secondary: "#007CEF",
          accent: "#00BBF9",
        },
      },
    ],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "760px",
      desktop: "1280px",
    },
    container: {
      center: true,
      screens: {
        mobile: "600px",
        tablet: "750px",
        desktop: "1270px",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
