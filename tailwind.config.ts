import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#20202A",
        rice: "#F8F2E6",
        cinnabar: "#B83B32",
        lapis: "#244E8F",
        jade: "#2D7C72",
        gilt: "#D7A642",
        plum: "#5F3868"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 28px 90px rgba(36, 78, 143, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
