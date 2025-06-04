// tailwind.config.ts (o .js)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
      fontSize: {
        xs: "1.2rem", // 12px
        sm: "1.4rem", // 14px
        base: "1.6rem", // 16px
        lg: "1.8rem", // 18px
        xl: "2.0rem", // 20px
        h1: "5.2rem", // 52px para un h1 principal
        h2: "4.2rem", // 42px para un h2
        "2xl": "2.4rem", // 24px
        "3xl": "3.0rem", // 30px
        "4xl": "3.6rem", // 36px
        "5xl": "4.8rem", // 48px
        "6xl": "6.0rem", // 60px
        "7xl": "7.2rem", // 72px
        "8xl": "9.6rem", // 96px
        "9xl": "12.8rem", // 128px
      },
    },
  },
  plugins: [],
};
export default config;
