<svelte:head>
	<title>404: Page not found</title>
</svelte:head>

<section class="error">
	<h3 class="error__code">404: Page not found</h3>
	<a href="/">Back to save place</a>
</section>

<style lang="scss">
	.error {
		text-align: center;

		&__code {
			font-size: 2rem;
			margin: 3rem 0 2rem 0;
			font-weight: 700;
			color: var(--accent-color);
		}
	}
</style>
