import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlack:"#000",
        myNav:"#F1F1F1",
        myPink:"#faf5f5",
        myFooter:"#FAF5F5",
        btnShadow:"",
        homeBg:"",
        recentBg:"#F4E2E2",
        footerBg:"",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heebo: ["heebo", "serif", "sans-serif"],
        inter: ["inter", "sans-serif"]
      },
      
    },
  },
  plugins: [],
};
export default config;
