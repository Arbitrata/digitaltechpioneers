/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      "dt-green": "#08D3BB",
      "dt-white": "#ffffff",
      "dt-black": "#000000",
      "dt-pink": "#FFE5DA",
      "dt-sgreen": "#5FC300",
      "dt-pap": "#4628A4",
      "dt-blue": "#1090CB",
    },
    extend: {
      fontFamily: {
        'poppins': ['poppins'],
     }
    },
  },
  plugins: [],
};
