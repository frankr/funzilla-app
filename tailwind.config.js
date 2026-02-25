/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2b9dee",
        "primary-light": "#eef8ff",
        "secondary-mint": "#4ade80",
        "secondary-orange": "#fb923c",
        "background-light": "#ffffff",
        "background-dark": "#101a22",
        "surface-light": "#f8fafc",
        "mint-accent": "#bef2e5",
        "orange-accent": "#ffcda6",
      },
      fontFamily: {
        display: ["PlusJakartaSans_800ExtraBold"],
        sans: ["PlusJakartaSans_400Regular"],
        "sans-medium": ["PlusJakartaSans_500Medium"],
        "sans-semibold": ["PlusJakartaSans_600SemiBold"],
        "sans-bold": ["PlusJakartaSans_700Bold"],
        "sans-extrabold": ["PlusJakartaSans_800ExtraBold"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
      },
    },
  },
  plugins: [],
};
