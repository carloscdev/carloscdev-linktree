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
        "primary": "#0096E0",
        "secondary": "#7EB942",
        "tertiary": "#07a2ee",
        "custom-black": "#131416",
        "body": "#fff",
      },
      animation: {
        'circle': 'circles 1.3s ease forwards',
        'bar': 'bar 0.5s ease forwards'
      },
      boxShadow: {
        "custom": "0 10px 20px rgba(25,31,61,.1)",
      }
    },
  },
  variants: {
    extend: {
      after: ['animation'],
    }
  },
  plugins: [],
}
