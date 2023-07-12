<script lang="ts">
	import Pokemon from '../../../$lib/client/pokemon.svelte';
	import type { PageData } from './$types';
	import { invalidate } from '$app/navigation';
	import RandomPokemonLink from '../../../$lib/client/randomPokemonLink.svelte';

	export let data: PageData;
	const invalidateRoute = () => invalidate(`/pokemon/${data.id}`);
</script>

<Pokemon id={data.id} />
<div class="p-8 flex flex-col items-center gap-1">
	<h2 class="text-2xl">Comments</h2>
	<div class="p-8">
		{#each data.posts as post}
			<article>
				<span>{post.content}</span>
			</article>
		{/each}
		<div />
	</div>
</div>

<form class="grid justify-items-center grid-flow-row" method="post" on:submit={invalidateRoute}>
	<label for="content" class="text-xl"> Comment this Pokemon </label>
	<textarea id="content" name="content" class="ml-1 text-black" />
	<input type="submit" />
</form>
