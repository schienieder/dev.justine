module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
      gridTemplateRows: {
        'hero': '64px 1fr',
      },
      colors : {
        'custom-dark1' : '#3F3D56',
        'custom-dark2' : '#5A5871'
      }
    },
  },
  plugins: [],
}