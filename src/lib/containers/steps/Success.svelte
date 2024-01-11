<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';
	import { confetti } from '@neoconfetti/svelte';

	function goHome() {
		goto('/');
	}

	function goRetry() {
		goto('./');
	}

	let innerWidth = $state(0);
	let innerHeight = $state(0);
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="pointer-events-none fixed inset-0 z-50 flex items-start justify-center">
	<div
		use:confetti={{
			stageHeight: innerHeight * 2,
			stageWidth: innerWidth
		}}
	/>
</div>

<section
	class="m-4 mb-0 flex w-full flex-col items-center justify-center gap-10 rounded-2xl bg-card p-4 text-2xl"
>
	<h1>Congratulations on passing this module !</h1>
	<div class="flex flex-row gap-5">
		<Button on:click={() => goHome()}>Home</Button>
		<Button variant="destructive" class="text-white" on:click={() => goRetry()}>Retry</Button>
	</div>
</section>
