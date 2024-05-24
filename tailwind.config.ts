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
        "pubnub-dark": "#161C2D",
        "pubnub-red": "#EF3A43",
        "pubnub-faded-red": "#FDECED",
        "pubnub-dark-grey": "#475569",
        "pubnub-light-grey": "#94A3B7",
        "pubnub-yellow": "#FBBF24",
        "pubnub-white": "#F8FAFC",
      },
    },
  },
  plugins: [],
};
export default config;
