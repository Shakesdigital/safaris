export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'safari-green': '#24684f',
        'safari-gold': '#d4af37',
        'safari-brown': '#24684f',
      },
      fontFamily: {
        'heading': ['Georgia', 'serif'],
        'body': ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
