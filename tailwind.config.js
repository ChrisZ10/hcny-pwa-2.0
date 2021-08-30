module.exports = {
  //purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans TC", "sans-serif"]
      },
      colors: {
        primary: {
          light: "#fbdb9d",
          DEFAULT: "#f5a70c",
          dark: "#ab7408",
          darkest: "#493203"
        }
      },
      spacing: {
        "8vh": "8vh",
        "10vh": "10vh",
        "12vh": "12vh"
      }
    },
  },
  variants: {
    extend: {
			
    }
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/aspect-ratio")
  ],
}
