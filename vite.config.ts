import type { KIT_ROUTES } from '$lib/ROUTES';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { paraglide } from '@inlang/paraglide-js-adapter-vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			format: 'route(path)',
			
		}),
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		})
	],
	resolve: {
		alias: {
			// This is the alias you can use in your code
			// you can change it to whatever you want
			$paraglide: resolve(__dirname, 'src/paraglide')
		}
	}
});
