import { defineConfig } from 'astro/config'

import icon from 'astro-icon'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), vue(), icon()],
	output: 'server',
	adapter: vercel({
		// includeFiles: ['./src/images/'],
		webAnalytics: {
			enabled: true
		}
	})
})
