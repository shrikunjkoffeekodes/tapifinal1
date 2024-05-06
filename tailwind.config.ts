import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // fontFamily: {
      //   poppinsregular: ['var(--poppins-regular)'],
      //   saira: ['var(--saira)'],
      // }

      // _______________________
      // when used this poppinsregular used as a class and write like this => font.poppinsregular
    },
  },

  plugins: [require("tailwindcss-animated"), require("daisyui")],
  darkMode: "class",
};
export default config;
