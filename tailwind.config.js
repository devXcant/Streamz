/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1a1a1a",
        tertiary: "#2a2a2a",
        light: {
          100: "#ffffff",
          200: "#e5e5e5",
          300: "#cccccc",
          400: "#999999",
        },
        dark: {
          100: "#333333",
          200: "#1a1a1a",
          300: "#0d0d0d",
        },
        accent: "#dc2626", // Red-600
        "accent-light": "#ef4444", // Red-500
        "accent-dark": "#b91c1c", // Red-700
        "accent-glow": "#fca5a5", // Red-300 for glows
      },
    },
  },
  plugins: [],
};
