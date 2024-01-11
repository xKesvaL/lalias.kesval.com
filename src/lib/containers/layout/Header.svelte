<script>
	import { route } from '$lib/ROUTES';
	import Card from '$lib/components/base/Card.svelte';
</script>

<Card class="fixed left-4 right-4 top-4 flex h-20 items-center" vtn="header">
	<a href={route('/')}>
		<h1 class="text-4xl">LALIAS</h1>
	</a>
</Card>
