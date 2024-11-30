module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)', 
        secondary: 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
