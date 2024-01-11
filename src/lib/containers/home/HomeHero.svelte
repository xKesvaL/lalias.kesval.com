<script>
	import { SITUATIONS } from '$lib/DATA';
	import Card from '$lib/components/base/Card.svelte';
</script>

<div class="grid grid-cols-3 gap-4 p-4">
	{#each Object.keys(SITUATIONS) as situation}
		<Card>
			<h2>
				{situation}
			</h2>
		</Card>
	{/each}
</div>
