<script lang="ts">
	import { route } from '$lib/ROUTES';

	export let data: any;
</script>

<div class="w-full md:w-1/4 px-4">
	<div class="bg-surface-50 p-4">
		<h2 class="text-xl font-bold text-surface-800 mb-4">Recent Posts</h2>
		<ul class="list-none">
			{#each data.posts as post}
				<li class="mb-2">
					<a
						href={route('/[slug]', { slug: post.slug })}
						class="text-surface-800 hover:text-surface-900">{post.title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<div class="bg-surface-50 p-4 mt-4">
		<h2 class="text-xl font-bold text-surface-800 mb-4">Categories</h2>
		<ul class="list-none">
			<li class="mb-2">
				<a href="#" class="text-surface-800 hover:text-surface-900">Category 1</a>
			</li>
			<li class="mb-2">
				<a href="#" class="text-surface-800 hover:text-surface-900">Category 2</a>
			</li>
			<li class="mb-2">
				<a href="#" class="text-surface-800 hover:text-surface-900">Category 3</a>
			</li>
		</ul>
	</div>
</div>
