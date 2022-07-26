<script>
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import Header from '$lib/header/Header.svelte';
	import UrlCutter from '$lib/urlCutter/UrlCutter.svelte';
	import CutTable from '$lib/cutTable/cutTable.svelte';
	import { onMount } from 'svelte';
	import { cuttedURLs } from '$lib/store';

	onMount(() => {
		try {
			const userUrls = JSON.parse(localStorage.getItem('urls'));
			if (userUrls && Array.isArray(userUrls)) {
				cuttedURLs.update(() => userUrls);
			} else if (userUrls) {
				throw new Error('Failed to restore urls');
			}
		} catch (err) {
			toast.push(err.message, {
				theme: { '--toastBackground': '#F56565', '--toastBarBackground': '#C53030' }
			});
			localStorage.clear();
		}
	});
</script>

<svelte:head>
	<title>URL Shortener</title>
	<meta
		name="description"
		content="A URL shortener is a tool that creates a short URL that will redirect to the specific website."
	/>
</svelte:head>

<Header />
<UrlCutter />
<CutTable />
<SvelteToast options={{ duration: 2000 }} />

<style global lang="scss">
	@import '@fontsource/fira-mono';

	:root {
		font-family: 'fira-mono', sans-serif;
		--primary-color: rgb(240, 240, 240);
		--secondary-color: rgb(255, 255, 255);
		--accent-color: #3a339c;
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

	h1:hover,
	a:hover {
		color: rgb(255, 255, 255);
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
