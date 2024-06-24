import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "i": "var(--font-inter)"
      },
      backgroundColor: {
        "app": "#1A1A1A",
        "card": "#292929"
      }
    },
  },
  plugins: [],
};
export default config;
