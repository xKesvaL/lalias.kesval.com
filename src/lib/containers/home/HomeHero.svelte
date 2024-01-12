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
					<div class="h-6 w-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-chevrons-right"
							width="100%"
							height="100%"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 7l5 5l-5 5" /><path
								d="M13 7l5 5l-5 5"
							/></svg
						>
					</div>
					{Object.keys(SITUATIONS[situation].steps).length} steps
				</span>
			</div>
		</Card>
	{/each}
</div>
