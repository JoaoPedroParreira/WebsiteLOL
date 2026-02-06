export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        "midnight": "#0b0f1a",
        "panel": "#101826",
        "accent": "#6c5ce7",
        "accent-soft": "#8c7bff"
      },
      boxShadow: {
        "glow": "0 0 25px rgba(108, 92, 231, 0.35)"
      }
    }
  },
  plugins: []
};
