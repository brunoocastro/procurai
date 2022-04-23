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
      colors: {
        ui: {
          primary: '#FFB709',
          background: '#131B25',
          backgroundLight: '#1e293b',
          gray: '#131C25',
          yellow: {
            100: '#FFEDC2',
            400: '#FFDA80',
            700: '#FFB709'
          },
          white: '#FBFBFB',
          black: '#0B0A0A',
          brown: {
            400: '#805C04',
            700: '#332502'
          },
          blue: {
            700: '#1E293B'
          }
        },
      }
    }
  }
}
