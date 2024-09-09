<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Footer } from '$lib/components';
	import { page } from '$app/stores';
	import '../app.postcss';
	import { route } from '$lib/ROUTES';

	// SEO meta tags
	const metaDefaults = {
		title: 'ByteMinds PH Blog - Online Tutoring for Academic Excellence',
		description:
			'ByteMinds PH - your trusted partner in online education. Access expert tutoring services anytime, anywhere, and elevate your learning experience.',
		image: `${route('githubAvatar', { avatarId: '159615949' })}`,
		url: 'https://blog.bytemindsph.com'
	};

	const meta = {
		title: metaDefaults.title,
		description: metaDefaults.description,
		image: metaDefaults.image,
		url: metaDefaults.url,
		//Twitter
		twitter: {
			title: metaDefaults.title,
			description: metaDefaults.description,
			image: metaDefaults.image
		}
	};

	page.subscribe(() => {
		//Restore Page Defaults
		meta.title = metaDefaults.title;
		meta.description = metaDefaults.description;
		meta.image = metaDefaults.image;
		//Restore Twitter Defaults
		meta.twitter.title = metaDefaults.title;
		meta.twitter.description = metaDefaults.description;
		meta.twitter.image = metaDefaults.image;
	});
</script>

<svelte:head
	><title>{meta.title}</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta
		name="keywords"
		content="online tutoring, expert tutors, academic success, online education, virtual online services, top-rated tutors, academic improvement, subject-specific tutoring, blog, web development, reddit"
	/>
	<meta name="author" content="ByteMinds PH" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="ByteMinds PH" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={meta.url + $page.url.pathname} />
	<meta property="og:locale" content="en_PH" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:image:secure_url" content={meta.image} />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="460" />
	<meta property="og:image:height" content="460" />
	<meta property="og:image:alt" content="ByteMinds PH logo" />
	<!-- Open Graph: Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@ByteMindsPH" />
	<meta name="twitter:creator" content="@ByteMindsPH" />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />
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
