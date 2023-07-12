<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPokemon, type Pokemon } from './pokeClient';
	export let id: string;
	let pokemonFetch: Promise<Pokemon>;
	onMount(() => {
		pokemonFetch = fetchPokemon(id);
	});
</script>

<div class="flex flex-col items-center">
	{#if pokemonFetch !== undefined}
		{#await pokemonFetch}
			<h2>Loading...</h2>
		{:then pokemon}
			<img height={200} width={200} src={pokemon.sprites.front_default} alt={pokemon.name} />
			<div>
				Name: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
			</div>
			<div>Weight: {pokemon.weight}</div>
		{/await}
	{/if}
</div>
