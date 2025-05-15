module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths if needed
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-fade-in': 'slideFadeIn 1s ease-out forwards',
        'marquee-reverse': 'marqueeReverse 20s linear infinite', // Added
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideFadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
        primary: ['"Big Shoulders Display"', 'sans-serif'],
        secondary: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        primary: "#E0F11F",
        secondary: "#D1D1D1",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
