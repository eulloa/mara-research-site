import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      black: "#000000",
      darkBlue: "#687295",
      eggshell: "#d6dbdc",
      gray: "#909298",
      lightBlue: "#adC2dc",
      navy: "#171d25",
      red: "#FA0808",
      white: "#ffffff"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['var(--font-roboto']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '600'
      }
    },
  },
  plugins: [],
};
export default config;
