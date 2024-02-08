/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '320px',
			...defaultTheme.screens
		},
		extend: {
			maxWidth: {
				'screen-3xl': '1920px'
			}
		}
	},
	plugins: []
}
