/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "18%": "18%",
        "70%": "70%",
        "90%": "83%",
        "92%": "92%",
      },
      width: {
        profileImgWidth: "22%",
        "95%": "95%",
        "70%": "70%",
      },
      borderRadius: {
        profileBR: "2rem",
        "1/2": "50%",
      },
      backgroundColor: {
        formElementColor: "#535150",
      },
      backgroundImage: {
        bg1: "url('/src/img/mainBackground1.jpeg')",
        bg2: "url('/src/img/mainBackground2.jpeg')",
        bg3: "url('/src/img/mainBackground3.webp')",
        bg4: "url('/src/img/mainBackground4.jpeg')",
      },
      colors: {
        bgTan: "#D7CEC7",
      },
      fontFamily: {
        abril: ["Abril Fatface"],
      },
    },
  },
  plugins: [],
};
