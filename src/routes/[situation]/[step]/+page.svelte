<script lang="ts">
	import { DICTIONARY, SITUATIONS } from '$lib/DATA';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { confetti } from '@neoconfetti/svelte';
	import autoAnimate from '@formkit/auto-animate';
	import Button from '$lib/components/ui/button/button.svelte';
	import { viewTransition } from '$lib/utils/functions';

	const situation = $derived($page.params.situation);
	const step = $derived($page.params.step);
	const data = $derived(SITUATIONS[situation].steps[step]);

	let answers = $state<string[]>([]);
	let isRight = $state<boolean | null>(null);

	const addWord = (word: string) => {
		if (answers.length < data.answers.length) {
			answers.push(word);
		}
	};

	const removeWord = (word: string) => {
		answers = answers.filter((answer) => answer !== word);
	};

	const shuffle = (array: string[]) => {
		return array.sort(() => Math.random() - 0.5);
	};

	const validate = () => {
		isRight = answers.join('') === data.answers.join('');
	};

	const nextStage = () => {
		let steps = Object.keys(SITUATIONS[situation].steps);
		let index = steps.indexOf(step);

		if (steps[index + 1]) {
			resetAnswers();
			goto(`./${steps[index + 1]}`);
		} else {
			resetAnswers();
			goto('./success');
		}
	};

	const resetAnswers = () => {
		answers = [];
		isRight = null;
	};

	let shuffled = $derived(
		Array.from(new Set(shuffle([...(data?.words || []), ...data.answers, ...DICTIONARY])))
	);
	let windowHeight: number = $state(0);
	let windowWidth: number = $state(0);
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

{#if isRight}
	<div class="pointer-events-none fixed inset-0 z-50 flex items-start justify-center">
		<div
			class="h-full w-full"
			use:confetti={{ stageHeight: windowHeight * 2, stageWidth: windowWidth }}
		/>
	</div>
{/if}

{#if data}
	<div class="relative h-1/2 w-full">
		<img class="h-full w-full object-cover" src={data.image_url} alt={data.name} />
		<p
			class="absolute bottom-4 left-4 right-4 text-center text-3xl text-background"
			style="text-shadow: 0px 2px 6px hsl(var(--foreground) / 1), 0px -2px 6px hsl(var(--foreground) / 1)"
		>
			{data.base_line}
		</p>
	</div>

	<div class="flex flex-wrap items-center gap-2 p-4 text-xl">
		{#each data.blank_state as blank, i}
			{blank}
			{#if i !== data.blank_state.length - 1}
				<button
					onclick={() => (answers[i] ? removeWord(answers[i]) : null)}
					class="flex h-8 min-w-16 items-center justify-center rounded-md border border-solid px-2 py-1 shadow-md transition {answers[
						i
					]
						? 'cursor-pointer bg-primary/10'
						: 'cursor-default bg-white'}"
				>
					{answers[i]}
				</button>
			{/if}
		{/each}
	</div>

	<div class="flex flex-wrap gap-2 p-4" use:autoAnimate>
		{#each shuffled as word (word)}
			{#if !answers.includes(word)}
				<Button
					variant="ghost"
					class="border shadow-md hover:bg-muted/30 hover:text-muted-foreground"
					on:click={() => addWord(word)}
				>
					{word}
				</Button>
			{/if}
		{/each}
	</div>
	<div class="flex gap-2 p-4">
		<Button on:click={() => validate()}>Validate</Button>
		{#if isRight === true}
			<div class="next">
				<Button class="bg-success hover:bg-success/90" on:click={() => nextStage()}
					>Next step</Button
				>
			</div>
		{:else if isRight === false}
			<div class="false">
				<Button variant="destructive" class="text-white" on:click={() => resetAnswers()}
					>Retry</Button
				>
				<span class="text-destructive">
					Sorry,
					{answers.join(' ')} is not the right answer. Try again !
				</span>
			</div>
		{/if}
	</div>
{/if}
