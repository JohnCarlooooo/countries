import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitosans: ["var(--font-nunitosans)"],
      },
      colors: {
        lightGray: "hsl(0, 0%, 98%)",
        darkGray: "hsl(0, 0%, 52%)",
        "darkBlue-100": "hsl(209, 23%, 22%)",
        "darkBlue-200": "hsl(207, 26%, 17%)",
        "darkBlue-300": "hsl(200, 15%, 8%)",
      },
    },
  },
  plugins: [],
};
export default config;
