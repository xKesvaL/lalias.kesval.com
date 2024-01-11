<script lang="ts">
	import { page } from '$app/stores';
	import { SITUATIONS } from '$lib/DATA';
	import { route } from '$lib/ROUTES';
	import Card from '$lib/components/base/Card.svelte';

	interface Props {
		steps: (typeof SITUATIONS)[string]['steps'];
		situation: string;
	}

	let { steps, situation } = $props<Props>();
</script>

<Card class="m-4 flex h-[calc(100vh-8rem)] w-52 flex-col gap-2 p-2" vtn="sidebar">
	{#each Object.keys(steps) as step}
		<a
			class="w-full rounded-md p-4 transition {$page.url.pathname === `/${situation}/${step}`
				? 'bg-primary text-primary-foreground'
				: 'hover:bg-primary/25'}"
			href={route('/[situation]/[step]', { situation, step })}
		>
			{steps[step].name}
		</a>
	{/each}
</Card>
