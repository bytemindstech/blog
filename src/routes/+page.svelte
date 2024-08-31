<script lang="ts">
	import { route } from '$lib/ROUTES';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="container mx-auto">
	<h3 class="h3">Recent Posts</h3>
	<ul>
		{#each data.posts as post}
			<li><a class="anchor" href={route('/[slug]', { slug: post.slug })}>{post.title}</a></li>
		{/each}
	</ul>
</div>
