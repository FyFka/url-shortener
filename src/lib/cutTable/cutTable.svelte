<script>
	import { cuttedURLs } from '$lib/store';

	let cuttedURLsValue;

	cuttedURLs.subscribe((value) => {
		cuttedURLsValue = value;
	});
</script>

<section class="cut-container">
	{#if cuttedURLsValue.length < 1}
		<div class="cut-empty">
			<h3 class="cut-empty__text">Here will be your shortened links</h3>
		</div>
	{/if}
	{#each cuttedURLsValue as cuttedURL}
		<div class="cut">
			<h4 class="cut__url">{cuttedURL}</h4>
		</div>
	{/each}
</section>

<style>
	.cut-container {
		display: flex;
		flex-direction: column;
		padding: 0 2rem 4rem 2rem;
		max-width: 1280px;
		margin: 0 auto;
		gap: 1rem;
	}
	.cut-empty {
		margin: 4rem 0;
	}
	.cut-empty__text {
		text-align: center;
		font-size: 1.75rem;
		margin: 0;
		font-weight: 300;
		color: var(--accent-color);
	}
	.cut {
		background-color: rgb(30, 41, 59);
		border: 1px solid #3a485d;
		padding: 2rem 1rem;
		border-radius: 0.5rem;
	}
	.cut__url {
		margin: 0;
		color: var(--accent-color);
	}
</style>
