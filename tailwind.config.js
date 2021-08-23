module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans TC", "sans-serif"]
      },
      colors: {
        primary: {
          light: "#cff50c",
          DEFAULT: "#f5a70c",
          dark: "#f5320c"
        }
      }
    },
  },
  variants: {
    extend: {
			
    }
  },
  plugins: [
    require("tailwindcss-textshadow")
  ],
}
