/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "theme": {
    "extend": {
    "colors": {
    "navy": "#000b76"
    },
    "spacing": {},
    "fontFamily": {
    "montserrat": "Montserrat"
    }
    },
    "fontSize": {
    "inherit": "inherit"
    }
    },
    "corePlugins": {
    "preflight": false
    }
    ,
  plugins: [],
}