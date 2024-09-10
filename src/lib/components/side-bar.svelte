<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { groupByCategory } from '$lib';

	export let data: any;

	let showAllPosts = false;
	const visibleCount = 3;

	const showMorePosts = (data: Post[]) => data.length > visibleCount;

	const toggleShowMorePosts = () => (showAllPosts = !showAllPosts);

	const groupedData = groupByCategory(data.posts);
</script>

<div class="w-full md:w-1/4 px-4">
	<div class="bg-surface-50 p-4">
		<h3 class="h3 text-surface-800 mb-4">Recent Posts</h3>
		<ul class="list list-inside">
			{#each showAllPosts ? data.posts : data.posts.slice(0, visibleCount) as post}
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
		{#if showMorePosts(data.posts) && !showAllPosts}
			<button
				class="btn btn-sm hover:variant-ghost-primary text-success-800 mt-2"
				on:click={toggleShowMorePosts}>Show more...</button
			>
		{/if}
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
