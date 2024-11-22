/** @type {import('tailwindcss').Config} */
import colors, { pink } from "tailwindcss/colors";

export default {
  content: ["./index.html", "src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        ...colors.gray,
        DEFAULT: colors.gray["600"],
      },
      sky: {
        ...colors.sky,
        DEFAULT: colors.sky["600"],
      },
      red: {
        ...colors.red,
        DEFAULT: colors.red["600"],
      },
    },
    extend: {},
  },
  plugins: [],
};
