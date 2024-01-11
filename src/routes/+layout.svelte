<script>
	import '@kesval/design';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/main.scss';
	import '$lib/styles/nprogress.scss';
	import '../app.pcss';

	import nprogress from 'nprogress';
	import { navigating, page } from '$app/stores';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { BRAND } from '$lib/config';
	import Header from '$lib/containers/layout/Header.svelte';

	nprogress.configure({ easing: 'ease', minimum: 0.2, speed: 600 });
	$effect(() => {
		$navigating ? nprogress.start() : nprogress.done();
	});

	setupViewTransition();
</script>

<svelte:head>
	<meta content={BRAND.author.name} name="copyright" />
	<meta content={BRAND.name} name="og:site_name" />

	<!-- Href langs -->
	<link href={$page.url.pathname} hreflang="x-default" rel="alternate" />
</svelte:head>

<Header />

<main class="mt-24">
	<slot />
</main>
