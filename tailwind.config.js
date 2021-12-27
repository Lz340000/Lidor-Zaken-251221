module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F2F5F9',
          content: '#ffffff',
          logo: '#625CEA',
          default: '#252525',
          fav: '#FCD844',
          inputBorder: '#eeeeee',
          secondary: '#757575'
        },
        dark: {
          background: '#000000',
          content: '#252525',
          logo: '#8527FF',
          default: '#ffffff',
          fav: '#F9CC10',
          inputBorder: '#424242',
          secondary: '#D1D1CF'
        }
      },
      boxShadow: {
        'wheatear': ' 0 20px 44px rgb(50 50 93 / 12%), 0 -1px 32px rgb(50 50 93 / 6%), 0 3px 12px rgb(0 0 0 / 8%)'
      }
    }
  },
  plugins: []
}
