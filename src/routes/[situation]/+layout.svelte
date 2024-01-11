<script lang="ts">
	import { page } from '$app/stores';
	import { SITUATIONS } from '$lib/DATA';
	import Card from '$lib/components/base/Card.svelte';
	import SituationSidebar from '$lib/containers/layout/SituationSidebar.svelte';

	const situation = $derived($page.params.situation);
</script>

{#if SITUATIONS[situation]}
	<div class="flex">
		<SituationSidebar steps={SITUATIONS[situation].steps} {situation} />

		<Card
			class="mr-4 mt-4 flex h-[calc(100vh-8rem)] flex-grow flex-col overflow-y-auto overflow-x-hidden p-0"
			vtn="content"
		>
			<slot />
		</Card>
	</div>
{/if}
