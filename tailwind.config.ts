import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        ink: "#14171F",
        accent: "#108A00",
        ash: "#404145",
        surface: "#F1F0EC",
        border: "#E4E2DC",
      },
    },
  },
  plugins: [],
};
export default config;
