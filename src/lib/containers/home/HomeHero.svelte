<script lang="ts">
	import { SITUATIONS } from '$lib/DATA';
	import { route } from '$lib/ROUTES';
	import Card from '$lib/components/base/Card.svelte';
	import StepForward from 'lucide-svelte/icons/step-forward';
</script>

<div
	class="grid min-h-[calc(100vh-6rem)] grid-cols-1 grid-rows-6 gap-4 p-4 md:grid-cols-2 md:grid-rows-3"
>
	{#each Object.keys(SITUATIONS) as situation}
		<Card class="flex h-full flex-col justify-between" href={route('/[situation]', { situation })}>
			<h2 class="text-4xl md:text-8xl">
				{SITUATIONS[situation].name}
			</h2>
			<div class="flex items-center gap-2 text-xl">
				<span class="flex items-center gap-2">
					<StepForward class="h-6 w-6" />
					{Object.keys(SITUATIONS[situation].steps).length} steps
				</span>
			</div>
		</Card>
	{/each}
</div>
