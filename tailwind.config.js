module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'mont' : ['Montserrat', 'sans-serif']
      },
      colors : {
        'custom-dark' : '#3F3D56',
        'custom-dark2' : '#605E79',
        'custom-purple' : '#6C63FF'
      }
    },
  },
  plugins: [],
}
