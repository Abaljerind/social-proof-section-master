/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        veryDarkMagenta: "hsl(300, 43%, 22%)",
        softPink: "hsl(333, 80%, 67%)",
        darkGrayishMagenta: "hsl(303, 10%, 53%)",
        lightGrayishMagenta: "hsl(300, 24%, 96%)",
      },
    },
    fontFamily: {
      spartan: "League Spartan",
    },
    backgroundImage: {
      patternBottomDesktop: "url(/images/bg-pattern-bottom-desktop.svg)",
      patternTopDesktop: "url(/images/bg-pattern-top-desktop.svg)",
      patternBottomMobile: "url(/images/bg-pattern-bottom-mobile.svg)",
      patternTopMobile: "url(/images/bg-pattern-top-mobile.svg)",
      iconStar: "url(/images/icon-star.svg)",
    },
  },
  plugins: [],
};
