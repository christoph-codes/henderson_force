import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/emails/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bolts: "url('/bolts_bg.png')",
        default: "url('/default_bg.png')",
      },
      fontFamily: {
        sans: ["var(--font-industry)"],
        mono: ["var(--font-gothic)"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          DEFAULT: "#004185",
          100: "#E6F0FF",
          600: "#004185",
          900: "#001F3F",
        },
        gray: {
          DEFAULT: "#171717",
          900: "#111111",
          500: "#333333",
          300: "#4F4F4F",
          100: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
