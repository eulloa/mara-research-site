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
      cerulean: "#2D83A6",
      cherry: "#8C0327",
      darkBlue: "#687295",
      eggshell: "#d6dbdc",
      gray: "#909298",
      hibiscus: "#BF0436",
      lightBlue: "#A9CBD9",
      navy: "#254159",
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
