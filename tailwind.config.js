/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
			original: "Original, cursive",
			serpentine: "Serpentine",
			covesl: "Coves-L",
			covesb: "Coves-B"
		}
	  },
	},
	plugins: [],
  }