/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				bounceRight: {
					'0%,100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': {transform: 'translateX(-5px)'},
					'20%, 40%, 60%, 80% ' :{transform: 'translateX(5px)'}
				  },
			},
			animation: {
				'bounce-right': 'bounceRight 6s ease-in-out infinite',
			  },
		},
		fontFamily: {
			'montreux': 'Montreux C',
			'scp': 'Source Code Pro',
			'po': 'PorticoOutline',
		}
	},
	plugins: [],
}
