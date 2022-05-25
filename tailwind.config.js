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
        'bar': 'bar 0.5s ease forwards',
        'fadeUp': 'fadeUp 0.5s ease forwards',
      },
      boxShadow: {
        "custom": "0 10px 20px rgba(25,31,61,.1)",
      },
      backgroundImage: {
        "banner": "url('https://images.unsplash.com/photo-1604964432806-254d07c11f32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500')"
      },
    },
  },
  variants: {
    extend: {
      after: ['animation'],
    }
  },
  plugins: [],
}
