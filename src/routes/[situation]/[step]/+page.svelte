<script lang="ts">
	import { SITUATIONS } from '$lib/DATA';
	import { page } from '$app/stores';

	const situation = $derived($page.params.situation);
	const step = $derived($page.params.step);
	const data = $derived(SITUATIONS[situation].steps[step]);
</script>

{#if data}
	<div class="relative h-1/2 w-full">
		<img class="h-full w-full object-cover" src={data.image_url} alt={data.name} />
		<p
			class="relative bottom-12 left-4 right-4 text-center text-3xl text-background"
			style="text-shadow: 0px 2px 6px hsl(var(--foreground) / 1), 0px -2px 6px hsl(var(--foreground) / 1)"
		>
			{data.base_line}
		</p>
	</div>

	<div class="flex flex-wrap items-center gap-2 text-xl">
		{#each data.answers as d}{/each}
	</div>
{/if}
