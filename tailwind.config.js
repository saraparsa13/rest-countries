/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        darkModeElement: 'hsl(209, 23%, 22%)',
        darkModeBackground: 'hsl(207, 26%, 17%)',
        darkModeText: 'hsl(0, 0%, 100%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeInput: 'hsl(0, 0%, 52%)',
        lightModeBackground: 'hsl(0, 0%, 98%)',
      },
      boxShadow: {
        base: 'rgba(0, 0, 0, 0.055) 0px 2px 4px',
        md: 'rgba(0, 0, 0, 0.03) 0px 0px 7px 2px',
        lg: 'rgba(0, 0, 0, 0.055) 0px 2px 9px',
        xl: 'rgba(0, 0, 0, 0.294) 0px 0px 7px',
        xxl: 'rgba(0, 0, 0, 0.106) 0px 0px 4px 1px',
      },
      width: {
        80: '80rem',
        72: '72rem',
        64: '60rem',
        48: '45rem',
        40: '34rem',
        16: '16.5rem'
      },
      screens: {
        'desktop': '1312px',
      },
      gridTemplateColumns: {
        '1': 'repeat(1, 260px)',
        '2': 'repeat(2, 260px)',
        '3': 'repeat(3, 260px)',
        '4': 'repeat(4, 260px)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 600,
        bold: 800,
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  darkMode: 'class',
}
