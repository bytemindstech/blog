<script lang="ts">
	import dateFormatter from '@jhenbert/date-formatter';
	import type { PageData } from './$types';
	import { metaDefaults } from '$lib';
	import { onDestroy } from 'svelte';

	export let data: PageData;

	const date = dateFormatter(
		'en-PH',
		{ month: 'long', day: 'numeric', year: 'numeric' },
		new Date(data.meta.date)
	);

	// Reset the title when navigating away
	const resetTitle = () => {
		if (typeof document !== 'undefined') {
			document.title = metaDefaults.title; // Default home page title
		}
	};

	// Set up the onDestroy hook
	onDestroy(resetTitle);
</script>

<svelte:head>
	<title>ByteMinds PH Blog - {data.meta.title}</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 mb-8 sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto min-h-screen">
		<!--breadcrumb-->
		<ol class="breadcrumb text-success-500 py-4">
			<li class="crumb"><a class="anchor" href="/">Blog</a></li>
			<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
			<li>{data.meta.title}</li>
		</ol>

		<!-- header -->
		<div class="pb-8">
			<p class="text-secondary-200 italic">Written by: <span>{data.meta.author}</span></p>
			<p class="text-secondary-200 text-sm italic">Published on: <span>{date}</span></p>
		</div>

		<!-- content -->
		<div
			class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto prose-h1:text-primary-100 prose-h2:text-surface-100 prose-h3:text-surface-100 prose-h4:text-surface-100 prose-strong:text-surface-100 prose-code:text-surface-100 prose-p:text-surface-100"
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
