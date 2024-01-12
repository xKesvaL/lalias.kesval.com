<script>
	import Card from '$lib/components/base/Card.svelte';
</script>

<div class="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3">
	<Card class="flex flex-col gap-2">
		<h2 class="text-4xl">Contributors to the project</h2>
		<ul class="text-lg">
			<li class="before:mr-2 before:content-['•']">Jordan Abeddou</li>
			<li class="before:mr-2 before:content-['•']">Thibaud Reitzer</li>
			<li class="before:mr-2 before:content-['•']">Guillaume Bihry</li>
			<li class="before:mr-2 before:content-['•']">Marvin Blaser</li>
		</ul>
	</Card>
</div>
