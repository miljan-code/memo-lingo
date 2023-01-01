/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#fff',
        primary: '#7a4069',
        primaryDark: '#431c44',
        primaryLight: '#ca4e79',
        secondary: '#ffc18e',
      },
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif'],
        dancing: ['Dancing Script', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
