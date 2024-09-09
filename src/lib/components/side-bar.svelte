<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { groupByCategory } from '$lib';

	export let data: any;

	const groupedData = groupByCategory(data.posts);
</script>

<div class="w-full md:w-1/4 px-4">
	<div class="bg-surface-50 p-4">
		<h3 class="h3 text-surface-800 mb-4">Recent Posts</h3>
		<ul class="list list-inside">
			{#each data.posts as post}
				{#if post.isPublished}
					<li class="mb-2">
						<a
							href={route('/[slug]', { slug: post.slug })}
							class="anchor !text-surface-800 hover:text-surface-900">{post.title}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<div class="bg-surface-100 p-4 mt-4">
		<h3 class="h3 text-surface-800 mb-4">Categories</h3>
		{#each groupedData as categories}
			{#if categories.details.some((detail) => detail.isPublished)}
				<h5 class="h5 text-surface-800">{categories.category}</h5>
				<ul class="list">
					{#each categories.details as detail}
						{#if detail.isPublished}
							<li>
								<a
									href={route('/[slug]', { slug: detail.slug })}
									class="anchor !text-surface-800 hover:text-surface-900">{detail.title}</a
								>
							</li>
						{/if}
					{/each}
				</ul>
			{/if}
		{/each}
	</div>
</div>
