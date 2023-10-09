/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "700px",
      md: "800px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        "page-pattern": "url('/src/assets/background.png')",
        "mobile-pattern": "url('/src/assets/mobile.png')",
        "popup-pattern": "url('/src/assets/bg.png')",
        "gratitude-pattern": "url('/src/assets/bg-2.png')",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        "primary-blue": "#2351FF",
        "secondary-blue": {
          DEFAULT: "#AEB9E0",
          100: "#E3E9FF",
        },
        "primary-gray": "#585D72",
      },
    },
  },
  plugins: [],
}
