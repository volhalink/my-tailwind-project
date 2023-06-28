/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4'
      },
      spacing:{
        '72': '18rem'
      }
    },
  },
  plugins: [],
}

