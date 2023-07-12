<script>
	import RandomPokemonLink from '../$lib/client/randomPokemonLink.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen w-full flex-col items-center p-16 text-white bg-black">
	<RandomPokemonLink />

	<div class="p-8"><slot /></div>
</div>
