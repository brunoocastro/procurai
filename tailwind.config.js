const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        32: ['32px', '40px'],
        20: ['20px', '24px'],
        16: ['16px', '20px'],
        14: ['14px', '17px'],
        12: ['12px', '14px'],
      },
      colors: {
        ui: {
          black: '#131313',
          white: '#FFFFFF',
          blue: '#9BC3FF',
          gray: '#696969',
          grayLight: '#C2C2C2',
          green: '#5BE291',
          red: '#FF6A6A',
          yellow: '#FFCC62'
        },
      }
    }
  }
}
