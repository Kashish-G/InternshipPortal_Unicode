/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: { "100": "#74757e", "200": "#212121", "300": "#1a202c" },
        darkslateblue: { "100": "#6255a5", "200": "#4a2145" },
        black: "#000000",
        azure: "#e9fdff",
        lightcyan: "#d9fffc",
        whitesmoke: { "100": "#f1f0f0", "200": "#efefef" },
        mediumaquamarine: "#85d1a0",
        ghostwhite: "#f9f7ff",
        slategray: "#57737a",
        gainsboro: "#d9d9d9",
        cadetblue: "rgba(110, 188, 183, 0.1)",
        tomato: { "100": "#ef5743", "200": "rgba(239, 87, 67, 0.1)" },
        teal: {
          500: '#00796b',
        },
        black: {
          900: '#1a1a1a',
        },
      },
      fontFamily: { inter: "Inter", poppins: "Poppins" },
      borderRadius: { xl: "20px", "81xl": "100px" },
      fontSize: {
        "3xl": "1.38rem",
        lg: "1.13rem",
        sm: "0.88rem",
        mini: "0.94rem",
        "13xl": "2rem",
        "5xl": "1.5rem",
        xl: "1.25rem",
        "29xl": "3rem",
        base: "1rem",
        "40": "2.5rem", 
      },
      fontWeight: {
        'extrabold': 600,
      },
    
    },
  },
  corePlugins: { preflight: false },
};
