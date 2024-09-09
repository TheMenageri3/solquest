import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-main": "radial-gradient(rgb(var(--primary)), black)"
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary))",
          muted: "rgb(var(--primary-muted))"
        },
        secondary: "rgb(var(--secondary))",
        veil: "rgb(var(--background-veil))"
      },
      screens : {
        tablet: "650px"
      }
    },
  },
  plugins: [],
};
export default config;
