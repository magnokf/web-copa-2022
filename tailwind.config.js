/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},

			backgroundImage: {
				"hero-pattern": "url(/app-bg.png)",
			},

			colors: {
				yellowCopa: {
					500: "#F7DD43",
					700: "#8B790E",
				},
				greenCopa: {
					500: "#129E57",
				},
				gray: {
					100: "#E1E1E6",
					300: "#8D8D99",
					600: "#323238",
					800: "#202024",
					900: "#121214",
				},
			},
		},
	},
	plugins: [],
};
