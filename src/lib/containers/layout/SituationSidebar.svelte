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
		: '-translate-x-[150%]'} flex-col gap-2 p-2 transition md:relative md:top-0 md:mr-0 md:h-[calc(100vh-8rem)] md:w-52 md:translate-x-0"
	vtn="sidebar"
>
	<Button
		class="flex h-14 items-center justify-start gap-3 pl-3 text-lg font-bold hover:bg-muted/30 hover:text-muted-foreground"
		href={route('/')}
		variant="ghost"
	>
		<div class="h-6 w-6">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-arrow-left"
				width="100%"
				height="100%"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path
					d="M5 12l6 6"
				/><path d="M5 12l6 -6" /></svg
			>
		</div>
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
