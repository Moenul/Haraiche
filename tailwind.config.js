/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F6FFFC",
        primary: "#A8E6CF",
        primaryDeep: "#7CCFA6",
        secondary: "#FFD1B3",
        secondaryDeep: "#f6c19e",
        pink: "#FFB7C5",
        pinkLight: "#FFD1DC",
        deepBorder: "#2E3B2D",
        border: "#555555",
        lightBorder: "#E2E8F0",
        text: "#333333",
        textSecondary: "#3b3b3b",
        muted: "#b6b6b6",
        danger: "#FF6B6B",
        info: "#ADD8E6",
        success: "#48BB78",
        warning: "#ECC94B",
        errors: "#E53E3E",
        // info box
        reportInfo: "#ff8787",
        verifyInfo: "#ffe28c",
        successInfo: "#bdfb99",

        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        foreground: "hsl(var(--foreground))",
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // chart: {
        //   1: "hsl(var(--chart-1))",
        //   2: "hsl(var(--chart-2))",
        //   3: "hsl(var(--chart-3))",
        //   4: "hsl(var(--chart-4))",
        //   5: "hsl(var(--chart-5))",
        // },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          "2xl": "8rem",
        },
        center: true,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0) rotate(2deg)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0) rotate(-2deg)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0) rotate(2deg)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0) rotate(-2deg)",
          },
        },
      },
      // Add your custom shadow styles here
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // Example
      },
    },
  },
  safelist: ["bg-reportInfo", "bg-verifyInfo", "bg-successInfo"],
  plugins: [require("tailwindcss-animate")],
};
