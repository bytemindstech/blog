import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import type { KIT_ROUTES } from '$lib/ROUTES';

export default defineConfig({
	plugins: [
		sveltekit(),
		purgeCss(),
		kitRoutes<KIT_ROUTES>({
			LINKS: {
				developer: 'https://jhenbert.pro',
				githubAvatar: 'https://avatars.githubusercontent.com/u/[avatarId]?v=4',
				website: 'https://bytemindsph.com'
			}
		})
	]
});
