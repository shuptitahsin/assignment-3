/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'custom-pcolor': 'rgba(19, 19, 24, 0.6)',
        'border-color' : 'rgba(19, 19, 24, 0.1)',
        'phone-bg': 'rgba(188, 237, 109, 0.1)',
        'mail-bg': 'rgba(253, 221, 95, 0.1)',
        'location-bg': 'rgba(98, 156, 243, 0.1)',

      },
      fontSize: {
        'sm': '16px', // Set 'text-sm' to 16px
      },
    },
  },
  plugins: [require('daisyui')],
}


