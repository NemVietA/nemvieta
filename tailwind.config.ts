import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        p: "240px",
        d: "1024px",
      },
      fontFamily: {
        //system font
        OpenSans: ["Open Sans", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        //custom font
        NunitoSans: ["Nunito Sans", "sans-serif"],
        SVNDancing: ["SVN-Dancing", "sans-serif"],
        UTMAmerican: ["UTMAmerican", "sans-serif"],
        UTMFleur: ["UTMFleur", "sans-serif"],
        Questrial: ["Questrial", "sans-serif"],
      },

      rotate: {
        "315": "315deg",
      },

      colors: {
        //system colors
        redPrimmary: "#ed1b2e",
        Blue3D: "#1D1D3D",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        blueAdmin: "#74affc",
        purpleAdmin: "#bb86fc37",
        purpleHover: "#BB86FC",
        BlueFF: "#1A49FF",
        //Custom colors
        maingreen: "#1e7147",
        mainyellow: "#f3e09d",
        mainorange: "#f3b41e",
        mainblue: "#171fc0",

        customBlue: "#B2DDF7",
        customBlueSecondary: "#6bdfdb",
        customAqua: "#81D6E3",
        customSky: "#0070FF",
        textCustom: "#0000F",
        textHeadSession: "#20315c",
        customBgHeader: "#0d41e1",
      },

      // custom
      backgroundImage: {},
      backgroundColor: {},
    },
  },
  plugins: [],
};
export default config;
