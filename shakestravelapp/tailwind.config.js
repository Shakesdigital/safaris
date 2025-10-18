export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'safari-green': '#2d5016',
        'safari-gold': '#d4af37',
        'safari-brown': '#8b4513',
      },
      fontFamily: {
        'heading': ['Georgia', 'serif'],
        'body': ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
