const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			black1: '#2D2E36',
			gray1: '#888888',
			red: colors.red,
			primary: '#50C9C3',
		},
	},
	plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
	variants: {
		// ...
		scrollbar: ['dark'],
	},
};
