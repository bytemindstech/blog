<script lang="ts">
	import dateFormatter from '@jhenbert/date-formatter';
	import type { PageData } from './$types';

	export let data: PageData;

	const date = dateFormatter(
		'en-PH',
		{ month: 'long', day: 'numeric', year: 'numeric' },
		new Date(data.meta.date)
	);
</script>

<div class="max-w-7xl mx-auto px-4 mb-8 sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto min-h-screen">
		<!--breadcrumb-->
		<ol class="breadcrumb py-4">
			<li class="crumb"><a class="anchor" href="/">Home</a></li>
		</ol>

		<!-- header -->
		<div class="pb-8">
			<p class="text-secondary-200">Author: <span>{data.meta.author}</span></p>
			<p class="text-secondary-200 text-sm">Date: <span>{date}</span></p>
		</div>

		<!-- content -->
		<div
			class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto prose-h1:text-primary-100 prose-h2:text-surface-100 prose-h3:text-surface-100 prose-strong:text-surface-100"
		>
			<svelte:component this={data.content} />
		</div>
	</div>
</div>

<style>
	.prose {
		color: var(--surface-100);
	}
</style>
