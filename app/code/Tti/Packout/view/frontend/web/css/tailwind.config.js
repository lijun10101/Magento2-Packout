module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        "98":"27rem",
        "100":"28rem",
        "102":"30rem",
        "104":"34rem",
        "106":"36rem"
      },
      transitionProperty: {
        'height': 'height',
       }
    }
  },
  variants: {
    extend: {
      height: ['hover'],
    }
  },
  plugins: [],
}
