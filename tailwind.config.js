module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "montserrat": ['Montserrat', 'sans-serif']
    },
    extend: {
      height: {
        "banner": "300px"
      },
      colors: {
        "primary": "#495ECA",
        "secondary": "#FFA45A",
        "tertiary": "#556BDA",
        "body": "#fff",
      },
      animation: {
        'circle': 'circles 1.3s ease forwards'
      },
      boxShadow: {
        "custom": "0 10px 20px rgba(25,31,61,.1)",
      }
    },
  },
  plugins: [],
}
