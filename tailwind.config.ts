import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'background': '#2B2B2B',
				'blue': '#8CF1FF',
				'red': '#FFB4FC',
				'green': '#93FFBE',
				'yellow': '#F6FF93',
			},
			fontFamily: {
				'rampart': ['Rampart One', 'sans-serif'],
			}
		}
	},
	plugins: [],
}
export default config
