<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Footer } from '$lib/components';
</script>

<svelte:head>
	<title>ByteMinds | Blog</title>
</svelte:head>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">ByteMinds PH</strong>
			</svelte:fragment>
			<!-- <svelte:fragment slot="trail">About</svelte:fragment> -->
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
