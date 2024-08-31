import { route } from '$lib/ROUTES';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(route('GET /api/posts'));
	const posts: Post[] = await response.json();

	return { posts };
}) satisfies PageServerLoad;
