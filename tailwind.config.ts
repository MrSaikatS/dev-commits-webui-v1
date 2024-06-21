import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|card|divider|image|input|link|modal|navbar|popover|skeleton|tabs|ripple|spinner).js"
],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};

export default config;
