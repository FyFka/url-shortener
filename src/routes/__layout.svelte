<script>
	import Header from '$lib/header/Header.svelte';
</script>

<Header />
<slot />

<style global lang="scss">
	@import '@fontsource/fira-mono';

	:root {
		font-family: 'fira-mono', sans-serif;
		--neutral-color: rgb(255, 255, 255);
		--accent-color: rgb(58, 51, 156);
		--secondary-accent-color: rgb(82, 82, 82);
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	*::selection {
		color: #fff;
		background: #9e98f5;
	}

	body {
		min-height: 100vh;
		margin: 0;
		background: url('/assets/bg.svg') repeat-y center center;
	}

	#svelte {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	a {
		color: var(--accent-color);
		text-decoration: none;
	}

	input:focus-visible,
	button:focus-visible,
	a:focus-visible {
		outline: 2px solid rgb(15, 14, 88);
		outline-offset: 1px;
	}

	input,
	button {
		font-size: inherit;
		font-family: inherit;
	}
</style>
