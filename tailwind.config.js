module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'frank': ['Frank Ruhl Libre'],
    },
    extend: {
      colors: {

        dark: {
          DEFAULT: "#0A192F",
          100: "#112D3D",
          200: "#133040",
          300: "#112240",
          400: "#326D7F",
        },
        let: {
          DEFAULT: "#8592B0",
          100: "#CCD6F6"
        },
        pri: {
          DEFAULT: "#2D41A0",
          100: "#5565AE",
        },
        rou: {
          DEFAULT: "#FB4778",
          100: "#FFD3DF",
          200: "#FC84A5",
        },
        ver: {
          DEFAULT: "#14BE81",
          100: "#62D3AB",
          200: "#418C72",
        },
        plo:{
          DEFAULT: "#9CA1B7",
          200: "#C8CBD7",
          100: "#F4F6F9",
          300: "#BFC6D0",
        }

      }
    },
  },
  plugins: [],
}
