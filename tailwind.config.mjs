/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				emerald: {
					900: '#064e3b',
					800: '#065f46',
					700: '#047857',
					600: '#059669',
					500: '#10b981',
				},
				amber: {
					400: '#fbbf24',
					500: '#f59e0b',
				}
			}
		},
	},
	plugins: [],
}
