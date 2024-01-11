<script lang="ts">
	import { page } from '$app/stores';
	import { SITUATIONS } from '$lib/DATA';
	import { route } from '$lib/ROUTES';
	import Card from '$lib/components/base/Card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { sidebarOpen } from '$lib/states/common.svelte';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';

	interface Props {
		steps: (typeof SITUATIONS)[string]['steps'];
		situation: string;
	}

	let { steps, situation } = $props<Props>();
</script>

<Card
	class="absolute inset-0 top-24 z-10 m-2 mr-0 flex h-[calc(100vh-7rem)] w-[calc(100vw-1rem)] flex-shrink-0 md:m-4 {$sidebarOpen
		? 'translate-x-0'
		: '-translate-x-[150%]'} flex-col gap-2 p-2 transition md:relative md:h-[calc(100vh-8rem)] md:w-52 md:translate-x-0"
	vtn="sidebar"
>
	<Button
		class="flex h-14 items-center justify-start gap-3 pl-3 text-lg font-bold hover:bg-muted/30 hover:text-muted-foreground"
		href={route('/')}
		variant="ghost"
	>
		<ArrowLeft class="h-6 w-6" />
		<span>
			{SITUATIONS[situation].name}
		</span>
	</Button>
	<hr />
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
