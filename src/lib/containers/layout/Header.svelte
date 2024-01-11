<script>
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import Card from '$lib/components/base/Card.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { sidebarOpen } from '$lib/states/common.svelte';
	import { MenuIcon } from 'lucide-svelte';
</script>

<Card class="fixed left-4 right-4 top-4 z-50 flex h-20 items-center justify-between" vtn="header">
	<a href={route('/')}>
		<h1 class="text-4xl">LALIAS</h1>
	</a>
	{#if $page.url.pathname !== '/'}
		<Button size="icon" onclick={() => ($sidebarOpen = !$sidebarOpen)}>
			<MenuIcon class="h-6 w-6" />
		</Button>
	{/if}
</Card>
