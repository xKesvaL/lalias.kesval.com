<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
	}

	const { class: classes, children } = $props<Props>();
</script>

<div class={cn('rounded-lg bg-card p-4 shadow-md', classes)}>
	{#if children}
		{@render children()}
	{/if}
</div>
