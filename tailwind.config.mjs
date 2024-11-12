/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        vistaWhite: {
          50: "#FDFDFD",
          300: "#FFF7FC",
          600: "#F1E7ED",
        },
        sandyYellow: {
          50: "#E1FEC8",
          300: "#C5FF95",
          600: "#96E654",
        },
        periwinkleBlue: {
          50: "#82F8E7",
          300: "#5DEBD7",
          600: "#2EDAC1",
        },
        darkTurquoise: {
          50: "#1679AB",
          300: "#074173",
          600: "#002C52",
        },
        pinkSherbet: {
          50: "#FE80AB",
          300: "#F4538A",
          600: "#E02867",
        },
        mistBlue: {
          50: "#ADAEBC",
          300: "#696A77",
          600: "#40414D",
        },
      },
      backgroundImage: {
        periwinkleYellow: "linear-gradient(to right, #96E654, #82F8E7)",
        turquoiseBlue: "linear-gradient(to right, #1679AB, #5DEBD7)",
        turquoiseShades: "linear-gradient(to top, #002C52, #1679AB)",
      },
      fontFamily: {
        bango: ["Michroma", "sans-serif"],
        base: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
