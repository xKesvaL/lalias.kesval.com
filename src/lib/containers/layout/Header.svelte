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
	<div class="flex items-center gap-2">
		<Button size="icon" href={route('/about')}>
			<div class="h-6 w-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-info-small"
					width="100%"
					height="100%"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9h.01" /><path
						d="M11 12h1v4h1"
					/></svg
				>
			</div>
		</Button>
		{#if $page.url.pathname !== '/'}
			<Button class="md:hidden" size="icon" onclick={() => ($sidebarOpen = !$sidebarOpen)}>
				<div class="h-6 w-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-menu-2"
						width="100%"
						height="100%"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path
							d="M4 12l16 0"
						/><path d="M4 18l16 0" /></svg
					>
				</div>
			</Button>
		{/if}
	</div>
</Card>
