/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5",
        secondary: "#FFFFFF",
        primary: "#191847",
        button: "#4788E9",
        border: "#C9C9DA",
        dot: "#00D98B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0px 24px 28px 9px rgba(179, 193, 217, 0.33)",
        btn: "0 7px 0 #1C57EE",
      },
    },
  },
  plugins: [],
};
