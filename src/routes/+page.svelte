<script lang="ts">
	import type { PageData } from './$types';
	import { Hero, SideBar } from '$lib/components';

	export let data: PageData;
</script>

<div class="flex flex-col">
	<div class="bg-surface-100 py-8">
		<div class="container mx-auto px-4">
			<h2 class="h2 text-surface-800 mb-2">Blog</h2>
		</div>
	</div>

	<div class="bg-white py-8">
		<div class="container mx-auto px-4 flex flex-col md:flex-row">
			<Hero />
			<SideBar {data} />
		</div>
	</div>
</div>
