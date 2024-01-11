<script lang="ts">
	import { cn } from '$lib/utils/ui';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children?: Snippet;
		href?: string;
	}

	const { class: classes, children, href } = $props<Props>();
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class={cn('rounded-lg bg-card p-4 shadow-md', classes)}
>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>
