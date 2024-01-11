<script>
	import { SITUATIONS } from '$lib/DATA';
	import { route } from '$lib/ROUTES';
	import Card from '$lib/components/base/Card.svelte';
</script>

<div class="grid grid-cols-2 gap-4 p-4">
	{#each Object.keys(SITUATIONS) as situation}
		<Card class="min-h-96" href={route('/[situation]', { situation })}>
			<h2>
				{situation}
			</h2>
		</Card>
	{/each}
</div>
