/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C7F37D", // Light Green
        secondary: "#92C351", // Olive Green (Navbar)
        background: "#FEFFF8", // Soft Off-White (Main BG)
        text: "#2E3B2D", // Dark Green (Text & Icons)
        accent: "#FFC107", // Amber Yellow (CTAs)
        danger: "#FF6B6B", // Alert Red (Warnings, Errors)

        success: "#48BB78",
        warning: "#ECC94B",
        errors: "#E53E3E",
      },
      container: {
        padding: {
          DEFAULT: "1rem", // Default padding for all screens
          "2xl": "8rem", // Padding for 2xl screens
        },
        center: true,
      },
    },
  },
  plugins: [],
};
