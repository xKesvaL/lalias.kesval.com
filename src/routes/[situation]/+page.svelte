<script lang="ts">
	import { page } from '$app/stores';
	import { SITUATIONS } from '$lib/DATA';
	import { route } from '$lib/ROUTES';
	import Button from '$lib/components/ui/button/button.svelte';

	let situation = SITUATIONS[$page.params.situation];
</script>

<section
	class="m-4 mb-0 flex w-full flex-col items-center justify-center gap-10 rounded-2xl bg-card p-4 text-2xl"
>
	<h1 class="text-5xl">You chose the following situation : {situation.name}</h1>
	<Button
		href={route('/[situation]/[step]', {
			situation: $page.params.situation,
			step: Object.keys(situation.steps)[0]
		})}>Start game</Button
	>
</section>
